import React from "react";
import {
  Users,
  Calendar,
  Phone,
  Mail,
  Clock,
  Github,
  Twitter,
  Linkedin,
  MessageSquare,
  Trello,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-900 to-purple-900 text-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact & Support */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Trello className="h-6 w-6 text-indigo-400" />
              <span className="text-xl font-bold">TaskFlow</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-indigo-400" />
                <span className="text-lg font-medium">24/7 Support</span>
              </div>
              <p className="text-2xl font-bold text-white hover:text-indigo-400 transition">
                +1 (888) 123-4567
              </p>
              <p className="text-sm text-gray-300">
                <Mail className="h-4 w-4 inline-block mr-2" />
                support@taskflow.com
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-indigo-400" />
                <span className="text-sm font-medium">Support Hours</span>
              </div>
              <p className="text-sm text-gray-300">24/7 Live Chat Support</p>
              <p className="text-sm text-gray-300">
                Phone Support: 9:00 AM - 8:00 PM EST
              </p>
            </div>

            <div className="flex space-x-4">
              <a
                href="#some"
                className="text-gray-300 hover:text-indigo-400 transition"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#some"
                className="text-gray-300 hover:text-indigo-400 transition"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#some"
                className="text-gray-300 hover:text-indigo-400 transition"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-white">Features</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Kanban Boards",
                    "Task Analytics",
                    "Team Management",
                    "Time Tracking",
                    "Custom Workflows",
                  ].map((feature) => (
                    <li key={feature}>
                      <a
                        href="#some"
                        className="text-gray-300 hover:text-indigo-400 transition duration-300 text-sm"
                      >
                        {feature}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-white">Resources</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Documentation",
                    "API Reference",
                    "Community Forum",
                    "Templates",
                    "Integrations",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#some"
                        className="text-gray-300 hover:text-indigo-400 transition duration-300 text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-indigo-800">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <a href="#some" className="hover:text-indigo-400 transition">
                Terms
              </a>
              <span>·</span>
              <a href="#some" className="hover:text-indigo-400 transition">
                Privacy
              </a>
              <span>·</span>
              <a href="#some" className="hover:text-indigo-400 transition">
                Security
              </a>
            </div>

            <div className="text-sm text-gray-400 md:text-center">
              © {new Date().getFullYear()} TaskFlow. All rights reserved.
            </div>

            <div className="text-sm text-gray-400 md:text-right">
              <div className="flex items-center justify-end space-x-2">
                <Users className="h-4 w-4 text-indigo-400" />
                <span>Trusted by 50,000+ teams worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
