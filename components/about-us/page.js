import OurValues from "@/components/about-us/OurValues";
import OurCrew from "@/components/about-us/OurCrew";
import OurPartners from "@/components/about-us/OurPartners";
import Link from "next/link"; // Import Link for navigation

export default function AboutUsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
        About Us
      </h1>

      {/* Introduction Section */}
      <section className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Welcome to MyCompany, Inc.! We started with a simple idea: to create
          innovative solutions that truly make a difference in people's lives.
          From humble beginnings, we've grown into a passionate team dedicated
          to excellence and driven by a shared vision. Our journey has been
          defined by continuous learning, adaptability, and a relentless pursuit
          of quality.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          We believe in fostering a culture of creativity and collaboration,
          where every voice is heard and every idea has the potential to
          flourish. Our commitment extends beyond our products and services; we
          strive to build lasting relationships with our customers and
          contribute positively to the community.
        </p>
      </section>

      <OurValues />
      <OurCrew />
      {/* TASK - React 1 week 1 */}
      {/* Add in the "OurPartners" component here */}
      <OurPartners />

      {/* Call to Action or Contact Section (Optional) */}
      <section className="bg-blue-600 text-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Journey!</h2>
        <p className="text-lg mb-6">
          Whether you're a potential client, a future team member, or just
          curious, we'd love to connect.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-md"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
