import { Schema, model, models } from "mongoose";

const EntrySchema = new Schema(
	{
		owner: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		title: {
			type: String,
		},
		content: {
			type: String,
		},
		images: [
			{
				type: String,
			},
		],
		tags: [
			{
				type: String,
			},
		],
		journal: {
			type: Schema.Types.ObjectId,
			ref: "Journal",
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Entry = models.Entry || model("Entry", EntrySchema);

export default Entry;
