import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

export const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.h1
              className="text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <motion.span
                  className={`relative ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                    />
                  )}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 space-y-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                <div
                  className={`block py-2 ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
