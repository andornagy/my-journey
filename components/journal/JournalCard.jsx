import Image from "next/image";
import Link from "next/link";

const JournalCard = ({ journal }) => {
	return (
		<div className="rounded overflow-hidden shadow-lg">
			<Image
				className="w-full"
				src={journal?.image}
				alt={journal?.title}
				height={500}
				width={1500}
			/>
			<div className="px-6 pt-3">
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
					#photography
				</span>
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
					#travel
				</span>
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
					#winter
				</span>
			</div>
			<div className="px-6 py-4">
				<Link href={`/journal/${journal?._id}`}>
					<div className="font-bold text-xl mb-2">{journal?.title}</div>
				</Link>
				<p className="text-gray-700 text-base">{journal?.description}</p>
				<Link
					className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block"
					href={`/journal/${journal?._id}`}
				>
					Open Journal
				</Link>
			</div>
		</div>
	);
};

export default JournalCard;
