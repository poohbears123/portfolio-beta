export function AboutContent() {
  return (
    <div className="p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-start gap-6 mb-6">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-6xl shadow-lg">
            👨‍💻
          </div>
          <div className="flex-1">
            <h2 className="text-gray-800 mb-2">John Doe</h2>
            <p className="text-blue-600 mb-3">Full Stack Developer</p>
            <p className="text-gray-600 leading-relaxed">
              Passionate developer with 5+ years of experience building modern web applications.
              I love creating intuitive user interfaces and solving complex problems.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
          <h3 className="text-gray-800 mb-3">About Me</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            I'm a creative developer who enjoys bringing ideas to life through code.
            With expertise in modern web technologies, I specialize in creating
            responsive and performant applications that users love.
          </p>
          <p className="text-gray-600 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with the developer community.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center border border-blue-200">
            <div className="text-3xl mb-2">🎓</div>
            <p className="text-gray-700 text-sm">CS Degree</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center border border-green-200">
            <div className="text-3xl mb-2">💼</div>
            <p className="text-gray-700 text-sm">5+ Years</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 text-center border border-purple-200">
            <div className="text-3xl mb-2">🚀</div>
            <p className="text-gray-700 text-sm">50+ Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}
