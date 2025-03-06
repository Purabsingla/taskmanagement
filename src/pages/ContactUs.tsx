import React, { useState } from "react";
import { Mail, Send, MessageSquare, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const formItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        className="h-64 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=2070")',
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "overlay",
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="container mx-auto px-6 h-full flex items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <h1 className="text-4xl font-bold text-white">Contact Support</h1>
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Support Information */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                How Can We Help?
              </h2>
              <p className="text-gray-600 mb-8">
                Having trouble with your Kanban boards? Need help with task
                management? Our support team is here to assist you.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                className="flex items-start space-x-4"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <MessageSquare className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Quick Support</h3>
                  <p className="text-gray-600">
                    Get a response within 24 hours for all your queries
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Email Support</h3>
                  <p className="text-gray-600">support@kanban-app.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <HelpCircle className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Documentation</h3>
                  <p className="text-gray-600">
                    Check our{" "}
                    <a
                      href="#some"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      documentation
                    </a>{" "}
                    for quick answers to common questions
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                variants={formItemVariants}
                initial="hidden"
                animate="visible"
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  required
                />
              </motion.div>

              <motion.div
                variants={formItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  required
                />
              </motion.div>

              <motion.div
                variants={formItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  required
                />
              </motion.div>

              <motion.div
                variants={formItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  required
                  placeholder="Describe your issue or feedback..."
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
