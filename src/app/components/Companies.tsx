export default function Companies() {
  const companies = [
    { name: "Google", url: "https://www.google.com", logo: "https://logo.clearbit.com/google.com" },
    { name: "Amazon", url: "https://www.amazon.com", logo: "https://logo.clearbit.com/amazon.com" },
    { name: "Microsoft", url: "https://www.microsoft.com", logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "Flipkart", url: "https://www.flipkart.com", logo: "https://logo.clearbit.com/flipkart.com" },
    { name: "Infosys", url: "https://www.infosys.com", logo: "https://logo.clearbit.com/infosys.com" },
    { name: "TCS", url: "https://www.tcs.com", logo: "https://logo.clearbit.com/tcs.com" },
    { name: "Wipro", url: "https://www.wipro.com", logo: "https://logo.clearbit.com/wipro.com" },
    { name: "Accenture", url: "https://www.accenture.com", logo: "https://logo.clearbit.com/accenture.com" }
  ];

  return (
    <section className="py-24 bg-blue-50">

      {/* HEADING */}
      <h2 className="text-3xl font-bold text-center mb-14">
        Trusted by Leading Companies
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">

        {companies.map((company, index) => (
          <a
            key={index}
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center justify-center
                       grayscale hover:grayscale-0 hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >

            <img
              src={company.logo}
              alt={company.name}
              className="h-8 object-contain"
            />

          </a>
        ))}

      </div>

    </section>
  );
}