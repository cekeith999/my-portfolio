'use client';

type ViewMode = 'grid' | 'list';

interface ViewSwitcherProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

const ViewSwitcher = ({ currentView, onViewChange }: ViewSwitcherProps) => {
  return (
    <div className="fixed right-8 top-8 z-50 flex gap-4 bg-black/20 backdrop-blur-sm p-2 rounded-full">
      <button
        onClick={() => onViewChange('grid')}
        className={`p-2 rounded-full transition-colors ${
          currentView === 'grid' ? 'bg-white text-black' : 'text-white'
        }`}
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
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      </button>
      <button
        onClick={() => onViewChange('list')}
        className={`p-2 rounded-full transition-colors ${
          currentView === 'list' ? 'bg-white text-black' : 'text-white'
        }`}
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
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </div>
  );
};

export default ViewSwitcher; 