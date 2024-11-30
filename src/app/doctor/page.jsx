import Link from "next/link";

export default function TherapistProfile() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Left Section */}
      <div className="w-full md:w-1/3 bg-blue-500 text-white p-6 flex flex-col items-center ">
        <button className="self-start text-white text-lg mb-4">&larr; Back</button>
        {/* Card for Doctor Profile */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm text-center text-black ">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white mx-auto mb-4">
            <img
              src="/profile.png"
              alt="Therapist"
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="text-xl font-bold">Swetha Varma</h2>
          <p className="text-sm text-gray-500">Consultant Clinical Psychologist</p>
          <p className="mt-2 text-black-200">10+ Years of experience</p>
          <p className="text-xl mt-4">
            Starts at <span className="font-bold">₹1200/session</span>
          </p>
          <p className="text-sm text-black-300 mt-2">  Block A2, Delhi</p>
          
        </div>
        <div className="mt-6 w-full">
          <Link href="/sessions">
            <button className="bg-white text-blue-500 font-bold py-3 px-5 rounded-full w-full">
              Book session
            </button>
            </Link>
          </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-2/3 p-8">
        <h2 className="text-2xl font-bold text-gray-700">About me</h2>
        <p className="text-gray-600 mt-4">
          Hello, I'm Swetha, a licensed therapist dedicated to guiding
          individuals through life's challenges with empathy and expertise.
          With over 10 years of experience, I specialize in helping clients
          manage anxiety, depression, and relationship issues through
          personalized, evidence-based practices.
          <span className="text-blue-500 cursor-pointer"> Read more</span>
        </p>

        <h3 className="text-xl font-bold text-gray-700 mt-8">Credentials</h3>
        <ul className="mt-4 space-y-2 text-gray-600">
          <li>🎓 Ph.D. in Clinical Psychology - Harvard University</li>
          <li>🎓 M.A. in Counseling - University of California, Berkeley</li>
          <li>📄 Licensed Professional Counselor (LPC) - State of DEF</li>
          <li>📑 Certified Cognitive Behavioral Therapist (CBT)</li>
          <li>👥 Member, American Psychological Association (APA)</li>
          <li>🔑 10+ years of experience in individual and group therapy</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-700 mt-8">
          Available on
        </h3>
        <div className="mt-4 flex space-x-4">
          <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-lg">
            <span className="text-gray-600">In-person</span>
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-lg">
            <span className="text-gray-600">Video/Voice call</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-700 mt-8">
          I offer therapy for
        </h3>
        <ul className="mt-4 space-y-2 text-gray-600">
          <li>- Anxiety</li>
          <li>- Depression</li>
          <li>- Relationship challenges</li>
          <li>- Self-esteem issues</li>
        </ul>
      </div>
    </div>
  );
}
