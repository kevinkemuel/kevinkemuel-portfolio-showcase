import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Coordinador de Proyectos Web",
      company: "Humanitas Administradora de Riesgos",
      location: "Caracas, Venezuela",
      period: "2018 - Presente",
      description: [
        "Coordinación de equipos de desarrollo en proyectos web críticos",
        "Implementación de soluciones con IA para optimizar procesos",
        "Gestión de arquitectura y stack tecnológico (Laravel, Oracle, Python)",
        "Mejora continua de sistemas legacy y migración a tecnologías modernas",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Proyectos Freelance",
      location: "Remoto",
      period: "2017 - Presente",
      description: [
        "Desarrollo de aplicaciones web personalizadas para diversos clientes",
        "Automatización de procesos empresariales con N8N e IA",
        "Consultoría en arquitectura de software y optimización",
        "Integración de APIs y servicios de terceros",
      ],
    },
  ];

  return (
    <section id="experiencia" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Experiencia <span className="gradient-text">Profesional</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Mi trayectoria en el desarrollo de software
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 md:p-8 hover-lift fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <h3 className="text-2xl font-bold">{exp.title}</h3>
                      </div>
                      <p className="text-lg text-primary font-semibold">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.location}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 pt-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
