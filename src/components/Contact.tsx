import { Mail, Linkedin, Github, MapPin, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kevinkemuelm448@gmail.com",
      link: "mailto:kevinkemuelm448@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "kevinkemuelmorillog",
      link: "https://www.linkedin.com/in/kevinkemuelmorillog/",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+58 412-023-4944",
      link: "https://wa.me/584120234944",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Caracas, Venezuela",
      link: null,
    },
  ];

  return (
    <section id="contacto" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Trabajemos <span className="gradient-text">Juntos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? Me encantaría saber más sobre tu idea y cómo puedo ayudarte a hacerla realidad.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="glass-card rounded-xl p-6 hover-lift fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-semibold group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-semibold">{info.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center glass-card rounded-2xl p-8 md:p-12 fade-in">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                ¿Listo para comenzar?
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Ya sea que necesites desarrollar un proyecto desde cero, mejorar una aplicación existente, 
                o implementar soluciones de IA, estoy aquí para ayudarte.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white border-0 px-8 py-6 text-lg font-semibold shadow-[var(--shadow-glow)]"
                onClick={() => window.open("https://wa.me/584120234944", "_blank")}
              >
                Enviar Mensaje
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
