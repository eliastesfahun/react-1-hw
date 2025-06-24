import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold hover:text-blue-200 transition-colors"
        >
          MyCompany
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-blue-200 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about_us"
              className="hover:text-blue-200 transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="hover:text-blue-200 transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-blue-200 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
