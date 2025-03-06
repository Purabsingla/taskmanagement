import React from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
const CTA: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center space-y-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Start Managing Tasks{" "}
            <span className="text-primary">The Right Way</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Join thousands of teams who have already improved their productivity
            with Kanbanify.
          </p>
          <Button size="lg" className="mt-6 group">
            Get Started For Free
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required. 14-day free trial.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
