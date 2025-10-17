const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["JavaScript", "React", "JavaScript", "Tailwind CSS", "HTML5", "Bootstrap"],
    },
    {
      title: "Backend",
      skills: ["Laravel", "Python", "Node.js", "Oracle", "MySQL", "PostgreSQL"],
    },
    {
      title: "AI & Automation",
      skills: ["Chatbots", "N8N", "APIs & Integrations", "Gemini", "OpenAI", "LangChain"],
    },
    {
      title: "Herramientas",
      skills: ["Git", "Docker", "VS Code", "Postman", "Agile/Scrum"],
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
              Stack tecnológico y experticia
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
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;
