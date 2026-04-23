import {
  FaCode,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaBullhorn,
  FaRobot,
  FaCogs,
  FaChartLine
} from "react-icons/fa";

export default function Programs() {

  const programs = [
    {
      name: "Full Stack Development",
      icon: <FaCode size={28} className="text-blue-600" />
    },
    {
      name: "Data Science",
      icon: <FaDatabase size={28} className="text-blue-600" />
    },
    {
      name: "Cloud Computing",
      icon: <FaCloud size={28} className="text-blue-600" />
    },
    {
      name: "Cyber Security",
      icon: <FaShieldAlt size={28} className="text-blue-600" />
    },
    {
      name: "Digital Marketing",
      icon: <FaBullhorn size={28} className="text-blue-600" />
    },
    {
      name: "AI & ML",
      icon: <FaRobot size={28} className="text-blue-600" />
    },
    {
      name: "DevOps",
      icon: <FaCogs size={28} className="text-blue-600" />
    },
    {
      name: "Business Analytics",
      icon: <FaChartLine size={28} className="text-blue-600" />
    }
  ];

  return (
    <section className="py-24 bg-white">

      {/* HEADING */}
      <h2 className="text-3xl font-bold text-center mb-14">
        Our Programs
      </h2>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">

        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm 
                       hover:shadow-lg hover:-translate-y-2 transition text-center"
          >

            {/* ICON */}
            <div className="flex justify-center mb-4">
              {program.icon}
            </div>

            {/* TEXT */}
            <p className="font-medium text-gray-700">
              {program.name}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}