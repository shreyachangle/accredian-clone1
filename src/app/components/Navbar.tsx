import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">

      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* TEXT LOGO */}
        <Link href="/" className="flex items-center">

          <h1 className="text-2xl font-bold text-blue-700 tracking-tight">
            Accredian
          </h1>

        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-[16px] font-medium text-gray-700">

          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link href="/programs" className="hover:text-blue-600 transition">
            Programs
          </Link>

          <Link href="/enterprise" className="hover:text-blue-600 transition">
            Enterprise
          </Link>

          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>

        </div>

        {/* LOGIN BUTTON */}
        <Link href="/login">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition shadow-sm">
            Login
          </button>
        </Link>

      </div>

    </nav>
  );
}