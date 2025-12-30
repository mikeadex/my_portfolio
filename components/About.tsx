export default function About() {
  const experience = [
    {
      company: 'Tech Company',
      role: 'Senior Software Engineer',
      period: '2020 - Present'
    },
    {
      company: 'Startup Inc',
      role: 'Full Stack Developer',
      period: '2018 - 2020'
    },
    {
      company: 'Digital Agency',
      role: 'Frontend Developer',
      period: '2016 - 2018'
    }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xs tracking-[0.3em] text-gray-600 dark:text-gray-400 uppercase font-medium mb-12">
          EXPERIENCE
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {experience.map((exp, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {exp.company}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {exp.role}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {exp.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
