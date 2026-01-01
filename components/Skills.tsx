import { skills } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xs tracking-[0.3em] text-gray-600 dark:text-gray-400 uppercase font-medium mb-12">
          SKILLS & TOOLS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skillCategory) => (
            skillCategory.items.map((skill, index) => (
              <div
                key={`${skillCategory.category}-${index}`}
                className="bg-white dark:bg-black rounded-lg p-6 flex items-center justify-center aspect-square hover:scale-105 transition-transform"
              >
                <span className="text-sm font-medium text-black dark:text-white text-center">
                  {skill}
                </span>
              </div>
            ))
          ))}
        </div>
      </div>
    </section>
  );
}
