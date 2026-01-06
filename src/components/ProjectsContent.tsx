export function ProjectsContent() {
  const projects = [
    {
      id: 1,
      title: '(example)E-Commerce Platform',
      description: 'A full-featured online shopping platform with payment integration, inventory management, and user authentication.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      icon: '🛒',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      title: '(example)Task Management App',
      description: 'Collaborative task management tool with real-time updates, team workspaces, and progress tracking.',
      tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      icon: '✅',
      color: 'from-green-500 to-green-600',
    },
    {
      id: 3,
      title: '(examles)Weather Dashboard',
      description: 'Real-time weather application with forecasts, maps, and location-based alerts.',
      tech: ['React', 'OpenWeather API', 'Chart.js'],
      icon: '🌤️',
      color: 'from-sky-500 to-sky-600',
    },
    {
      id: 4,
      title: 'Portfolio ',
      description: 'Content management system for creative professionals to showcase their work.',
      tech: ['Next.js', 'Sanity', 'TypeScript'],
      icon: '🎨',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 5,
      title: '(example)Chat Application',
      description: 'Real-time messaging app with group chats, file sharing, and emoji reactions.',
      tech: ['React', 'Socket.io', 'Express'],
      icon: '💬',
      color: 'from-pink-500 to-pink-600',
    },
    {
      id: 6,
      title: '(example)Analytics Dashboard',
      description: 'Business intelligence dashboard with interactive charts and data visualization.',
      tech: ['React', 'D3.js', 'PostgreSQL'],
      icon: '📊',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-4">
        <h2 className="text-gray-800">My Projects</h2>
        <p className="text-gray-600">A showcase of my recent work and side projects (this area is a placeholder for now)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className={`h-2 bg-gradient-to-r ${project.color}`} />
            <div className="p-5">
              <div className="flex items-start gap-3 mb-3">
                <div className="text-4xl">{project.icon}</div>
                <div className="flex-1">
                  <h3 className="text-gray-800 mb-1">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 rounded text-xs border border-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
