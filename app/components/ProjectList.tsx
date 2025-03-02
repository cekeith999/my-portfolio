'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  dominantColor?: string;
  secondaryColor?: string;
}

interface ProjectListProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectList = ({ projects, onProjectClick }: ProjectListProps) => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <header className="mb-[100px] text-center">
        <h1 className="text-4xl font-light mb-4">Clarence Keith</h1>
        <h2 className="text-xl text-gray-600 mb-6">Design</h2>
        <p className="max-w-2xl mx-auto text-gray-500">
          A brief description about yourself, your expertise, and what drives you. 
          This could be 2-3 sentences that highlight your key strengths and interests.
        </p>
      </header>
      
      <div className="mt-[100px]">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`project-${project.id}`}
            onClick={() => onProjectClick(project)}
            className="flex gap-16 mb-32 last:mb-0 cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-1/2">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 project-image-container">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="50vw"
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{
                    '--border-gradient': `linear-gradient(45deg, ${project.dominantColor || '#000'}, ${project.secondaryColor || '#000'})`
                  } as any}
                />
              </div>
              <div className="page-overlay" />
            </div>
            <div className="w-1/2 pt-8">
              <h3 className="text-2xl font-light mb-4">{project.title}</h3>
              <p className="text-gray-500 mb-6">{project.category}</p>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList; 