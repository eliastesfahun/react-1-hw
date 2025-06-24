import React from "react";

const OurPartners = () => {
  // TASK - React 1 week 1
  // Create the "Our Partners section" (assuming typo corrected from "Our Crew section")
  const partners = [
    {
      name: "Tech Innovations Inc.",
      logo: "https://placehold.co/100x50/333333/FFFFFF?text=Partner1",
    },
    {
      name: "Global Solutions Ltd.",
      logo: "https://placehold.co/100x50/555555/FFFFFF?text=Partner2",
    },
    {
      name: "Future Enterprises",
      logo: "https://placehold.co/100x50/777777/FFFFFF?text=Partner3",
    },
    {
      name: "Innovation Hub",
      logo: "https://placehold.co/100x50/999999/FFFFFF?text=Partner4",
    },
  ];

  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Our Partners
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-w-[120px] h-auto object-contain mx-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/100x50/ECEFF1/000000?text=No+Logo";
              }}
            />
            <p className="text-center text-sm mt-2 text-gray-600">
              {partner.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPartners;

