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

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  dominantColor?: string;
  secondaryColor?: string;
}

// Sample projects data with image paths
const projects: Project[] = [
  {
    id: '1',
    title: 'Football Mask',
    description: 'A unique mask design inspired by football aesthetics, combining sports elements with artistic expression.',
    image: '/images/mask-football-1.jpg',
    category: 'Mask Design',
    dominantColor: '#8B4513',
    secondaryColor: '#D2691E'
  },
  {
    id: '2',
    title: 'Duck Slide Shoe',
    description: 'Innovative shoe design with playful elements, merging pop art with functional footwear.',
    image: '/images/shoe-duckslide-1.jpg',
    category: 'Footwear Design',
    dominantColor: '#FFD700',
    secondaryColor: '#FF8C00'
  },
  {
    id: '3',
    title: 'USC Shades',
    description: 'Eyewear design that incorporates university spirit, creating a bold and unique aesthetic.',
    image: '/images/glasses-uscshades-1.jpg',
    category: 'Eyewear Design',
    dominantColor: '#8B0000',
    secondaryColor: '#DAA520'
  },
  {
    id: '4',
    title: 'Snake Earring',
    description: 'Detailed accessory design featuring serpentine motifs, blending nature with contemporary style.',
    image: '/images/accessory-snakeearring-1.jpg',
    category: 'Accessory Design',
    dominantColor: '#2F4F4F',
    secondaryColor: '#808080'
  },
  {
    id: '5',
    title: 'Fallen Blanket Mask',
    description: 'Experimental mask design incorporating textile elements, exploring the intersection of comfort and protection.',
    image: '/images/mask-fallenblanket-1.jpg',
    category: 'Mask Design',
    dominantColor: '#4B0082',
    secondaryColor: '#800080'
  },
  {
    id: '6',
    title: 'Liquid Effect Mask',
    description: 'Mask design with fluid aesthetics, creating an illusion of liquid movement in solid form.',
    image: '/images/mask-liquidy-1.jpg',
    category: 'Mask Design',
    dominantColor: '#00CED1',
    secondaryColor: '#4169E1'
  },
  {
    id: '7',
    title: 'Comic Style Mask',
    description: 'Mask design influenced by comic art, bringing illustrated aesthetics into three-dimensional form.',
    image: '/images/mask-comicstyle-1.jpg',
    category: 'Mask Design',
    dominantColor: '#DC143C',
    secondaryColor: '#FF4500'
  },
  {
    id: '8',
    title: 'Concrete Mask',
    description: 'Industrial-inspired mask design that explores the aesthetic potential of architectural materials.',
    image: '/images/mask-concrete-1.jpg',
    category: 'Mask Design',
    dominantColor: '#696969',
    secondaryColor: '#A9A9A9'
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
    <main className="min-h-screen bg-white relative">
      <div className="page-overlay" />
      
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
            className="pt-32 relative z-10"
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
            className="pt-32 relative z-10"
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
