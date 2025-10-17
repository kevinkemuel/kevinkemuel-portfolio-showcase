import { Code2, Brain, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Developer",
      description: "Dominio completo de Laravel, Python, JavaScript, Oracle y tecnologías modernas",
    },
    {
      icon: Brain,
      title: "Especialista en IA",
      description: "Implementación de automatizaciones con Inteligencia Artificial",
    },
    {
      icon: Rocket,
      title: "Gestor de Proyectos",
      description: "7 años coordinando y entregando proyectos web exitosos",
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Experiencia liderando equipos y colaborando con stakeholders",
    },
  ];

  return (
    <section id="sobre-mi" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Sobre <span className="gradient-text">Mí</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Coordinador de Proyectos Web en Humanitas Administradora de Riesgos
            </p>
          </div>

          {/* Bio with Photo */}
          <div className="grid md:grid-cols-2 gap-8 items-center fade-in">
            {/* Profile Photo */}
            <div className="flex justify-center">
              <div className="relative group">
                {/* Gradient border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative">
                  <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden glass-card p-1">
                    <img
                      src="/assets/fotokevinportafolio.jpg"
                      alt="Kevin Morillo - Full Stack Developer"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Text */}
            <div className="glass-card rounded-2xl p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Con <span className="text-primary font-semibold">ocho años de experiencia</span> en desarrollo 
                y coordinación de proyectos web, me especializo en crear soluciones tecnológicas innovadoras 
                que combinan desarrollo full stack con inteligencia artificial. Mi enfoque está en construir 
                aplicaciones escalables, eficientes y centradas en el usuario, utilizando las mejores prácticas 
                y tecnologías modernas.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="glass-card rounded-xl p-6 hover-lift group cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
