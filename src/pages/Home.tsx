import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Scene3D } from "@/components/Scene3D";
import { SocialLinks } from "@/components/SocialLinks";
import { ArrowDown } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

const Home = () => {
  return (
    <PageTransition>
      <div className="min-h-screen relative overflow-hidden">
        <ParticlesBackground />
        
        {/* Hero Section - Optimized for mobile */}
        <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 md:space-y-6 text-center md:text-left"
            >
              <motion.h1
                className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="gradient-text">NAVEEN</span>
                <br className="hidden sm:block" />
                <span className="gradient-text sm:hidden">-</span>
                <span>KUMAR V</span>
              </motion.h1>
              
              <motion.p
                className="text-lg sm:text-xl text-muted-foreground max-w-[90vw] sm:max-w-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Data Science | AI/ML | Analytics | Building intelligent solutions
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="h-[300px] sm:h-[400px] md:h-[600px] w-full"
            >
              <Scene3D />
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          </motion.div>
        </section>

        {/* About Section - Mobile responsive */}
        <section className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass p-6 sm:p-12 rounded-2xl sm:rounded-3xl space-y-6 sm:space-y-8"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
                💼 About Me
              </h2>
              
              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-muted-foreground">
                {/* Introduction */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-lg sm:text-xl font-medium"
                >
                  Hi, I'm Naveen Kumar V — a Data Science enthusiast turning raw data into intelligent systems.
                </motion.p>

                {/* Main narrative */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  I build AI-powered solutions that solve real problems. Currently pursuing my postgraduate in Data Science at Periyar University (2024–2026), I've shipped projects in video surveillance, medical AI, and sports analytics using TensorFlow, PyTorch, and AWS. Most recently, my team placed 3rd at Smart India Hackathon 2025 for designing scalable AI/ML pipelines.
                </motion.p>

                {/* What I Do section */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-primary">What I Do</h3>
                  <ul className="list-none space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Design and deploy deep learning models (ResNet50, BERT, GPT integration)
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Build end-to-end data pipelines with Python, SQL, and cloud platforms
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Transform complex data into actionable insights using Power BI and Tableau
                    </li>
                  </ul>
                </div>

                {/* Tech Stack - Updated grid layout */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-primary">⚙️ Tech Stack</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">Languages & Core</p>
                      <p className="text-sm sm:text-base">Python • R • C++ • SQL</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">ML & AI</p>
                      <p className="text-sm sm:text-base">TensorFlow • PyTorch • Scikit-learn • OpenCV</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">Web & API</p>
                      <p className="text-sm sm:text-base">Flask • Streamlit • FastAPI</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">Cloud & Tools</p>
                      <p className="text-sm sm:text-base">AWS • Airflow • Power BI • Tableau</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-primary">🧠 AI Highlights</h3>
                  <ul className="space-y-2 text-sm sm:text-base list-disc list-inside">
                    {/* ...existing list items... */}
                  </ul>
                </div>
              </div>

              {/* Stats grid - Mobile optimized */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8">
                {[
                  { label: "Projects", value: "65" },
                  { label: "Internships", value: "3" },
                  { label: "Hackathons", value: "1" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="text-center p-3 sm:p-6 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20"
                  >
                    <div className="text-2xl sm:text-3xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Social Links - Mobile friendly */}
        <section className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold gradient-text">Connect With Me</h2>
            <SocialLinks />
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;