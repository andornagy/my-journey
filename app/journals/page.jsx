import JournalCard from "@/components/journal/JournalCard";

import connectDB from "@/config/database";
import Journal from "@/models/Journal";
const JournalsPage = async () => {
	await connectDB();
	const journals = await Journal.find({}).lean();

	return (
		<div className="container-xl lg:container m-auto px-4 py-6">
			{journals.lenght === 0 ? (
				<p>No journals found</p>
			) : (
				<div className="grid grid-cols-3 gap-4">
					{journals.map((journal) => (
						<JournalCard key={journal._id} journal={journal} />
					))}
				</div>
			)}
		</div>
	);
};

export default JournalsPage;
