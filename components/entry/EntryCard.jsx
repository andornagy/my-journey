import Image from "next/image";
import Link from "next/link";
import { excerpt } from "@/utils/utils";

const EntryCard = ({ entry }) => {
	return (
		<div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
			<div className="aspect-square relative w-2/5 m-0 rounded-r-none bg-clip-border rounded-xl shrink-0">
				<Image
					src={entry?.images[0]}
					alt={entry?.title}
					className="object-cover w-full h-full aspect-video"
					width={500}
					height={500}
				/>
			</div>
			<div className="p-6">
				<div className="pb-2">
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
				<h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
					{entry?.title}
				</h4>
				<p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
					{excerpt(entry?.content, 20)}
				</p>
				<Link href={`/entry/${entry?._id}`} className="">
					<button
						className="inline-block flex items-center bg-teal-500 gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
						type="button"
					>
						Read Entry
					</button>
				</Link>
			</div>
		</div>
	);
};

export default EntryCard;
