import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Presentation, 
  Lightbulb, 
  Monitor, 
  Music, 
  Heart, 
  Megaphone,
  Check 
} from "lucide-react";
import Layout from "@/components/Layout";
import stageImage from "@/assets/stage-design.jpg";
import ledImage from "@/assets/led-screens.jpg";

const services = [
  {
    icon: Presentation,
    title: "Conference Production",
    description: "From intimate board meetings to large-scale corporate summits, we handle every detail of your conference production.",
    features: [
      "Complete venue setup and management",
      "Professional audio-visual systems",
      "Custom staging solutions",
      "Real-time technical support",
      "Seamless live streaming integration",
    ],
    image: stageImage,
  },
  {
    icon: Lightbulb,
    title: "Stage & Lighting Setup",
    description: "Transform any space with our expert stage design and dramatic lighting solutions that create unforgettable atmospheres.",
    features: [
      "Custom stage construction",
      "Moving head & intelligent lighting",
      "Atmospheric effects (fog, haze)",
      "Rigging and truss systems",
      "DMX programming & control",
    ],
    image: stageImage,
  },
  {
    icon: Monitor,
    title: "LED Screens & Visuals",
    description: "High-resolution LED walls and projection mapping that captivate audiences and amplify your message.",
    features: [
      "Indoor & outdoor LED displays",
      "Custom content creation",
      "Projection mapping",
      "Live video mixing",
      "Multi-screen configurations",
    ],
    image: ledImage,
  },
  {
    icon: Music,
    title: "Concerts & Artist Shows",
    description: "Full-scale concert production with world-class sound, lighting, and comprehensive artist coordination.",
    features: [
      "Line array sound systems",
      "Concert lighting design",
      "Artist hospitality & logistics",
      "Stage management",
      "Festival & tour production",
    ],
    image: stageImage,
  },
  {
    icon: Heart,
    title: "Weddings & Social Events",
    description: "Elegant event design for your most special moments. We create beautiful celebrations that leave lasting impressions.",
    features: [
      "Complete décor & styling",
      "Ambient lighting design",
      "Sound & entertainment systems",
      "Photography & video support",
      "Custom installations",
    ],
    image: stageImage,
  },
  {
    icon: Megaphone,
    title: "Event Branding & Signage",
    description: "Custom signage and branded experiences that amplify your message and create cohesive event identities.",
    features: [
      "Branded backdrop design",
      "Wayfinding & directional signage",
      "Photo booth setups",
      "Banner & display systems",
      "Interactive installations",
    ],
    image: ledImage,
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container-padding mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4 block">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Everything You Need for <span className="text-gradient">Exceptional Events</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We provide comprehensive event production services from concept to execution. 
              Every detail is meticulously planned and flawlessly delivered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-20">
        <div className="container-padding mx-auto">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center justify-center p-3 rounded-xl bg-muted mb-6">
                    <service.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-foreground flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 text-sm font-medium bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all duration-300"
                  >
                    Get a Quote
                  </Link>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-padding mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Every event is unique. Let's discuss your specific requirements and create 
              a tailored package for your needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-sm font-medium bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all duration-300 btn-glow"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
