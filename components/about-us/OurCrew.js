import React from "react";

const OurCrew = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  const crewMembers = [
    {
      name: "Alice Johnson",
      title: "CEO & Founder",
      image: "https://placehold.co/150x150/CCE5FF/000000?text=Alice",
      bio: "Leading the vision and strategy of our company with passion and dedication.",
    },
    {
      name: "Bob Williams",
      title: "Chief Technology Officer",
      image: "https://placehold.co/150x150/CCE5FF/000000?text=Bob",
      bio: "Driving innovation and technological advancements to keep us at the forefront.",
    },
    {
      name: "Charlie Brown",
      title: "Head of Marketing",
      image: "https://placehold.co/150x150/CCE5FF/000000?text=Charlie",
      bio: "Crafting compelling narratives and engaging with our community.",
    },
  ];

  return (
    <section className="bg-gray-100 p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Our Crew
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {crewMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/150x150/ECEFF1/000000?text=No+Image";
              }}
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-1">
              {member.name}
            </h3>
            <p className="text-blue-600 mb-2">{member.title}</p>
            <p className="text-gray-600 text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCrew;
