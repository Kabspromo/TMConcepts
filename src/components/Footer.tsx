import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-padding mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tight text-foreground">
                TM <span className="font-light">CONCEPTS</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Toxic With Events. We don't just set up events — we create unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full bg-muted hover:bg-accent transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-foreground" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-muted hover:bg-accent transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} className="text-foreground" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-muted hover:bg-accent transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} className="text-foreground" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-muted hover:bg-accent transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Services", "Our Work", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Conference Production",
                "Stage & Lighting",
                "LED Screens",
                "Concerts & Shows",
                "Weddings & Events",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Nairobi, Kenya
                  <br />
                  East Africa
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-muted-foreground flex-shrink-0" />
                <a
                  href="tel:+254700000000"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
                >
                  +254 700 000 000
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-muted-foreground flex-shrink-0" />
                <a
                  href="mailto:info@tmconcepts.co.ke"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
                >
                  info@tmconcepts.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} TM Concepts. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
