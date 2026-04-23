export default function Testimonials() {

  const testimonials = [
    {
      name: "HR Manager",
      text: "Accredian programs helped our team upskill quickly and efficiently."
    },
    {
      name: "Tech Lead",
      text: "Great learning platform with real-world projects."
    },
    {
      name: "Team Manager",
      text: "Very structured courses and excellent mentorship."
    }
  ];

  return (
    <section className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center">

      <h2 className="text-3xl font-bold text-center mb-12">
        Testimonials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">

        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded shadow text-center"
          >

            <p className="text-gray-600 mb-4">
              "{item.text}"
            </p>

            <h4 className="font-semibold">
              {item.name}
            </h4>

          </div>
        ))}

      </div>

    </section>
  );
}