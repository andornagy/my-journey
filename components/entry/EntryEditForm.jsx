import updateEntry from "@/app/actions/updateEntry";
import Journal from "@/models/Journal";

const EntryEditForm = async ({ entry }) => {
	const updateEntryById = updateEntry.bind(null, entry._id);
	const journals = await Journal.find().lean();

	return (
		<form action={updateEntryById}>
			<div className="grid grid-cols-12 gap-6">
				<h2 className="col-span-12 text-xl font-semibold mb-6">Edit Entry</h2>
				<div className="col-span-9">
					<div className="mb-4">
						<label className="hidden block text-gray-700 font-bold mb-2">
							Entry Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className="border-b-4 w-full py-2 mb-2"
							placeholder="eg. Day 4 in the Alps"
							required
							defaultValue={entry?.title}
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="description"
							className="block text-gray-700 font-bold mb-2"
						>
							Entry content
						</label>
						<textarea
							id="description"
							name="description"
							className="outline-0 border-b-4 w-full py-2"
							rows="16"
							placeholder="How was your day in the mountains? What did you do?"
							defaultValue={entry?.content}
						></textarea>
					</div>
				</div>
				<div className="col-span-3 bg-white px-6 py-8 mb-4 rounded-md border m-4 md:m-0">
					<div className="mb-4">
						<label
							htmlFor="journal"
							className="block text-gray-700 font-bold mb-2"
						>
							Select Journal
						</label>
						<select
							id="journal"
							name="journal"
							className="border rounded w-full py-2 px-3"
							required
						>
							{journals.map((journal) => (
								<option key={journal._id} value={journal._id}>
									{journal.title}
								</option>
							))}
						</select>
					</div>

					<div className="mb-4">
						<label
							htmlFor="images"
							className="block text-gray-700 font-bold mb-2"
						>
							Images (Select up to 4 images)
						</label>
						<input
							type="file"
							id="images"
							name="images"
							className="border rounded w-full py-2 px-3"
							accept="image/*"
							multiple
						/>
					</div>

					<div className="mb-4">
						<label
							htmlFor="tags"
							className="block text-gray-700 font-bold mb-2"
						>
							Keywords
						</label>
						<input
							type="text"
							id="tags"
							name="tags"
							className="border rounded w-full py-2 px-3"
						/>
					</div>
					<div>
						<button
							className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Update Entry
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default EntryEditForm;
