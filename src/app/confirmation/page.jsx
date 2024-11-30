import Head from 'next/head';
import Link from 'next/link';

export default function Confirmation() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Head>
        <title>Booking Confirmed!</title>
      </Head>
      <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Booking Confirmed!</h1>
        <p className="mb-4">Congratulations! Your therapy session has been successfully scheduled.</p>
        <p className="mb-4">A confirmation email with the session details has been sent to you. Please check your email.</p>
        <p className="mb-4">We recommend jotting down any key points or questions you'd like to discuss during your first session.</p>
        <Link href="/doctor">
        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded">Back to home</button>
        </Link>
      </div>
    </div>
  );
}
