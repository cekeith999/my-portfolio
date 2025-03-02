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

interface ProjectGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectGrid = ({ projects, onProjectClick }: ProjectGridProps) => {
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
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`project-${project.id}`}
            onClick={() => onProjectClick(project)}
            className="cursor-pointer w-full"
            transition={{ duration: 0.2 }}
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 project-image-container w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-sm uppercase tracking-wider font-medium">{project.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{project.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid; 