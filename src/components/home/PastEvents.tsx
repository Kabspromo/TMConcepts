import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import conferenceImage from "@/assets/conference-setup.jpg";
import weddingImage from "@/assets/wedding-setup.jpg";
import concertImage from "@/assets/concert-event.jpg";

const events = [
  {
    title: "Corporate Conferences",
    category: "Conference",
    image: conferenceImage,
  },
  {
    title: "Luxury Weddings",
    category: "Wedding",
    image: weddingImage,
  },
  {
    title: "Live Concerts",
    category: "Concert",
    image: concertImage,
  },
];

const PastEvents = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary">
      <div className="container-padding mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div className="max-w-2xl mb-6 md:mb-0">
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4 block">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Featured Events
            </h2>
          </div>
          <Link
            to="/our-work"
            className="group inline-flex items-center text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            View All Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link
                to="/our-work"
                className="group block relative rounded-2xl overflow-hidden aspect-[4/5]"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2 block">
                    {event.category}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">
                    {event.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
