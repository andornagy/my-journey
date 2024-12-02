"use server";

import connectDB from "@/config/database";
import Journal from "@/models/Journal";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
// import cloudinary from "@/config/cloudinary";

async function updateJournal(journalId, formData) {
	await connectDB();

	console.log(formData);

	const sessionUser = await getSessionUser();

	if (!sessionUser || !sessionUser.userId) {
		throw new Error("You must be logged in to add a property");
	}

	const { userId } = sessionUser;

	const journalData = {
		owner: userId,
		title: formData.get("name"),
		description: formData.get("description"),
	};

	// access all values from images
	// const imageFile = formData.get("images");

	// const imageBuffer = await imageFile.arrayBuffer();
	// const imageArray = Array.from(new Uint8Array(imageBuffer));
	// const imageData = Buffer.from(imageArray);

	// // Convert to base64
	// const imageBase64 = imageData.toString("base64");

	// // make request to cloudinary
	// const result = await cloudinary.uploader.upload(
	// 	`data:image/png;base64,${imageBase64}`,
	// 	{
	// 		folder: "my-journey",
	// 	}
	// );

	// journalData.image = result.secure_url;

	const updatedJournal = await Journal.findByIdAndUpdate(
		journalId,
		journalData
	);

	revalidatePath("/", "layout");

	redirect(`/journal/${journalId}`);
}

export default updateJournal;
