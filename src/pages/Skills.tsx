import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Code2, Database, Palette, Zap } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Three.js", level: 85 },
    ],
  },
  {
    icon: Database,
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    icon: Palette,
    title: "Design & Animation",
    skills: [
      { name: "Framer Motion", level: 92 },
      { name: "GSAP", level: 85 },
      { name: "Figma", level: 88 },
      { name: "UI/UX Design", level: 90 },
    ],
  },
  {
    icon: Zap,
    title: "Tools & Others",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Testing", level: 82 },
    ],
  },
];

const Skills = () => {
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
              Skills & Expertise
            </h1>
            <p className="text-xl text-muted-foreground">
              Technologies I work with
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="glass p-8 rounded-2xl space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                            ease: "easeOut",
                          }}
                          className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full glow-primary"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;
