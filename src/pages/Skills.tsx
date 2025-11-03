import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { GraduationCap, Briefcase, Code2, Cloud, Brain, Palette, ExternalLink } from "lucide-react";

const education = [
  {
    degree: "M.Sc. (Master's)",
    institution: "Periyar University",
    dates: "Aug 2024 – May 2026",
    field: "Data Science",
    gpa: "8 / 10",
    status: "Pursuing",
  },
  {
    degree: "B.Sc. (Bachelor's)",
    institution: "Periyar University",
    dates: "Aug 2021 – Jun 2024",
    field: "Computer Science",
    gpa: "7.5 / 10",
    status: "Completed",
  },
];

const experience = {
  role: "AI | Cloud | DevOps Engineer",
  company: "Vibe Coding",
  focus: "Integrating cutting-edge AI solutions with robust cloud infrastructure and DevOps practices to deliver scalable, high-impact data-driven systems.",
};

const skillCategories = [
  {
    icon: Code2,
    title: "Languages & Databases",
    level: 90,
    description: "Python, R, C++, SQL, PostgreSQL, MongoDB",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    level: 85,
    description: "AWS (EC2, S3), Docker, Kubernetes, CI/CD, Airflow",
  },
  {
    icon: Brain,
    title: "ML & AI Tools",
    level: 80,
    description: "TensorFlow, PyTorch, Scikit-learn, OpenCV, NLP, Computer Vision",
  },
  {
    icon: Palette,
    title: "Frontend & Vibe Coding",
    level: 75,
    description: "React, Vite, Tailwind CSS, Flask, Streamlit",
  },
];

const Skills = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
              Resume & Skills
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              My academic journey, experience, and technical expertise
            </p>
            <motion.a
              href="https://docs.google.com/document/d/1VaeAQ4g26PI3mHqKdCUxZ1adEeJW8dy7-53JFcsgMrI/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              View Full Resume
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Education Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold gradient-text">Education</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="glass p-6 rounded-2xl space-y-3"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      edu.status === "Pursuing" 
                        ? "bg-primary/20 text-primary" 
                        : "bg-secondary/20 text-secondary"
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-lg font-semibold">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.field}</p>
                  <div className="flex justify-between items-center pt-2 border-t border-border/50">
                    <span className="text-sm text-muted-foreground">{edu.dates}</span>
                    <span className="text-sm font-bold text-primary">CGPA: {edu.gpa}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold gradient-text">Experience</h2>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold gradient-text mb-2">{experience.role}</h3>
              <p className="text-lg text-primary font-semibold mb-4">{experience.company}</p>
              <p className="text-muted-foreground leading-relaxed">{experience.focus}</p>
            </motion.div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold gradient-text text-center mb-12">
              Technical Proficiency
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-8 rounded-2xl space-y-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Proficiency</span>
                      <span className="text-lg font-bold text-primary">{category.level}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${category.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full glow-primary"
                      />
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      {"█".repeat(Math.floor(category.level / 10))}
                      {category.level % 10 >= 5 ? "▉" : ""}
                      {"░".repeat(10 - Math.ceil(category.level / 10))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;
