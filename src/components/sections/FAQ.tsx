import React from "react";
import { motion } from "framer-motion";

const FrequentlyAskedQuestions: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center space-y-4 text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            FAQ
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Find answers to common questions about Kanbanify
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {[
            {
              question:
                "How does Kanbanify compare to other task management tools?",
              answer:
                "Kanbanify combines the visual workflow of Kanban boards with powerful automation, analytics, and collaboration features. Unlike other tools that may excel in one area but lack in others, we provide a comprehensive solution that scales with your team's needs.",
            },
            {
              question: "Is Kanbanify suitable for small teams?",
              answer:
                "Kanbanify is designed to be flexible and scalable. Our pricing plans start with a free tier for small teams, and you can upgrade as your team grows. The intuitive interface means even small teams with limited resources can get started quickly.",
            },
            {
              question: "Can I integrate Kanbanify with other tools we use?",
              answer:
                "Yes, Kanbanify offers integrations with popular tools like Slack, GitHub, Google Workspace, Microsoft Teams, and many more. We also provide an API for custom integrations if you have specific needs.",
            },
            {
              question: "How secure is our data on Kanbanify?",
              answer:
                "Security is a top priority. We use industry-standard encryption, regular security audits, and comply with GDPR, CCPA, and other privacy regulations. Your data is backed up regularly, and we offer enterprise-grade security features for larger organizations.",
            },
            {
              question: "Do you offer onboarding and training?",
              answer:
                "Yes, we provide comprehensive documentation, video tutorials, and webinars for all users. Our Enterprise plan includes dedicated onboarding sessions and personalized training for your team.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b last:border-0 py-6"
            >
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
