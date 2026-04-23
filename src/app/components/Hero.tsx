import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-16">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">

          {/* ANIMATED IMAGE WRAPPER */}
          <div className="relative w-full max-w-xl h-[500px] animate-float">

            <Image
              src="/hero-image.png"
              alt="Students learning"
              fill
              className="object-contain"
              priority
            />

          </div>

        </div>

        {/* RIGHT TEXT */}
        <div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Learn from Top Experts &
            <br />
            Get Placed in Top Companies
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Join industry-ready programs in Full Stack, Data Science,
            and Product Management with hands-on projects and career support.
          </p>

          {/* BUTTON */}
          <div className="mt-8">

            <Link href="/programs">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg">
                Get Started
              </button>
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}