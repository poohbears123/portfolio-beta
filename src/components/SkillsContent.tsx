export function SkillsContent() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: '🎨',
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Vue.js', level: 75 },
      ],
    },
    {
      category: 'Backend',
      icon: '⚙️',
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MongoDB', level: 70 },
      ],
    },
    {
      category: 'Tools & Others',
      icon: '🛠️',
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Figma', level: 80 },
      ],
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-gray-800">Skills & Technologies</h2>
        <p className="text-gray-600">My technical expertise and proficiency levels(this area is a placeholder for now)</p>
      </div>

      <div className="space-y-6">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
          >
            <div className={`h-1 bg-gradient-to-r ${category.color}`} />
            <div className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-gray-800">{category.category}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 text-sm">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} transition-all duration-500 rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
