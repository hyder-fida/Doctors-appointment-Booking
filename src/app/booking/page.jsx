import Head from "next/head";
import Link from "next/link";

export default function Booking() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Head>
        <title>Booking Form</title>
      </Head>
      <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow-md">
        <div className="bg-blue-500 w-full text-white rounded">
          <h1 className="text-2xl font-bold mb-4">
            Booking for Saturday, 05th August
          </h1>
          <h2 className="text-xl mb-6">12:30 PM - 4:30 PM, ₹2,400</h2>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              E-mail
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded"
              placeholder="E-mail"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Referred by employer? Enter the company name:
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              placeholder="Company Name"
            />
          </div>
          <Link href="/confirmation">
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded">
              Book Now
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
