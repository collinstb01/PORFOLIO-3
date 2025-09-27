const Experience = () => {
  const experiences = [
    {
      title: "Backend Engineer",
      company: "Mr Paul",
      type: "Part-time",
      period: "February, 2024",
      description:
        "Developed and maintained scalable backend systems, designing APIs, managing databases, and optimizing server performance to ensure secure and efficient application functionality.",
      icon: "⚙️",
    },
    {
      title: "Frontend and Web3 Developer",
      company: "Mr Jack",
      type: "Part-time",
      period: "November, 2024 - September, 2025",
      description:
        "Developed and maintained the frontend for a decentralized application (dApp) enabling users to view their NFTs across all blockchains. Focused on Web3 wallet integration, ensuring seamless interaction with blockchain networks and smart contracts.",
      icon: "🌐",
    },
    {
      title: "Blockchain Developer Intern",
      company: "Somidax",
      type: "Internship",
      period: "September, 2022 - March, 2023",
      description:
        "Designed and developed Somidax, a feature-rich decentralized application (dApp) with advanced functionalities for seamless user interaction. Implemented core functionalities, enabling users to deposit, transfer, and withdraw SMDX tokens securely.",
      icon: "⛓️",
    },
    {
      title: "Full Stack Web And Mobile Developer",
      company: "Sarutech",
      type: "Full-time",
      period: "January, 2022 - January, 2023",
      description:
        "Worked with a great team building complex and usable mobile and web applications. Mentored and taught over 50 students on various tech stacks, sharing knowledge and guiding them through hands-on projects to build practical skills.",
      icon: "💻",
    },
  ];

  return (
    <section className="mt-20">
      <h2 className="text-lg mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border border-white/5 p-4 rounded-xl hover:bg-white/5 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-white/5 flex items-center justify-center text-xl">
                {exp.icon}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-semibold text-white">{exp.title}</h3>
                  <span className="rounded-sm bg-white/10 px-2 py-1 text-xs text-gray-300">
                    {exp.type}
                  </span>
                  <span className="rounded-sm bg-white/10 px-2 py-1 text-xs text-gray-300">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-2">{exp.company}</p>
                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
