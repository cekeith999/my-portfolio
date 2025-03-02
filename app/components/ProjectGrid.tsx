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
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          layoutId={`project-${project.id}`}
          onClick={() => onProjectClick(project)}
          className="cursor-pointer group"
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
          <div className="mt-4 space-y-2">
            <h3 className="text-sm font-medium">{project.title}</h3>
            <p className="text-xs text-gray-500">{project.category}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGrid; 