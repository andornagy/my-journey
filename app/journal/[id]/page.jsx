import connectDB from "@/config/database";
import Journal from "@/models/Journal";
import Entry from "@/models/Entry";
import EntryCard from "@/components/entry/EntryCard";
import Link from "next/link";

const JournalPage = async ({ params }) => {
	await connectDB();

	const { id } = await params;

	const journal = await Journal.findById(id).lean();

	const entries = await Entry.find({ journal: id }).lean();

	return (
		<div className="container-xl lg:container m-auto px-4 py-6">
			<h1 className="text-3xl text-center font-semibold mb-6">
				{journal.title} -{" "}
				<Link href={`/journal/${id}/addEntry`}>Add a New Entry</Link>
			</h1>

			<p className="text-gray-700 text-base font-size-lg mb-6">
				{journal.description}
			</p>

			{entries.lenght === 0 ? (
				<p>No journals found</p>
			) : (
				<div className="grid grid-cols-2 gap-4">
					{entries.map((entry) => (
						<EntryCard key={entry._id} entry={entry} />
					))}
				</div>
			)}
		</div>
	);
};

export default JournalPage;
