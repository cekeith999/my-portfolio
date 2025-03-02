'use client';

import { motion } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Hero3D from './components/Hero3D';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <CustomCursor />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Hero3D />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-6xl font-bold mb-4">Your Name</h1>
          <p className="text-2xl text-gray-400">Your Professional Title</p>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex items-center justify-center py-20 px-4"
      >
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Your about text goes here. Write 2-3 sentences about yourself,
            your passion, and what drives you.
          </p>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 rounded-lg overflow-hidden"
            >
              <div className="h-48 bg-gray-800"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Project Title</h3>
                <p className="text-gray-400">Project description goes here.</p>
              </div>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 rounded-lg overflow-hidden"
            >
              <div className="h-48 bg-gray-800"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Project Title</h3>
                <p className="text-gray-400">Project description goes here.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex items-center justify-center py-20 px-4"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-400 mb-8">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block bg-accent hover:bg-accent/80 text-white px-8 py-3 rounded-full text-lg transition-colors"
          >
            Say Hello
          </a>
        </div>
      </motion.section>
    </main>
  );
}
