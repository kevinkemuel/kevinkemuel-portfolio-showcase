import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Sistema de Gestión de Riesgos",
      description: "Plataforma web completa para administración y análisis de riesgos laborales en Humanitas. Incluye dashboard analytics, gestión de incidentes y reportes automatizados.",
      tags: ["Laravel", "Vue.js", "Oracle", "API REST"],
      featured: true,
    },
    {
      title: "Asistente IA para Automatización",
      description: "Implementación de workflows inteligentes usando N8N y modelos de ML para automatizar procesos empresariales, reduciendo tiempo de procesamiento en 70%.",
      tags: ["Python", "N8N", "Machine Learning", "APIs"],
      featured: true,
    },
    {
      title: "Portal de Clientes B2B",
      description: "Sistema de gestión de clientes empresariales con autenticación segura, gestión de documentos y panel de métricas en tiempo real.",
      tags: ["Laravel", "JavaScript", "MySQL", "Tailwind"],
      featured: false,
    },
    {
      title: "Integración Multi-Plataforma",
      description: "API middleware para sincronización de datos entre múltiples sistemas empresariales, con procesamiento de más de 100k registros diarios.",
      tags: ["Python", "FastAPI", "Oracle", "Redis"],
      featured: false,
    },
  ];

  return (
    <section id="proyectos" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Proyectos <span className="gradient-text">Destacados</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Soluciones que he desarrollado y coordinado
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`glass-card rounded-xl p-6 hover-lift group cursor-pointer ${
                  project.featured ? "md:col-span-2" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  {project.featured && (
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-primary to-accent text-white rounded-full">
                      Proyecto Destacado
                    </span>
                  )}
                  
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-secondary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 hover:text-primary"
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 hover:text-primary"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
