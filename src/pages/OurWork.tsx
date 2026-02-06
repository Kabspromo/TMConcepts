import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-stage.jpg";
import conferenceImage from "@/assets/conference-setup.jpg";
import weddingImage from "@/assets/wedding-setup.jpg";
import concertImage from "@/assets/concert-event.jpg";
import ledImage from "@/assets/led-screens.jpg";
import stageImage from "@/assets/stage-design.jpg";

const categories = ["All", "Conferences", "Concerts", "Weddings", "Corporate"];

const galleryItems = [
  { id: 1, title: "Tech Summit 2024", category: "Conferences", image: heroImage },
  { id: 2, title: "Corporate Annual Meeting", category: "Corporate", image: conferenceImage },
  { id: 3, title: "Johnson Wedding", category: "Weddings", image: weddingImage },
  { id: 4, title: "Summer Music Festival", category: "Concerts", image: concertImage },
  { id: 5, title: "LED Wall Installation", category: "Corporate", image: ledImage },
  { id: 6, title: "Stage Design Project", category: "Concerts", image: stageImage },
  { id: 7, title: "Executive Retreat", category: "Conferences", image: conferenceImage },
  { id: 8, title: "Garden Wedding", category: "Weddings", image: weddingImage },
  { id: 9, title: "Brand Launch Event", category: "Corporate", image: heroImage },
];

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

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
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Events That <span className="text-gradient">Speak for Themselves</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our portfolio of successful events. Each project represents our commitment 
              to excellence and our passion for creating unforgettable experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-12">
        <div className="container-padding mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="container-padding mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <button
                    onClick={() => setSelectedImage(item)}
                    className="group relative block w-full rounded-2xl overflow-hidden aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-1 block">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-muted hover:bg-accent transition-colors"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6 text-foreground" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-2xl"
              />
              <div className="mt-4 text-center">
                <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-1 block">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl font-semibold text-foreground">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default OurWork;
