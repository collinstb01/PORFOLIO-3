const Projects = () => {
  const projects = [
    {
      title: "REFACTOR AI",
      description:
        "AI-powered code analysis and architecture audit platform. Analyzes GitHub repositories using large language models to generate automated architectural audits, actionable refactor suggestions, and project health metrics.",
      icon: "🤖",
      href: "https://refactorai.devtb.xyz/",
    },
    {
      title: "Billp",
      description:
        "Utility Platform with Secure Transactions & Reward System. Designed and implemented the backend architecture using Laravel for wallets, transactions, utilities, rewards, and promotions with a robust admin system and secure third-party integrations.",
      icon: "⚡",
    },
    {
      title: "OVATION",
      description:
        "Web3 Social & NFT Platform. Designed and built responsive web interfaces with seamless Web3 integrations. Implemented wallet connectivity, NFT display, and blockchain interactions to ensure reliable user flows.",
      icon: "🌐",
      href: "https://www.ovation.network/",
    },
    {
      title: "Fxnction Event App",
      description:
        "End-to-end real-time event system owning both backend and frontend architecture. Built backend services for event creation and RSVP management, alongside a responsive frontend for sending live notifications.",
      icon: "🎉",
    },
    {
      title: "ELLASET",
      description:
        "Mobile crypto wallet application with core functionality similar to MetaMask. Developed wallet generation, secure seed phrase management, crypto transfers, transaction broadcasting, and in-app swaps.",
      icon: "💳",
      href: "https://github.com/collinstb01/Crypto-Wallet",
    },
    /*
    {
      title: "HIDDENFACTBOOKS",
      description:
        "Educational App developed for Otumudia Publishers Ltd., serving as the digital platform for Hidden Facts books. Provides offline access to school curricula, past exam questions (WAEC, NECO, NABTEB, UTME), and self-learning resources.",
      icon: "📚",
      links: [
        {
          label: "Website",
          href: "https://hiddenfactsbooks.com/",
        },
        {
          label: "Android",
          href: "https://play.google.com/store/apps/details?id=com.jayden2322.hiddenfact",
        },
        {
          label: "iOS",
          href: "https://apps.apple.com/ng/app/hiddenfact/id6751276230",
        },
      ],
    },
    */
  ];

  return (
    <div className="mt-20">
      <h3 className="text-lg">Projects</h3>
      <div className="grid grid-cols-1 gap-4 mt-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-white/5 p-1 rounded-xl hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center">
              <div className="size-14 rounded-lg border border-white/5 flex items-center justify-center">
                <span className="text-2xl">{project.icon}</span>
              </div>
              <div className="p-1 text-sm mx-1 flex-1">
                <h4 className="mt-2">{project.title}</h4>
                <p className="mt-1 font-light">{project.description}</p>

                {/* Multiple links */}
                {/* @ts-ignore */}
                {project.links ? (
                  <div className="flex gap-2 mt-2">
                    {/* @ts-ignore */}
                    {project.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        target="_blank"
                        className="bg-white/10 hover:bg-white/20 px-2 py-1 rounded text-xs transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : project.href ? (
                  /* Single link for other projects */
                  <a
                    href={project.href}
                    target="_blank"
                    className="inline-block mt-2 text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    View Project →
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
