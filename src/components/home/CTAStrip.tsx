import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTAStrip = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-foreground text-background">
      <div className="container-padding mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="text-center lg:text-left max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Ready to Create Something Unforgettable?
            </h2>
            <p className="text-background/70 text-lg">
              Let's discuss your next event and bring your vision to life.
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center px-8 py-4 text-sm font-medium bg-background text-foreground rounded-full hover:bg-background/90 transition-all duration-300"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAStrip;
