import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Sistema de Gestión de Riesgos",
      description: "Plataforma web completa para solicitud, procesamiento y administración de siniestros. Incluye dashboard analytics, gestión de incidentes, solicitudes medicas y reportes automatizados.",
      tags: ["Laravel", "JavaScript", "Oracle", "Bootstrap"],
      featured: true,
    },
    {
      title: "Portal de control de efectivo",
      description: "Sistema de control administrativo de entrada y salida de efectivo, multimoneda y con segmentacion de denominaciones. Panel de totalización de dinero disponible en caja.",
      tags: ["Python", "JavaScript", "Django", "Oracle"],
      featured: false,
    },
    {
      title: "Asistente financiero personal",
      description: "Workflow asistente financiero personal para optimizar el control de ingresos y egresos, con funcionalidades avanzadas para el manejo de tasas de cambio múltiples y gestión de cuentas en diferentes monedas. Conversión de divisas en tiempo real. Accesible a través de WhatsApp y Telegram para una interacción fluida y conveniente.",
      tags: ["n8n", "Supabase", "WhatsApp API Cloud", "Redis", "Telegram"],
      featured: true,
    },
    {
      title: "Agente AI",
      description: "Integración de un agente de IA en sistema de gestión de riesgos multi perfil. Proporcionando herramientas para la gestión de memoria, llamadas a funciones y sistemas de recuperación aumentada de información. Uso del modelo de Google Gemini.",
      tags: ["Laravel", "Neuron IA", "Oracle", "Google Gemini"],
      featured: true,
    },
    {
      title: "WhatsApp Chatbot",
      description: "Chatbot de WhatsApp para consultas y atención al cliente. Conexión mediante API para obtener datos y dar información personalizada. Conexión a plataforma de comunicación con agentes de atención.",
      tags: ["WhatsApp API Cloud", "Chatbot Development", "Oracle", "API Development"],
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

                  {/* <div className="flex gap-3 pt-2">
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
                  </div> */}
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
