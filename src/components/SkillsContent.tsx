import { Progress } from "./ui/progress";

export function SkillsContent() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: '🎨',
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Vue.js', level: 75 },
        { name: 'React', level: 70 },
        { name: 'TypeScript', level: 70 },
      ],
    },
    {
      category: 'Backend',
      icon: '⚙️',
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'SQLite', level: 75 },
        { name: 'Django', level: 60 },
        { name: 'C++', level: 53 },
        { name: 'C#', level: 50 },
      ],
    },
    {
      category: 'Tools & Others',
      icon: '🛠️',
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'GitHub', level: 90 },
        { name: 'Figma', level: 80 },
        { name: 'VS Code', level: 75 },
        { name: 'Docker', level: 70 },
      ],
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-gray-800">Skills & Technologies</h2>
        <p className="text-gray-600">These are my current IT related skill</p>
      </div>

      <div className="space-y-6">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className={`h-1 bg-gradient-to-r ${category.color}`} />
            <div className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-gray-800 dark:text-gray-100">{category.category}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="group">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 text-sm group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-200">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className={`h-2 bg-gray-200 dark:bg-gray-700 transition-all duration-300 group-hover:scale-105`}
                      indicatorClassName={`bg-gradient-to-r ${category.color}`}
                    />
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
