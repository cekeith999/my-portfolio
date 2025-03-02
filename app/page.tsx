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
const ProjectList = dynamic(() => import('./components/ProjectList'), {
  ssr: false
});
const DetailedView = dynamic(() => import('./components/DetailedView'), {
  ssr: false
});

// Sample projects data with image paths
const projects = [
  {
    id: '1',
    title: 'Football Mask',
    description: 'A unique mask design inspired by football aesthetics, combining sports elements with artistic expression.',
    image: '/images/mask-football-1.jpg',
    category: 'Mask Design'
  },
  {
    id: '2',
    title: 'Comic Style Shoe',
    description: 'Innovative shoe design with comic-inspired elements, merging pop art with functional footwear.',
    image: '/images/shoe-comicstyle-1.jpg',
    category: 'Footwear Design'
  },
  {
    id: '3',
    title: 'Comic Style Glasses',
    description: 'Eyewear design that incorporates comic art elements, creating a bold and unique aesthetic.',
    image: '/images/glasses-comicstyle-1.jpg',
    category: 'Eyewear Design'
  },
  {
    id: '4',
    title: 'Snake Earring',
    description: 'Detailed accessory design featuring serpentine motifs, blending nature with contemporary style.',
    image: '/images/accessory-snake earring-1.jpg',
    category: 'Accessory Design'
  },
  {
    id: '5',
    title: 'Fallen Blanket Mask',
    description: 'Experimental mask design incorporating textile elements, exploring the intersection of comfort and protection.',
    image: '/images/mask-fallen blanket-1.jpg',
    category: 'Mask Design'
  },
  {
    id: '6',
    title: 'Liquid Effect Mask',
    description: 'Mask design with fluid aesthetics, creating an illusion of liquid movement in solid form.',
    image: '/images/mask-liquidy-1.jpg',
    category: 'Mask Design'
  },
  {
    id: '7',
    title: 'Comic Style Mask',
    description: 'Mask design influenced by comic art, bringing illustrated aesthetics into three-dimensional form.',
    image: '/images/mask-comicstyle-1.jpg',
    category: 'Mask Design'
  },
  {
    id: '8',
    title: 'Concrete Mask',
    description: 'Industrial-inspired mask design that explores the aesthetic potential of architectural materials.',
    image: '/images/mask-concrete-1.jpg',
    category: 'Mask Design'
  }
];

export default function Home() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
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

      <AnimatePresence mode="wait">
        {!isDetailedViewOpen && viewMode === 'grid' && (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32"
          >
            <ProjectGrid
              projects={projects}
              onProjectClick={handleProjectClick}
            />
          </motion.div>
        )}

        {!isDetailedViewOpen && viewMode === 'list' && (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32"
          >
            <ProjectList
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
