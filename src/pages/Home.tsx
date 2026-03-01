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
                Data Science & Analytics| AI/ML | DL & NLP | CV & RAG Systems | End-to-End AI Deployment| 
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
              className="glass rounded-2xl p-6 sm:p-10 space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">💼 About Me</h2>
              
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Hi, I'm <span className="text-foreground font-semibold">Naveen Kumar V</span> — a Data Science engineer in the making.
                </p>
                <p>
                  I design and deploy <span className="text-foreground font-semibold">AI-powered solutions</span> that solve real-world problems at scale. From medical AI models and surveillance intelligence systems to fashion recommendation engines and RAG-based chatbots, I build systems that go beyond notebooks — into <span className="text-primary font-semibold">production</span>.
                </p>
                <p>
                  With expertise in <span className="text-foreground font-semibold">Machine Learning, Deep Learning, and  AWS cloud deployment, SAP BTP</span>, I focus on creating scalable, optimized, and business-ready AI pipelines.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  🏆 3rd Place – Smart India Hackathon 2025
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  📊 Data-driven
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  🚀 Scalable
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  🎯 Impact-focused
                </span>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-primary">⚙️ Tech Stack</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {techStack.map((tech) => (
                    <div key={tech.category} className="space-y-2">
                      <p className="font-semibold text-foreground">{tech.category}</p>
                      <p className="text-sm sm:text-base text-muted-foreground">{tech.items}</p>
                    </div>
                  ))}
                </div>
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

const techStack = [
  { category: "Languages & Core", items: "Python • R • SQL •Javascript" },
  { category: "ML & AI", items: "TensorFlow • PyTorch • Scikit-learn • OpenCV" },
  { category: "Web & API", items: "Flask • Streamlit • FastAPI" },
  { category: "Data & Visualization", items: "Pandas • NumPy • Matplotlib • Seaborn" },
  { category: "Power BI & Visualization:", items: " Excel Dashboards • Dashboard Design•Storytelling• MIS Reporting" },
  { category: "Cloud & Platforms:", items: "SAP BTP • AWS • Airflow • Power BI • Tableau" },
];