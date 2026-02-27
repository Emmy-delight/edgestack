import Image from "next/image"
import { FaArrowRight } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";
import { IoFilter } from "react-icons/io5";
import { FaChartColumn } from "react-icons/fa6";
import { MdOutlineWifiProtectedSetup } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GoOrganization } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";


export default function HomePage() {
  return (
    <main className="bg-gray-200">
      <div className="relative bg-[#001f3f]">
        <div className="h-100 md:h-150 lg:h-screen w-full bg-[url('/image1.png')] bg-cover bg-center bg-no-repeat opacity">
        <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 pt-20 md:pt-60 text-sky-200 text-center">
            <h2 className="font-bold text-2xl md:text-5xl lg:text-6xl text-white">Secure Online Examinations</h2>
            <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl mt-2 md:mt-3">for Modern Institutions</h2>
            <p className="mt-7 text-lg text-white px-5 lg:px-70">Enterprise-grade assessment platform for universities, schools, training centers, and organizations. Conduct secure, scalable online exams with confidence.</p>
            <div className="mt-5 flex gap-4 px-5 justify-center">
              <button className="flex justify-center items-center gap-3 bg-blue-500 h-12 w-40 md:h-13 md:w-45 md:text-lg text-white rounded-xl cursor-pointer">Get Started<span><FaArrowRight /></span></button>
              <button className="gap-1 border border-blue-500 h-12 w-40 md:h-13 md:w-45 md:text-lg text-white rounded-xl cursor-pointer">Explore Mock Exams</button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 md:py-20 justify-items-center px-5 lg:px-10 text-center">
        <h3 className="bg-blue-200 text-lg font-semibold text-sky-700 px-4 py-2 rounded-3xl">Why choose Edgestack</h3>
        <h2 className="text-2xl md:text-5xl font-bold mt-5">Built for Taste, Designed for Scale</h2>
        <p className="text-[17px] md:text-lg text-gray-600 mt-3 md:mt-5 md:max-w-2xl">Everything you need to deliver secure, reliable online assessments that institutions and organizations can depend on.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-5 lg:px-10 py-5">
        <div className="h-65 md:w-90 p-5 border border-gray-200 rounded-3xl shadow-lg bg-white">
          <p className="text-5xl text-blue-400 mt-3"><MdSecurity /></p>
          <p className="font-bold text-lg mt-4">Enterprise Security</p>
          <p className="mt-3 text-gray-600">Bank-grade encryption, anti-cheating measures, and secure browser lockdown ensure exam integrity.</p>
        </div>
        <div className="h-65 md:w-90 p-5 border border-gray-200 rounded-3xl shadow-lg bg-white">
          <p className="text-5xl text-blue-400 mt-3"><AiOutlineRise /></p>
          <p className="font-bold text-lg mt-4">Unlimited Scalability</p>
          <p className="mt-3 text-gray-600">From 10 to 100,000 concurrent users. Our cloud infrastructure scales with your needs.</p>
        </div>
        <div className="h-65 md:w-90 p-5 border border-gray-200 rounded-3xl shadow-lg bg-white">
          <p className="text-5xl text-blue-400 mt-3"><IoFilter /></p>
          <p className="font-bold text-lg mt-4">Complete Flexibility</p>
          <p className="mt-3 text-gray-600">Custom question types, adaptive testing, randomization, and configurable exam rules.</p>
        </div>
        <div className="h-65 md:w-90 p-5 border border-gray-200 rounded-3xl shadow-lg bg-white">
          <p className="text-5xl text-blue-400 mt-3"><FaChartColumn /></p>
          <p className="font-bold text-lg mt-4">Advanced Analytics</p>
          <p className="mt-3 text-gray-600">Real-time insights, performance reports, item analysis, and comprehensive dashboards.</p>
        </div>
        <div className="h-65 md:w-90 p-5 border border-gray-200 rounded-3xl shadow-lg bg-white">
          <p className="text-5xl text-blue-400 mt-3"><MdOutlineWifiProtectedSetup /></p>
          <p className="font-bold text-lg mt-4">Quick Setup</p>
          <p className="mt-3 text-gray-600">Get started in minutes. Import questions, create exams, and invite candidates effortlessly.</p>
        </div>
        <div className="h-65 md:w-90 p-5 border border-gray-200 rounded-3xl shadow-lg bg-white">
          <p className="text-5xl text-blue-400 mt-3"><MdOutlineSupportAgent /></p>
          <p className="font-bold text-lg mt-4">Expert Support</p>
          <p className="mt-3 text-gray-600">Dedicated account managers and 24/7 technical support to ensure smooth exam delivery.</p>
        </div>
      </div>

      <div className="px-5 lg:px-10 py-10 md:py-20 justify-items-center text-center">
        <h3 className="bg-blue-200 text-lg font-semibold text-sky-700 px-4 py-1 rounded-3xl">How It Works</h3>
        <h2 className="text-2xl md:text-5xl font-bold mt-5">Simple for Everyone</h2>
        <p className="text-[17px] md:text-lg text-gray-600 mt-2 md:mt-5">Streamlined workflows for institutions and candidates alike.</p>
      </div>

      <div className="flex-row lg:flex gap-15 px-10">
        <div className=" ">
          <div className="flex gap-2">
            <span className="text-3xl bg-sky-700 p-2 text-white rounded-lg"><GoOrganization /></span><h3 className="text-3xl font-bold">For Institutions</h3>
          </div>
          <div className="flex gap-3 items-center mt-5 lg:mt-10">
            <div>
              <span className="border-2 border-sky-700 bg-blue-200 px-4 py-3 rounded-xl text-lg">1</span>
            </div>
            <div className="">
              <h3 className="font-semibold text-xl">Create Exam</h3>
              <p className="text-gray-600 mt-1">Design your assessment with custom questions, rules, and settings.</p>
            </div>
          </div>
          <div className="flex gap-3 items-center mt-5 lg:mt-10">
            <div>
              <span className="border-2 border-sky-700 bg-blue-200 px-4 py-3 rounded-xl text-lg">2</span>
            </div>
            <div className="">
              <h3 className="font-semibold text-xl">Invite Candidates</h3>
              <p className="text-gray-600 mt-1">Send secure invitations via email or integrate with your LMS.</p>
            </div>
          </div>
          <div className="flex gap-3 items-center mt-5 lg:mt-10">
            <div>
              <span className="border-2 border-sky-700 bg-blue-200 px-4 py-3 rounded-xl text-lg">3</span>
            </div>
            <div className="">
              <h3 className="font-semibold text-xl">Monitor & Grade</h3>
              <p className="text-gray-600 mt-1">Track progress in real-time and automate grading with AI.</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex gap-2 items-center mt-10 lg:mt-0">
            <span className="text-3xl bg-sky-700 p-2 text-white rounded-lg"><FaRegUserCircle /></span><h3 className="text-3xl font-bold">For Candidates</h3>
          </div>
          <div className="flex gap-3 items-center mt-5 lg:mt-10">
            <div>
              <span className="border-2 border-sky-700 bg-blue-200 px-4 py-3 rounded-xl text-lg">1</span>
            </div>
            <div className="">
              <h3 className="font-semibold text-xl">Receive Invitation</h3>
              <p className="text-gray-600 mt-1">Get a secure link with exam details and instructions.</p>
            </div>
          </div>
          <div className="flex gap-3 items-center mt-5 lg:mt-10">
            <div>
              <span className="border-2 border-sky-700 bg-blue-200 px-4 py-3 rounded-xl text-lg">2</span>
            </div>
            <div className="">
              <h3 className="font-semibold text-xl">Take Exam</h3>
              <p className="text-gray-600 mt-1">Complete assessment in a secure, monitored environment.</p>
            </div>
          </div>
          <div className="flex gap-3 items-center mt-5 lg:mt-10">
            <div>
              <span className="border-2 border-sky-700 bg-blue-200 px-4 py-3 rounded-xl text-lg">3</span>
            </div>
            <div className="">
              <h3 className="font-semibold text-xl">Get Results</h3>
              <p className="text-gray-600 mt-1">Receive instant feedback and certificates upon completion.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-15 md:py-30 lg:py-30 px-5 lg:px-10 justify-items-center text-center">
        <h3 className="bg-blue-200 text-lg font-semibold text-sky-700 px-4 py-1 rounded-3xl">Mock Examinations</h3>
        <h2 className="text-2xl md:text-5xl font-bold mt-5">Practice with Real Exam Formats</h2>
        <p className="text-lg text-gray-500 mt-5 md:max-w-2xl">Explore our library of approved mock exams across various subjects and professional certifications.</p>
        <p className="text-lg mt-5">Practice with carefully curated mock exams designed to reflect real assessment standards. Edgstack's mock examinations help candidates evaluate their knowledge, improve time management, and build confidence by simulating real examination conditions. Performance feedback is provided to help identify strengths and areas for improvement before taking official assessments.</p>
        <button className="mt-7 bg-sky-700 h-15 w-75 text-[17px] text-white rounded-xl font-semibold">Request Acccess to Mock Exams</button>
      </div>

      <div className="md:py-5 lg:py-10 px-10 justify-items-center text-center">
        <h3 className="bg-blue-200 text-lg font-semibold text-sky-700 px-4 py-1 rounded-3xl">Testimonials</h3>
        <h2 className="text-2xl md:text-5xl font-bold mt-5">Trusted by Leaders in Education & Enterprise</h2>
        <p className="text-lg text-gray-500 mt-5 px-10 md:px-20 lg:px-70">See what academic administrators and HR professionals say about Edgstack.</p>
      </div>
      <div className="px-5 lg:px-10 mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
        <div className="p-4 lg:p-8 h-60 lg:h-55 lg:w-140 border rounded-b-lg shadow-lg bg-white">
          <p>"Edgstack transformed how we conduct examinations. The security features and scalability are unmatched. We've successfully administered over 50,000 exams without a single incident."</p>
          <div className="flex gap-2 items-center mt-4">
            <div className="bg-sky-700 h-12 w-12 text-lg flex justify-center items-center rounded-full">SM</div>
            <div className="">
              <p className="font-semibold">Dr. Sarah Mitchell</p>
              <p>Dean of Academic Affairs</p>
              <p className="text-sky-700 text-sm">Stanford Online Learning</p>
            </div>
          </div>
        </div>
        <div className="p-4 lg:p-8 h-60 lg:h-55 lg:w-140 border rounded-b-lg shadow-lg bg-white">
          <p>"As an HR director managing employee certifications, Edgstack has been a game-changer. The analytics dashboard provides insights we never had before, and the support team is exceptional."</p>
          <div className="flex gap-2 items-center mt-4">
            <div className="bg-sky-700 h-12 w-12 text-lg flex justify-center items-center rounded-full">MC</div>
            <div className="">
              <p className="font-semibold">Michael Chen</p>
              <p>VP of Human Resources</p>
              <p className="text-sky-700 text-sm">TechCorp Global</p>
            </div>
          </div>
        </div>
        <div className="p-3 lg:p-8 h-60 lg:h-55 lg:w-140 border rounded-b-lg shadow-lg bg-white">
          <p>"We needed a platform that could handle thousands of concurrent users during peak exam periods. Edgstack delivered flawlessly. The setup was quick, and the interface is intuitive for both staff and students."</p>
          <div className="flex gap-2 items-center mt-4">
            <div className="bg-sky-700 h-12 w-12 text-lg flex justify-center items-center rounded-full">AP</div>
            <div className="">
              <p className="font-semibold">Prof. Aisha Patel</p>
              <p>Director of Assessments</p>
              <p className="text-sky-700 text-sm">National University System</p>
            </div>
          </div>
        </div>
        <div className="p-4 lg:p-8 h-60 lg:h-55 lg:w-140 border rounded-b-lg shadow-lg bg-white">
          <p>"The flexibility to customize exams and the anti-cheating measures give us complete confidence in assessment integrity. Edgstack has become an essential part of our training infrastructure."</p>
          <div className="flex gap-2 items-center mt-4">
            <div className="bg-sky-700 h-12 w-12 text-lg flex justify-center items-center rounded-full">SM</div>
            <div className="">
              <p className="font-semibold">Robert Williams</p>
              <p>Head of Learning & Development</p>
              <p className="text-sky-700 text-sm">Global Finance Institute</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#062456] mt-10 lg:flex gap-2">
        <div className="pt-25 pb-10 px-5 lg:px-10 text-white">
          <p className="text-blue-200 font-semibold text-sm bg-[#113b80] flex items-center justify-center rounded-3xl h-9 w-35">About Edgestack</p>
          <h3 className="text-white font-bold text-3xl md:text-5xl mt-5">Empowering Institutions Through Secure Assessments</h3>
          <p className="mt-5 text-lg">Founded in 2018, Edgstack was built by educators and technologists who understood the critical need for secure, scalable online examination solutions. Today, we serve over 500 institutions worldwide, from leading universities to Fortune 500 companies.</p>
          <h3 className="font-bold mt-5">Our Mission</h3>
          <p className="mt-3">To democratize access to fair, secure, and reliable assessments that help institutions measure and validate knowledge effectively.</p>
          <h3 className="font-bold mt-5">Our Vision</h3>
          <p className="mt-3">To be the global standard for online examination platforms, trusted by institutions of all sizes across every industry.</p>
          <h3 className="font-bold mt-5">Our Values</h3>
          <p className="mt-3">Integrity, innovation, security, and accessibility drive everything we do. We're committed to continuous improvement and exceptional support.</p>
        </div>
        <div className="px-5 py-5">
          <Image
          src="/myimage2.png"
          alt="team"
          height={1000}
          width={1000}
          className="h-full w-screen rounded-xl object-cover"
          />
        </div>
      </div>

      <div className="px-5 lg:px-10 pt-15 md:pt-20 text-center items-center">
        <button className="h-9 w-35 bg-blue-200 text- font-semibold text-sky-700 rounded-3xl">Contact Us</button>
        <h2 className="text-2xl md:text-5xl font-bold mt-5">Ready to Transform Your Assessments?</h2>
        <p className="text-lg text-gray-500 mt-5 lg:mx-60">Get in touch with our team to schedule a demo or learn more about how Edgestack can serve your institution.</p>
      </div>
      <div className="flex-row lg:flex gap-5 mt-5 px-5 lg:px-10 py-10">
        <div>
          <div className="px-5 flex gap-2 py-5 h-30 w-full bg-white rounded-xl shadow-lg">
            <div className="">
              <span className="text-5xl text-sky-700"><MdOutlineEmail /></span>
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-500">contact@edgstack.com</p>
              <p className="text-gray-500">support@edgstack.com</p>
            </div>
          </div>
          <div className="px-5 mt-5 flex gap-2 py-5 h-30 w-full bg-white rounded-xl shadow-lg">
            <div className="">
              <span className="text-5xl text-sky-700"><IoCallOutline /></span>
            </div>
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-500">+234 813 603 0632</p>
              <p className="text-gray-500">Mon-Fri, 9am-6pm EST</p>
            </div>
          </div>
          <div className="px-5 mt-5 flex gap-2 py-5 h-30 w-full bg-white rounded-xl shadow-lg">
            <div className="">
              <span className="text-5xl text-sky-700"><IoLocationOutline /></span>
            </div>
            <div>
              <p className="font-semibold">Office</p>
              <p className="text-gray-500">044 Alvin Zuma str, Wuse 2 Abuja, Nigeria.</p>
            </div>
          </div>
          
        </div>
        <div className="bg-white px-5 py-10 rounded-xl grow mt-10 lg:mt-0">
          <div className="lg:flex gap-4">
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Full Name *</label>
              <input className="mt-2 pl-3 h-13 w-full lg:w-95 border border-gray-300 rounded-xl" type="text" placeholder="Enter your name"/>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Email Address *</label>
              <input className="mt-2 pl-3 h-13 w-full lg:w-95 border border-gray-300 rounded-xl" type="email" placeholder="john@university.edu"/>
            </div>
          </div>
          <div className="lg:flex gap-4 mt-5">
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Institution/Organization *</label>
              <input className="mt-2 pl-3 h-13 w-full lg:w-95 border border-gray-300 rounded-xl" type="text" placeholder="institution name"/>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Phone Number</label>
              <input className="mt-2 pl-3 h-13 w-full lg:w-95 border border-gray-300 rounded-xl" type="tel" placeholder="+234 000 000 0000"/>
            </div>
          </div>
          <div>
            <div className="flex flex-col mt-5">
              <label className="font-semibold text-gray-700">Message *</label>
              <textarea className="border border-gray-300 rounded-xl pl-3 mt-2" placeholder="Let us know what you want..."/>
            </div>
            <button className="bg-[#113b80] h-13 w-38 text-white rounded-lg mt-5">Send Message</button>
          </div>
        </div>
      </div>
      
      
    </main>
  )
}