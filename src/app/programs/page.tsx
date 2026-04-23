import Link from "next/link";
import {
  Code,
  Database,
  Briefcase,
  Palette,
  Cloud,
  ShieldCheck
} from "lucide-react";

export default function ProgramsPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-12">

          <h1 className="text-4xl font-bold text-gray-900">
            Our Programs
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our industry-ready programs designed to help you
            gain real-world skills and get placed in top companies.
          </p>

        </div>

        {/* PROGRAM GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          <ProgramCard
            Icon={Code}
            title="Full Stack Development"
            desc="Learn React, Node.js, and databases to build complete web applications."
            duration="6 Months"
            level="Beginner to Advanced"
            price="₹49,999"
          />

          <ProgramCard
            Icon={Database}
            title="Data Science"
            desc="Master Python, Machine Learning, and Data Analysis techniques."
            duration="8 Months"
            level="Intermediate"
            price="₹59,999"
          />

          <ProgramCard
            Icon={Briefcase}
            title="Product Management"
            desc="Learn product strategy and agile workflows."
            duration="5 Months"
            level="Beginner"
            price="₹39,999"
          />

          <ProgramCard
            Icon={Palette}
            title="UI/UX Design"
            desc="Design modern interfaces using Figma and design thinking."
            duration="4 Months"
            level="Beginner"
            price="₹34,999"
          />

          <ProgramCard
            Icon={Cloud}
            title="Cloud Computing"
            desc="Learn AWS, deployment, and DevOps fundamentals."
            duration="7 Months"
            level="Intermediate"
            price="₹54,999"
          />

          <ProgramCard
            Icon={ShieldCheck}
            title="Cyber Security"
            desc="Understand ethical hacking and security fundamentals."
            duration="6 Months"
            level="Advanced"
            price="₹64,999"
          />

        </div>

      </div>

    </main>
  );
}

/* PROGRAM CARD */

function ProgramCard({
  Icon,
  title,
  desc,
  duration,
  level,
  price
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition text-center relative">

      {/* Placement Badge */}
      <span className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
        Placement Assistance
      </span>

      {/* ICON */}
      <div className="flex justify-center mb-4">
        <div className="bg-blue-100 p-4 rounded-full">
          <Icon size={40} className="text-blue-600" />
        </div>
      </div>

      {/* TITLE */}
      <h2 className="text-xl font-semibold text-gray-900">
        {title}
      </h2>

      {/* BADGES */}
      <div className="flex justify-center gap-2 mt-3">

        <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
          {duration}
        </span>

        <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
          {level}
        </span>

      </div>

      {/* DESCRIPTION */}
      <p className="mt-3 text-gray-600 text-sm">
        {desc}
      </p>

      {/* PRICE */}
      <p className="mt-4 text-2xl font-bold text-blue-600">
        {price}
      </p>

      {/* ENROLL BUTTON → LOGIN */}
      <Link href="/login">
        <button className="mt-5 w-full bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
          Enroll Now
        </button>
      </Link>

    </div>
  );
}