import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/naveen1332004", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/naveen-kumar-v-9388b8292", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export const SocialLinks = () => {
  return (
    <div className="flex gap-4 justify-center">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="glass p-4 rounded-xl glow-primary hover:glow-secondary transition-all duration-300"
        >
          <social.icon className="w-6 h-6" />
        </motion.a>
      ))}
    </div>
  );
};
