
import Head from 'next/head';
import Link from 'next/link';

export default function SessionPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Head>
        <title>Therapy Sessions</title>
      </Head>
      <div className="w-full max-w-4xl p-4">
        <div className="flex justify-between items-center mb-4">
          <button className="text-blue-500">&larr; Available sessions</button>
          <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded">
            Click on the duration to see the pricing details
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Group Therapy', 'Individual Therapy', 'Couple Therapy'].map((therapyType) => (
            <div key={therapyType} className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold mb-2">₹3,200 / session</div>
              <div className="flex justify-center mb-4">
                {['45 min', '60 min', '90 min'].map((duration) => (
                  <button
                    key={duration}
                    className="bg-blue-700 text-white px-2 py-1 mx-1 rounded-full"
                  >
                    {duration}
                  </button>
                ))}
              </div>
              <div className="text-xl font-semibold mb-4">{therapyType}</div>
              <ul className="list-disc list-inside space-y-2">
                <li>Joint Evaluation</li>
                <li>Communication Exercises</li>
                <li>Conflict Resolution</li>
                <li>Goal Setting</li>
                <li>Follow up plan</li>
              </ul>
             <Link href='/booking'>
             <button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded-full">
                Proceed
              </button>
             </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
