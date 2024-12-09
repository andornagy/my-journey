"use server";

import connectDB from "@/config/database";
import Entry from "@/models/Entry";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import cloudinary from "@/config/cloudinary";

async function addEntry(formData) {
	await connectDB();

	const sessionUser = await getSessionUser();

	if (!sessionUser || !sessionUser.userId) {
		throw new Error("You must be logged in to add a property");
	}

	const { userId } = sessionUser;

	const entryData = {
		owner: userId,
		title: formData.get("name"),
		content: formData.get("description"),
		tags: formData.get("tags"),
		journal: formData.get("journal"),
	};

	// access all values from amenities and images
	const images = formData.getAll("images").filter((image) => image.name !== "");

	const imageUrls = [];
	for (const imageFile of images) {
		const imageBuffer = await imageFile.arrayBuffer();
		const imageArray = Array.from(new Uint8Array(imageBuffer));
		const imageData = Buffer.from(imageArray);

		// Convert to base64
		const imageBase64 = imageData.toString("base64");

		// make request to cloudinary
		const result = await cloudinary.uploader.upload(
			`data:image/png;base64,${imageBase64}`,
			{
				folder: "my-journey",
			}
		);
		imageUrls.push(result.secure_url);
	}

	entryData.images = imageUrls;

	const newEntry = new Entry(entryData);
	await newEntry.save();

	revalidatePath("/", "layout");

	redirect(`/entry/${newEntry._id}`);
}

export default addEntry;
