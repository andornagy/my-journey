import JournalEditForm from "@/components/journal/JournalEditForm";
import Journal from "@/models/Journal";
import connectDB from "@/config/database";
import { convertToSerializableObject } from "@/utils/convertToObject";

const JournalEditPage = async ({ params }) => {
	await connectDB();

	const journalDoc = await Journal.findById(params.id).lean();

	const journal = convertToSerializableObject(journalDoc);

	if (!journal) {
		throw new Error("Journal not found");
	}
	return (
		<section className="bg-blue-50">
			<div className="container m-auto max-w-2xl py-24">
				<div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
					<JournalEditForm journal={journal} />
				</div>
			</div>
		</section>
	);
};

export default JournalEditPage;
