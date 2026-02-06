import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Presentation, 
  Lightbulb, 
  Monitor, 
  Music, 
  Heart, 
  Megaphone,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    icon: Presentation,
    title: "Conference Production",
    description: "End-to-end conference setup with professional staging, audio-visual systems, and seamless execution.",
  },
  {
    icon: Lightbulb,
    title: "Stage & Lighting",
    description: "Custom stage designs with dramatic lighting that transforms venues into immersive environments.",
  },
  {
    icon: Monitor,
    title: "LED Screens & Visuals",
    description: "High-resolution LED walls and projection mapping for stunning visual impact.",
  },
  {
    icon: Music,
    title: "Concerts & Shows",
    description: "Full-scale concert production with world-class sound, lighting, and artist coordination.",
  },
  {
    icon: Heart,
    title: "Weddings & Social",
    description: "Elegant event design for weddings, birthdays, and celebrations that leave lasting impressions.",
  },
  {
    icon: Megaphone,
    title: "Event Branding",
    description: "Custom signage, branded experiences, and visual identity that amplifies your message.",
  },
];

const ServicesOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-padding mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Full-Service Event Production
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to execution, we deliver comprehensive event solutions that 
            captivate audiences and exceed expectations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to="/services"
                className="group block glass-card-hover rounded-2xl p-8 h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-muted">
                    <service.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
