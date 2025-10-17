import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="container mx-auto px-6 z-10 fade-in">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="flex justify-center md:justify-end order-1 md:order-1">
            <div className="relative group">
              {/* Gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden glass-card p-1">
                  <img
                    src="/placeholder.svg"
                    alt="Kevin Morillo - Full Stack Developer"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8 text-center md:text-left order-2 md:order-2">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Hola, soy{" "}
                <span className="gradient-text">Kevin Morillo</span>
              </h1>
              <h2 className="text-xl md:text-3xl text-muted-foreground font-light">
                Full Stack Developer & AI Specialist
              </h2>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Transformo ideas en soluciones digitales innovadoras con{" "}
              <span className="text-primary font-semibold">7 años de experiencia</span> en desarrollo web,
              inteligencia artificial y gestión de proyectos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white border-0 px-8 py-6 text-lg font-semibold shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow)] transition-all"
                onClick={() => scrollToSection("proyectos")}
              >
                Ver Proyectos
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/50 hover:bg-primary/10 px-8 py-6 text-lg"
                onClick={() => scrollToSection("contacto")}
              >
                Contáctame
              </Button>
            </div>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {["Laravel", "Python", "JavaScript", "Oracle", "N8N", "AI/ML"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 glass-card rounded-full text-sm font-medium hover:scale-110 transition-transform cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
