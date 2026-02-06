import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Eye, Users, Award, Zap, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import stageImage from "@/assets/stage-design.jpg";
import conferenceImage from "@/assets/conference-setup.jpg";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for perfection in every event, no matter the size.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with clients to bring their vision to life.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Constantly evolving with the latest technology and trends.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Trusted by hundreds of clients to deliver flawlessly.",
  },
];

const About = () => {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              The Story Behind <span className="text-gradient">TM Concepts</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over 15 years, we've been transforming ordinary spaces into extraordinary 
              experiences across East Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="pb-20">
        <div className="container-padding mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={stageImage}
                  alt="Behind the scenes"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building Experiences, Not Just Events
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  TM Concepts was founded with a simple yet powerful vision: to revolutionize 
                  event production in East Africa. What started as a small team with big dreams 
                  has grown into one of the region's most trusted event production companies.
                </p>
                <p>
                  Our journey began in Nairobi, where we quickly established ourselves as 
                  innovators in stage design, lighting, and audio-visual production. Today, 
                  we've delivered over 200 successful events, from intimate corporate gatherings 
                  to massive concerts and elegant weddings.
                </p>
                <p>
                  Every project we undertake reflects our core belief: events should be more 
                  than just gatherings — they should be transformative experiences that leave 
                  lasting impressions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-padding mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-8 md:p-10"
            >
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-muted mb-6">
                <Target className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver unforgettable event experiences through innovative production, 
                cutting-edge technology, and unwavering commitment to excellence. We transform 
                visions into reality, creating moments that inspire and captivate.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-2xl p-8 md:p-10"
            >
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-muted mb-6">
                <Eye className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading event production company in East Africa, recognized for 
                our creativity, reliability, and ability to exceed expectations. We aspire 
                to set new standards in the industry and inspire others through our work.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-padding mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-muted mb-4">
                  <value.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="section-padding bg-secondary">
        <div className="container-padding mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4 block">
                Our Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                World-Class Equipment
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  We invest in the best equipment to ensure every event meets international 
                  standards. Our inventory includes state-of-the-art lighting fixtures, 
                  professional audio systems, high-resolution LED screens, and modern staging solutions.
                </p>
                <p>
                  From intimate gatherings to stadium-sized events, we have the tools and 
                  expertise to deliver exceptional results.
                </p>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 text-sm font-medium bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={conferenceImage}
                  alt="Professional equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
