import { motion } from "framer-motion";
import { Github, Linkedin, Code2 } from "lucide-react";
import { SocialLinks } from "../components/SocialLinks";
// ...rest of the imports

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/naveen1332004",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/naveen-kumar-v-9388b8292",
  },
  {
    icon: Code2,
    label: "LeetCode",
    href: "#",
  },
];

export const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      {socialLinks.map((social) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-accent transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <social.icon className="w-5 h-5 text-primary hover:text-secondary transition-colors" />
        </motion.a>
      ))}
    </div>
  );
};