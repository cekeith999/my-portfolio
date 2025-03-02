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
    <div className="max-w-[1800px] mx-auto px-16">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-start gap-16 mb-24 last:mb-0">
          {row.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              onClick={() => onProjectClick(project)}
              className="cursor-pointer group w-[calc(25%-48px)]"
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
              <div className="mt-4">
                <h3 className="text-xs uppercase tracking-wider font-medium">{project.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid; 