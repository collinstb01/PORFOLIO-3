const Experience = () => {
  const experiences = [
    {
      title: "Senior Full-Stack / Backend Engineer",
      company: "Mr Tob",
      type: "Full-time",
      period: "October, 2025 - Present",
      location: "Port Harcourt City, Nigeria",
      description:
        "Led the backend architecture for a scalable utility fintech platform, delivering secure APIs for web and mobile applications. Owned backend system design, database modeling, and core business logic for wallets, transactions, utilities, and rewards. Integrated payment providers and built a comprehensive admin system for operations, reporting, and monitoring.",
      icon: "⚡",
    },
    {
      title: "Lead Backend Engineer",
      company: "Mr Paul",
      type: "Remote",
      period: "February, 2024 - Present",
      location: "United States",
      description:
        "Designed and maintained scalable backend systems powering production web and mobile applications. Built and optimized APIs, managed databases, and improved server performance and reliability. Implemented secure data flows, validation, and error handling for high-traffic systems while collaborating with frontend and product teams.",
      icon: "⚙️",
    },
    {
      title: "Frontend and Web3 Developer",
      company: "Mr Jack",
      type: "Contract",
      period: "November, 2024 - September, 2025",
      location: "United States",
      description:
        "Led frontend development for a Web3 decentralized application enabling users to view NFTs across multiple blockchains. Implemented wallet integrations and blockchain interactions for seamless user experiences. Built responsive, user-friendly interfaces using modern frontend technologies.",
      icon: "🌐",
    },
    {
      title: "Full Stack Web And Mobile Developer",
      company: "Sarutech",
      type: "Full-time",
      period: "January, 2022 - January, 2023",
      location: "Benin City, Nigeria",
      description:
        "Built and maintained complex web and mobile applications across multiple client projects. Contributed to both backend and frontend development, delivering production-ready solutions. Mentored and trained 50+ students and supported junior developers to drive team growth and technical best practices.",
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
                  <span className="rounded-sm bg-white/10 px-2 py-1 text-xs text-gray-300">
                    {exp.location}
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
