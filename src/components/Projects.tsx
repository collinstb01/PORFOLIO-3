const Projects = () => {
  const projects = [
    {
      title: "OVATION",
      description:
        "All Your NFTs One Powerful Profile. Unify your NFT portfolio from multiple blockchains into one sleek link to share with your Web3 friends.",
      icon: "🌐",
      href: "https://www.ovation.network/",
    },
    {
      title: "ELLASET Crypto Wallet",
      description:
        "React Native crypto wallet with core functionality similar to MetaMask. Features wallet generation, secure seed phrase management, and crypto transfers.",
      icon: "💳",
      href: "https://github.com/collinstb01/Crypto-Wallet",
    },
    {
      title: "SOMIDAX NFT Marketplace",
      description:
        "Built a decentralized marketplace with support for ERC721, ERC2981, and ERC1155 standards. Enabled token deposits, transfers, withdrawals, swaps, and NFT trading.",
      icon: "🎨",
      href: "https://somidax.netlify.app/",
    },
  ];

  return (
    <div className="mt-20">
      <h3 className="text-lg">Projects</h3>
      <div className="grid grid-cols-1 gap-4 mt-3">
        {projects.map((project, index) => (
          <a
            key={index}
            className="border border-white/5 p-1 rounded-xl hover:bg-white/5 transition-colors flex items-center"
            href={project.href}
            target="_blank"
          >
            <div className="size-14 rounded-lg border border-white/5 flex items-center justify-center">
              <span className="text-2xl">{project.icon}</span>
            </div>
            <div className="p-1 text-sm mx-1">
              <h4 className="mt-2">{project.title}</h4>
              <p className="mt-1 font-light">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
