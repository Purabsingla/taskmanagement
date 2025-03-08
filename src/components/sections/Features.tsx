// import React from "react";
// import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import { Boxes, Calendar, Users2, Moon } from "lucide-react";

type LucideIcon = React.FC<React.SVGProps<SVGSVGElement>>;
interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

const features: Feature[] = [
  {
    title: "Drag & Drop Task Management",
    description:
      "Intuitive task management with drag and drop functionality. Move tasks between different stages effortlessly.",
    icon: Boxes,
  },
  {
    title: "Task Due Date & Reminders",
    description:
      "Never miss a deadline with smart due date tracking and timely reminders for your tasks.",
    icon: Calendar,
  },
  {
    title: "Collaboration & User Roles",
    description:
      "Work together seamlessly with role-based access control and real-time collaboration features.",
    icon: Users2,
  },
  {
    title: "Dark Mode & Custom Themes",
    description:
      "Personalize your experience with dark mode and customizable themes for optimal viewing comfort.",
    icon: Moon,
  },
];

export function FeaturesSection() {
  return (
    <section className="relative z-20 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Powerful Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Everything you need to manage your tasks effectively and collaborate
            with your team seamlessly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative group"
    >
      <div className="relative p-8 bg-white border border-gray-200 rounded-2xl transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center justify-center w-12 h-12 mb-6 bg-indigo-100 rounded-xl group-hover:bg-indigo-500 transition-colors duration-300">
          <Icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {feature.title}
        </h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    </motion.div>
  );
}
