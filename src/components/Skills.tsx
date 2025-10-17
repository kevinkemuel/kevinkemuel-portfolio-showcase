const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Laravel", level: 95 },
        { name: "Python", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Oracle", level: 80 },
      ],
    },
    {
      title: "AI & Automation",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "N8N", level: 90 },
        { name: "APIs & Integrations", level: 95 },
        { name: "Data Analysis", level: 80 },
      ],
    },
    {
      title: "Herramientas",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 80 },
        { name: "Project Management", level: 90 },
        { name: "Agile/Scrum", level: 85 },
      ],
    },
  ];

  return (
    <section id="habilidades" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Habilidades <span className="gradient-text">Técnicas</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Stack tecnológico y expertise
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className="glass-card rounded-xl p-6 space-y-6 fade-in"
                style={{ animationDelay: `${catIndex * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-primary">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animation: `slideIn 1s ease-out ${skillIndex * 0.1}s forwards`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
