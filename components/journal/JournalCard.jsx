import Image from "next/image";
import Link from "next/link";

const JournalCard = ({ journal }) => {
	return (
		<div className="rounded overflow-hidden shadow-lg">
			<Link href={`/journal/${journal?._id}`}>
				<Image
					className="w-full aspect-video object-cover"
					src={journal?.image}
					alt={journal?.title}
					height={500}
					width={1500}
				/>
			</Link>
			<div className="px-6 py-6">
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
