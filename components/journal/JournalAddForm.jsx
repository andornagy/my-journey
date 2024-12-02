import addJournal from "@/app/actions/addJournal";

const JournalAddForm = () => {
	return (
		<form action={addJournal}>
			<h2 className="text-3xl text-center font-semibold mb-6">
				Add a new Journal
			</h2>

			<div className="mb-4">
				<label htmlFor="images" className="block text-gray-700 font-bold mb-2">
					Images (Select up to 4 images)
				</label>
				<input
					type="file"
					id="images"
					name="images"
					className="border rounded w-full py-2 px-3"
					accept="image/*"
					multiple
					required
				/>
			</div>

			<div className="mb-4">
				<label className="block text-gray-700 font-bold mb-2">
					Journal Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					className="border rounded w-full py-2 px-3 mb-2"
					placeholder="eg. Beautiful Apartment In Miami"
					required
				/>
			</div>
			<div className="mb-4">
				<label
					htmlFor="description"
					className="block text-gray-700 font-bold mb-2"
				>
					A short description
				</label>
				<textarea
					id="description"
					name="description"
					className="border rounded w-full py-2 px-3"
					rows="4"
					placeholder="Add an optional description of your property"
				></textarea>
			</div>

			<div>
				<button
					className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
					type="submit"
				>
					Create Journal
				</button>
			</div>
		</form>
	);
};

export default JournalAddForm;
