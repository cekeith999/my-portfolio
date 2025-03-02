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
    <div className="max-w-7xl mx-auto px-4">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-between gap-8 mb-8 last:mb-0">
          {row.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              onClick={() => onProjectClick(project)}
              className="cursor-pointer group w-1/4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 space-y-1">
                <h3 className="text-sm font-medium">{project.title}</h3>
                <p className="text-xs text-gray-500">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid; 