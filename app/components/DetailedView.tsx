'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface DetailedViewProps {
  projects: Project[];
  currentIndex: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

const DetailedView = ({ projects, currentIndex, onClose, onIndexChange }: DetailedViewProps) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      onIndexChange((currentIndex + 1) % projects.length);
    } else if (e.key === 'ArrowLeft') {
      onIndexChange((currentIndex - 1 + projects.length) % projects.length);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      onIndexChange((currentIndex + 1) % projects.length);
    } else if (touchEnd - touchStart > 50) {
      // Swipe right
      onIndexChange((currentIndex - 1 + projects.length) % projects.length);
    }
  };

  const currentProject = projects[currentIndex];

  return (
    <div
      className="fixed inset-0 bg-black z-50 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button
        onClick={onClose}
        className="fixed top-8 right-8 z-50 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <motion.div
        key={currentProject.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-full flex items-center justify-center"
      >
        <div className="relative w-full h-full">
          <Image
            src={currentProject.image}
            alt={currentProject.title}
            width={1200}
            height={900}
            className="object-contain"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </motion.div>

      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
        <h2 className="text-white text-2xl font-medium mb-2">{currentProject.title}</h2>
        <p className="text-gray-300">{currentProject.description}</p>
      </div>

      <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
        <button
          onClick={() => onIndexChange((currentIndex - 1 + projects.length) % projects.length)}
          className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      </div>

      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
        <button
          onClick={() => onIndexChange((currentIndex + 1) % projects.length)}
          className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DetailedView; 