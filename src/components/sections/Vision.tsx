import React from "react";
import { motion } from "framer-motion";
import image from "../../assests/Images/Login_Image.jpg";

const Vision: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  return (
    <div className="mx-auto">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Our Vision
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Reimagining Task Management for Modern Teams
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Founded in 2023, Kanbanify was born from a simple observation:
                teams waste too much time managing their work instead of doing
                it. We set out to create a visual task management system that's
                intuitive, flexible, and powerful enough for any workflow.
              </p>
              <p className="text-muted-foreground md:text-xl">
                Our vision is to empower teams of all sizes to visualize their
                work, optimize their processes, and achieve their goals with
                minimal friction. We believe that when teams can see their work
                clearly, they can accomplish anything.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] overflow-hidden rounded-xl"
            >
              <img
                src={image}
                alt="Team collaboration"
                // fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
