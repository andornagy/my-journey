"use server";

import connectDB from "@/config/database";
import Entry from "@/models/Entry";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import cloudinary from "@/config/cloudinary";
import { toast } from "react-toastify";

async function updateEntry(entryId, formData) {
	await connectDB();

	const sessionUser = await getSessionUser();

	if (!sessionUser || !sessionUser.userId) {
		throw new Error("You must be logged in to add a property");
	}

	const entryData = {
		title: formData.get("name"),
		content: formData.get("description"),
		tags: formData.get("tags"),
		journal: formData.get("journal"),
	};

	const updatedJournal = await Entry.findByIdAndUpdate(entryId, entryData);

	revalidatePath("/", "layout");
}

export default updateEntry;
