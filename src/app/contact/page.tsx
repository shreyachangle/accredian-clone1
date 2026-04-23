import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-12">

          <h1 className="text-4xl font-bold text-gray-900">
            Contact Us
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            We'd love to hear from you. Get in touch with us.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE — CONTACT INFO */}
          <div className="space-y-6">

            <ContactItem
              Icon={Mail}
              title="Email"
              value="support@accredian.com"
            />

            <ContactItem
              Icon={Phone}
              title="Phone"
              value="+91 98765 43210"
            />

            <ContactItem
              Icon={MapPin}
              title="Address"
              value="Bangalore, Karnataka, India"
            />

          </div>

          {/* RIGHT SIDE — FORM */}
          <div className="bg-white p-8 rounded-xl shadow-sm border">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </main>
  );
}

/* CONTACT ITEM */

function ContactItem({ Icon, title, value }) {
  return (
    <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border">

      <div className="bg-blue-100 p-3 rounded-full">
        <Icon size={22} className="text-blue-600" />
      </div>

      <div>
        <p className="font-semibold text-gray-900">
          {title}
        </p>

        <p className="text-gray-600 text-sm">
          {value}
        </p>
      </div>

    </div>
  );
}