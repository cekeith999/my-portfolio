'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface ProjectGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectGrid = ({ projects, onProjectClick }: ProjectGridProps) => {
  // Create rows of 4 projects each
  const rows = projects.reduce((acc, project, index) => {
    const rowIndex = Math.floor(index / 4);
    if (!acc[rowIndex]) {
      acc[rowIndex] = [];
    }
    acc[rowIndex].push(project);
    return acc;
  }, [] as Project[][]);

  return (
    <div className="max-w-7xl mx-auto px-8">
      <header className="mb-32 text-center">
        <h1 className="text-4xl font-light mb-4">Your Name</h1>
        <h2 className="text-xl text-gray-600 mb-6">Software Engineer & Designer</h2>
        <p className="max-w-2xl mx-auto text-gray-500">
          A brief description about yourself, your expertise, and what drives you. 
          This could be 2-3 sentences that highlight your key strengths and interests.
        </p>
      </header>
      
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-[100px] mb-[100px] last:mb-0">
          {row.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              onClick={() => onProjectClick(project)}
              className="cursor-pointer group w-[150px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-2">
                <h3 className="text-xs uppercase tracking-wider font-medium">{project.title}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid; 