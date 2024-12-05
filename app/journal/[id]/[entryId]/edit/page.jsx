import EntryEditForm from '@/components/entry/EntryEditForm';
import connectDB from '@/config/database';
import Entry from '@/models/Entry';
import { convertToSerializableObject } from '@/utils/convertToObject';
// import { useParams } from 'next/navigation';

const EntryEditPage = async ({ params }) => {
  await connectDB();

  const entryDoc = await Entry.findById(params.entryId).lean();

  const entry = convertToSerializableObject(entryDoc);

  return (
    <section>
      <div className="container-lg m-auto lg:container py-12">
        <h1 className="text-3xl text-center font-semibold mb-6">Edit Entry</h1>
        <div className="px-6 m-4 md:m-0">
          <EntryEditForm entry={entry} />
        </div>
      </div>
    </section>
  );
};

export default EntryEditPage;
