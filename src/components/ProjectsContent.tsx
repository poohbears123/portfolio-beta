export function ProjectsContent() {
  const projects = [
    {
      id: 1,
      title: 'Django Project',
      description: 'A web application built with Django framework, featuring robust backend functionality and database management.',
      tech: ['Django', 'Python', 'PostgreSQL', 'HTML/CSS'],
      icon: '🐍',
      color: 'from-green-500 to-green-600',
      github: 'https://github.com/poohbears123/Django.git',
    },
    {
      id: 2,
      title: 'Finals Project',
      description: 'Comprehensive final project showcasing full-stack development skills and modern web technologies.',
      tech: ['JavaScript', 'Node.js', 'React', 'MongoDB'],
      icon: '🎓',
      color: 'from-blue-500 to-blue-600',
      github: 'https://github.com/poohbears123/finals.git',
    },
    {
      id: 3,
      title: 'BSIT-2B Repository',
      description: 'Academic repository for BSIT-2B course containing various programming assignments and projects.',
      tech: ['Java', 'C++', 'Python', 'Git'],
      icon: '📚',
      color: 'from-purple-500 to-purple-600',
      github: 'https://github.com/poohbears123/Pinuela_James-Mezack_BSIT-2B_Repo.git',
    },
    {
      id: 4,
      title: 'Game Project',
      description: 'Interactive game development project featuring engaging gameplay mechanics and user interfaces.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Canvas API'],
      icon: '🎮',
      color: 'from-red-500 to-red-600',
      github: 'https://github.com/poohbears123/game.git',
    },
    {
      id: 5,
      title: 'Laravel Project',
      description: 'Full-stack web application built with Laravel PHP framework, including authentication and CRUD operations.',
      tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
      icon: '🚀',
      color: 'from-orange-500 to-orange-600',
      github: 'https://github.com/poohbears123/Pinuela_laravelProject.git',
    },
    {
      id: 6,
      title: 'Example App',
      description: 'Demonstration application showcasing various programming concepts and best practices.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      icon: '💡',
      color: 'from-pink-500 to-pink-600',
      github: 'https://github.com/poohbears123/example-app.git',
    },
    {
      id: 7,
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with modern web technologies, featuring responsive design and interactive elements.',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'CSS Animations'],
      icon: '🌐',
      color: 'from-indigo-500 to-indigo-600',
      github: 'https://github.com/poohbears123/portfolio.git',
    },
    {
      id: 8,
      title: 'API Development',
      description: 'RESTful API built with Node.js and Express, including authentication, database integration, and comprehensive documentation.',
      tech: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
      icon: '🔗',
      color: 'from-teal-500 to-teal-600',
      github: 'https://github.com/poohbears123/api-project.git',
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
          <a
            key={project.id}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
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
          </a>
        ))}
      </div>
    </div>
  );
}
