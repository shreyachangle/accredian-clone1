import { Briefcase, Users, GraduationCap, Building } from "lucide-react";

export default function EnterprisePage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold">
            Enterprise Training Solutions
          </h1>

          <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
            Empower your workforce with industry-ready skills through
            customized corporate training programs designed for
            modern businesses.
          </p>

          <button className="mt-8 bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Request Demo
          </button>

        </div>

      </section>

      {/* SERVICES SECTION */}
      <section className="py-16">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Enterprise Solutions
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <ServiceCard
              Icon={Users}
              title="Corporate Training"
              desc="Customized programs designed to upskill employees."
            />

            <ServiceCard
              Icon={GraduationCap}
              title="Certification Programs"
              desc="Industry-recognized certifications for professionals."
            />

            <ServiceCard
              Icon={Briefcase}
              title="Skill Development"
              desc="Enhance workforce productivity with practical skills."
            />

            <ServiceCard
              Icon={Building}
              title="Custom Solutions"
              desc="Tailored learning paths based on company needs."
            />

          </div>

        </div>

      </section>

      {/* BENEFITS SECTION */}
      <section className="bg-white py-16">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Why Choose Our Enterprise Programs?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">

            <BenefitItem text="Industry expert-led training sessions" />
            <BenefitItem text="Customized curriculum for your business" />
            <BenefitItem text="Flexible learning schedules" />
            <BenefitItem text="Real-world project-based learning" />
            <BenefitItem text="Certification upon completion" />
            <BenefitItem text="Dedicated support team" />

          </div>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="bg-blue-50 py-16">

        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Contact Our Enterprise Team
          </h2>

          <form className="bg-white p-8 rounded-xl shadow-sm border space-y-6">

            <input
              type="text"
              placeholder="Company Name"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="text"
              placeholder="Contact Person"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <textarea
              placeholder="Tell us your training requirements"
              rows={4}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Submit Request
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}

/* SERVICE CARD */

function ServiceCard({ Icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border text-center hover:shadow-md transition">

      <div className="flex justify-center mb-4">
        <div className="bg-blue-100 p-4 rounded-full">
          <Icon size={32} className="text-blue-600" />
        </div>
      </div>

      <h3 className="font-semibold text-lg text-gray-900">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-600">
        {desc}
      </p>

    </div>
  );
}

/* BENEFIT ITEM */

function BenefitItem({ text }) {
  return (
    <div className="flex items-start gap-3">

      <span className="text-blue-600 font-bold">✔</span>

      <p className="text-gray-700">
        {text}
      </p>

    </div>
  );
}