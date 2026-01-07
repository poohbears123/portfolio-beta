export function AboutContent() {
  return (
    <div className="p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-start gap-6 mb-6">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-6xl shadow-lg">
            👨‍💻
          </div>
          <div className="flex-1">
            <h2 className="text-gray-800 dark:text-gray-100 mb-2">James Mezack Pinuela</h2>
            <p className="text-blue-600 dark:text-blue-400 mb-3">Full Stack Developer | UX design | embedded systems dev</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Full Stack Developer & Systems Engineer with 4+ years of experience. 
              I bridge the gap between low-level hardware logic and intuitive web architecture to build high-performance, 
              UX-driven digital products.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
          <h3 className="text-gray-800 mb-3">About Me</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
          I am a creative developer who builds high-performance applications with an "inside-out" perspective. 
          My background in Embedded Systems Development (ESD) gives me a unique edge in software engineering; 
          I approach every project with a deep focus on optimization, memory efficiency, and robust system architecture.
          </p>
          <p className="text-gray-600 leading-relaxed">
            I specialize in translating complex technical requirements into intuitive, 
            user-centric interfaces. Whether I am architecting a scalable web app or modding hardware, 
            I am driven by a passion for deconstructing systems and rebuilding them to be faster and more capable.
          </p>
          <p className="text-gray-600 leading-relaxed">
            When I’m not at my terminal, I’m usually contributing to open-source projects or tinkering with electronics. 
            I thrive on solving the "impossible" problems at the intersection of physical hardware and digital experiences.
          </p>
        </div>

        <h3 className="text-gray-800 dark:text-gray-100 mb-4">Expertise Areas</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-4 text-center border border-blue-200 dark:border-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl mb-2">💻</div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Web: React, Next.js, Node.js, TypeScript.</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-4 text-center border border-green-200 dark:border-green-700 hover:scale-105 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl mb-2">⚙️</div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Systems: Embedded C/C++, Firmware, Hardware Modding.</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-4 text-center border border-purple-200 dark:border-purple-700 hover:scale-105 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl mb-2">🎨</div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Design: UI/UX Design, Figma, Responsive Systems.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
