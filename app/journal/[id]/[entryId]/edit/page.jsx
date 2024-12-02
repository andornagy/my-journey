import EntryEditForm from '@/components/entry/EntryAddForm';
import connectDB from '@/config/database';
import Entry from '@/models/Entry';
import { convertToSerializableObject } from '@/utils/convertToObject';

const EntryEditPage = async (params) => {
  await connectDB();

  const entryDoc = await Entry.findById(params.entryId).lean();
  console.log(params.entryId);

  const entry = convertToSerializableObject(entryDoc);

  if (!entry) {
    throw new Error('Entry not found');
  }

  return (
    <section>
      <div className="container-lg m-auto lg:container py-12">
        <div className="px-6 m-4 md:m-0">
          <EntryEditForm entry={entry} />
        </div>
      </div>
    </section>
  );
};

export default EntryEditPage;
