export default function Benefits() {
  const benefits = [
    "Industry Expert Trainers",
    "Hands-on Projects",
    "Globally Recognized Certification",
    "Placement Assistance",
    "Flexible Learning",
    "Real-world Case Studies",
    "Dedicated Mentorship",
    "Career Support"
  ];

  return (
    <section className="py-24 bg-blue-50">

      {/* HEADING */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
        Key Benefits
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">

        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center
                       hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >
            <p className="text-gray-700 font-medium">
              {benefit}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}