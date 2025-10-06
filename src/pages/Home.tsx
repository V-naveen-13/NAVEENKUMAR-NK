import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Scene3D } from "@/components/Scene3D";
import { SocialLinks } from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

const Home = () => {
  return (
    <PageTransition>
      <div className="min-h-screen relative overflow-hidden">
        <ParticlesBackground />
        
        {/* Hero Section */}
        <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="gradient-text">Creative</span>
                <br />
                Developer
              </motion.h1>
              
              <motion.p
                className="text-xl text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Crafting cutting-edge web experiences with modern technologies
              </motion.p>

              <motion.div
                className="flex gap-4 flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold glow-primary hover:glow-secondary transition-all duration-300"
                >
                  Hire Me
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass border-primary/50 hover:bg-primary/10"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Download CV
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="h-[400px] md:h-[600px]"
            >
              <Scene3D />
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-8 h-8 text-primary" />
          </motion.div>
        </section>

        {/* About Section */}
        <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass p-12 rounded-3xl space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                About Me
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  I'm a passionate developer specializing in creating immersive web experiences 
                  that push the boundaries of what's possible on the web.
                </p>
                <p>
                  With expertise in React, Three.js, and modern animation libraries, I bring 
                  ideas to life through code and creativity.
                </p>
                <p>
                  My work combines technical excellence with artistic vision to deliver 
                  projects that are both functional and visually stunning.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
                {[
                  { label: "Years Experience", value: "5+" },
                  { label: "Projects Completed", value: "50+" },
                  { label: "Happy Clients", value: "30+" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20"
                  >
                    <div className="text-3xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Social Links */}
        <section className="relative z-10 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold gradient-text">Connect With Me</h2>
            <SocialLinks />
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
