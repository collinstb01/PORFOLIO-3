const About = () => {
  return (
    <div>
      <h1 className="text-3xl lg:mt-20 flex items-center space-x-4">
        Hello, I am
        <span className="flex items-center space-x-4 ml-2">
          Collins.
          <img
            src="/TB.jpeg"
            alt="Collins"
            className="w-10 rotate-6 ml-2 rounded-md hover:-rotate-6 transition-all duration-500 ease-in-out"
          />
        </span>
      </h1>

      <div className="mt-10 space-y-6 text-xl font-light">
        <p>
          Welcome to my corner of the internet! I love solving problems, and
          enjoy learning new things while building
        </p>

        <p>
          Right now, I’m upskilling in AI Engineering -{" "}
          <a
            href="https://github.com/collinstb01"
            target="_blank"
            className="text-[#6558DC] hover:underline font-semibold"
          >
            LLM and NLP (Large Language Models and Natural Language Processing)
          </a>
          .
        </p>

        <p>
          You'll mostly find me working within the{" "}
          <span className="inline-flex items-center align-middle">
            🔷 TypeScript
          </span>
          /
          <span className="inline-flex items-center align-middle">
            🟨 JavaScript
          </span>{" "}
          ecosystem — shipping with React Native, React, and Node.js (NestJS &
          Express.js) — and I also work with Rust, Python, c#, and Solidity.
        </p>

        <p>
          I build with Flutter, SQL, and NoSQL, and I love learning new things
          while building.
        </p>

        <p className="italic text-gray-600">
          <q>
            My goal? To be so skilled and resourceful that I’m hard to ignore.
          </q>
        </p>
      </div>

      <div className="flex items-center space-x-4 mt-10 flex-wrap gap-y-2">
        <a
          href="https://github.com/collinstb01"
          target="_blank"
          className="bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-up-right"
            aria-hidden="true"
          >
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
          GitHub
        </a>

        <a
          href="mailto:collinstb01@gmail.com"
          target="_blank"
          className="bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-up-right"
            aria-hidden="true"
          >
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
          Mail
        </a>

        <a
          href="https://linkedin.com/in/collins-eguasa-181200239"
          target="_blank"
          className="bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-up-right"
            aria-hidden="true"
          >
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
          LinkedIn
        </a>

        <a
          href="https://flowcv.com/resume/f311e5i8t1"
          target="_blank"
          className="bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-up-right"
            aria-hidden="true"
          >
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
          Resume
        </a>

        <a
          href="https://twitter.com/techsavvy021"
          target="_blank"
          className="bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-up-right"
            aria-hidden="true"
          >
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
          Twitter
        </a>
      </div>
    </div>
  );
};

export default About;
