'use client';

import { useEffect, useState } from 'react';

export default function TechShowcase() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const allTech = [
    { name: 'React.js', icon: 'devicon-react-original colored' },
    { name: 'Next.js', icon: 'devicon-nextjs-plain colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'Express.js', icon: 'devicon-express-original colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'Python', icon: 'devicon-python-plain colored' },
    { name: 'Java', icon: 'devicon-java-plain colored' },
    { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
    { name: 'C', icon: 'devicon-c-plain colored' },
    { name: 'HTML/CSS', icon: 'devicon-html5-plain colored' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
    { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original colored' },
    { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
    { name: 'Postman', icon: 'devicon-postman-plain colored' },
    { name: 'Shadcn/ui', icon: 'devicon-react-original colored' },
    { name: 'Cloudinary', icon: 'devicon-nodejs-plain colored' },
    { name: 'Neon', icon: 'devicon-postgresql-plain colored' },
    { name: 'WebSocket', icon: 'devicon-nodejs-plain colored' },
    { name: 'OAuth 2.0', icon: 'devicon-github-original colored' },
    { name: 'JWT', icon: 'devicon-github-original colored' },
    { name: 'RESTful APIs', icon: 'devicon-nodejs-plain colored' },
    { name: 'System Design', icon: 'devicon-java-plain colored' },
    { name: 'OOP', icon: 'devicon-cplusplus-plain colored' },
    { name: 'DBMS', icon: 'devicon-postgresql-plain colored' },
    { name: 'Razorpay', icon: 'devicon-nodejs-plain colored' },
    { name: 'Resend', icon: 'devicon-nodejs-plain colored' },
  ];

  if (!mounted) return null;

  return (
    <section className="relative w-full py-16 sm:py-20 overflow-hidden">
      {/* Link to devicons */}
      {typeof document !== 'undefined' && !document.querySelector('link[href*="devicon"]') && (
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
            <span className="text-[var(--text-primary)]">All Technologies</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary-c)]">31+ tools</p>
        </div>

        {/* Tech Slider - No Background */}
        <div className="relative h-24 sm:h-28 flex items-center overflow-hidden">
          {/* Fade left */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[var(--bg)] to-transparent z-20 pointer-events-none" />
          
          {/* Fade right */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[var(--bg)] to-transparent z-20 pointer-events-none" />

          {/* Slider Container */}
          <div className="flex gap-6 sm:gap-8 lg:gap-10 animate-scroll-slow">
            {allTech.map((tech, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex flex-col items-center justify-center gap-2 cursor-default select-none transition-transform duration-300 hover:scale-110 group/tech"
              >
                <i
                  className={`${tech.icon} text-3xl sm:text-4xl lg:text-5xl transition-all duration-300 filter grayscale group-hover/tech:grayscale-0`}
                />
                <span className="text-xs sm:text-sm text-[var(--text-secondary-c)] font-medium text-center whitespace-nowrap group-hover/tech:text-[var(--text-primary)] transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {allTech.map((tech, idx) => (
              <div
                key={`dup-${idx}`}
                className="flex-shrink-0 flex flex-col items-center justify-center gap-2 cursor-default select-none transition-transform duration-300 hover:scale-110 group/tech"
              >
                <i
                  className={`${tech.icon} text-3xl sm:text-4xl lg:text-5xl transition-all duration-300 filter grayscale group-hover/tech:grayscale-0`}
                />
                <span className="text-xs sm:text-sm text-[var(--text-secondary-c)] font-medium text-center whitespace-nowrap group-hover/tech:text-[var(--text-primary)] transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hint */}
        <div className="text-center mt-6">
          <p className="text-xs sm:text-sm text-[var(--text-muted)]">
            ✨ Hover any icon to reveal its color
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scroll-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-slow {
          animation: scroll-slow 50s linear infinite;
        }
      `}</style>
    </section>
  );
}
