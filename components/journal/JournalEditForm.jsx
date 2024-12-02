"use client";

import updateJournal from "@/app/actions/updateJournal";

const JournalEditForm = ({ journal }) => {
	const updateJournalById = updateJournal.bind(null, journal._id);

	return (
		<form action={updateJournalById}>
			<h2 className="text-3xl text-center font-semibold mb-6">Edit Journal</h2>

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
					defaultValue={journal?.title}
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
					placeholder="Edit an optional description of your property"
					defaultValue={journal?.description}
				></textarea>
			</div>

			<div>
				<button
					className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
					type="submit"
				>
					Update Journal
				</button>
			</div>
		</form>
	);
};

export default JournalEditForm;
