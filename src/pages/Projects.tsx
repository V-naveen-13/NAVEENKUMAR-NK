import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with modern UI",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    title: "AI Dashboard",
    description: "Analytics dashboard with AI-powered insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tech: ["React", "Python", "TensorFlow"],
    link: "#",
    github: "#",
  },
  {
    title: "3D Portfolio",
    description: "Interactive 3D portfolio website",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tech: ["Three.js", "React", "WebGL"],
    link: "#",
    github: "#",
  },
  {
    title: "Mobile App",
    description: "Cross-platform mobile application",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    tech: ["React Native", "Firebase"],
    link: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
              Featured Projects
            </h1>
            <p className="text-xl text-muted-foreground">
              Showcasing my best work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 border border-primary/20 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
