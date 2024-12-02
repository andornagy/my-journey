import connectDB from '@/config/database';
import Entry from '@/models/Entry';
import Image from 'next/image';
import Link from 'next/link';

const EntryPage = async ({ params }) => {
  await connectDB();

  const entry = await Entry.findById(params.entryId).lean();

  return (
    <section className="bg-blue-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border md:m-0">
          <Link
            className="font-bold rounded mb-4 block"
            href={`/journal/${entry?.journal}`}
          >
            Back
          </Link>
          <h1 title={entry?.title} className="text-3xl mb-4">
            {entry?.title}
          </h1>

          <Image
            src={entry?.images[0]}
            alt={entry?.title}
            width={500}
            height={500}
            className="mb-4"
          />
          <div className="my-4">{entry?.content}</div>

          <div className="">
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
        </div>
      </div>
    </section>
  );
};

export default EntryPage;
