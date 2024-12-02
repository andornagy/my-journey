import { Schema, model, models } from "mongoose";

const JournalSchema = new Schema(
	{
		owner: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		title: {
			type: String,
		},
		description: {
			type: String,
		},
		image: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const Journal = models.Journal || model("Journal", JournalSchema);

export default Journal;
