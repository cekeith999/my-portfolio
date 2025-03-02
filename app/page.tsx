'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import client components
const ViewSwitcher = dynamic(() => import('./components/ViewSwitcher'), {
  ssr: false
});
const ProjectGrid = dynamic(() => import('./components/ProjectGrid'), {
  ssr: false
});
const DetailedView = dynamic(() => import('./components/DetailedView'), {
  ssr: false
});

// Sample projects data using existing Next.js and Vercel logos
const projects = [
  {
    id: '1',
    title: 'Project One',
    description: 'Detailed description of project one. Add technologies used, your role, and the impact.',
    image: '/next.svg',
    category: 'Web Development'
  },
  {
    id: '2',
    title: 'Project Two',
    description: 'Detailed description of project two. Add technologies used, your role, and the impact.',
    image: '/vercel.svg',
    category: 'Mobile App'
  },
  {
    id: '3',
    title: 'Project Three',
    description: 'Detailed description of project three. Add technologies used, your role, and the impact.',
    image: '/next.svg',
    category: 'Web Development'
  },
  {
    id: '4',
    title: 'Project Four',
    description: 'Detailed description of project four. Add technologies used, your role, and the impact.',
    image: '/vercel.svg',
    category: 'Mobile App'
  },
  {
    id: '5',
    title: 'Project Five',
    description: 'Detailed description of project five. Add technologies used, your role, and the impact.',
    image: '/next.svg',
    category: 'Web Development'
  },
  {
    id: '6',
    title: 'Project Six',
    description: 'Detailed description of project six. Add technologies used, your role, and the impact.',
    image: '/vercel.svg',
    category: 'Mobile App'
  },
  {
    id: '7',
    title: 'Project Seven',
    description: 'Detailed description of project seven. Add technologies used, your role, and the impact.',
    image: '/next.svg',
    category: 'Web Development'
  },
  {
    id: '8',
    title: 'Project Eight',
    description: 'Detailed description of project eight. Add technologies used, your role, and the impact.',
    image: '/vercel.svg',
    category: 'Mobile App'
  }
];

export default function Home() {
  const [viewMode, setViewMode] = useState<'grid' | 'detailed'>('grid');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0);
  const [isDetailedViewOpen, setIsDetailedViewOpen] = useState(false);

  const handleProjectClick = (project: typeof projects[0]) => {
    const index = projects.findIndex(p => p.id === project.id);
    setSelectedProjectIndex(index);
    setIsDetailedViewOpen(true);
  };

  return (
    <main className="min-h-screen bg-white">
      <ViewSwitcher
        currentView={viewMode}
        onViewChange={setViewMode}
      />

      <AnimatePresence>
        {!isDetailedViewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24"
          >
            <ProjectGrid
              projects={projects}
              onProjectClick={handleProjectClick}
            />
          </motion.div>
        )}

        {isDetailedViewOpen && (
          <DetailedView
            projects={projects}
            currentIndex={selectedProjectIndex}
            onClose={() => setIsDetailedViewOpen(false)}
            onIndexChange={setSelectedProjectIndex}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
