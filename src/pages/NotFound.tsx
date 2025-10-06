import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <motion.h1
          className="text-9xl font-bold gradient-text"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          404
        </motion.h1>
        <h2 className="text-3xl font-bold">Page Not Found</h2>
        <p className="text-xl text-muted-foreground max-w-md">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a href="/">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold glow-primary hover:glow-secondary transition-all duration-300"
          >
            <Home className="mr-2 w-4 h-4" />
            Return to Home
          </Button>
        </a>
      </motion.div>
    </div>
  );
};

export default NotFound;
