import { Clock } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import type { WindowState } from '../App';
import { StartMenu } from './StartMenu';

interface TaskbarProps {
  windows: WindowState[];
  onWindowClick: (id: string) => void;
  onOpenWindow: (windowType: string) => void;
}

export function Taskbar({ windows, onWindowClick, onOpenWindow }: TaskbarProps) {
  const [time, setTime] = useState(new Date());
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const startMenuRef = useRef<HTMLDivElement>(null);
  const [draggedWindow, setDraggedWindow] = useState<string | null>(null);
  const [windowOrder, setWindowOrder] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  // Update window order when windows change
  useEffect(() => {
    const newIds = windows.map(w => w.id);
    const removedIds = windowOrder.filter(id => !newIds.includes(id));
    const addedIds = newIds.filter(id => !windowOrder.includes(id));
    
    if (removedIds.length > 0 || addedIds.length > 0) {
      setWindowOrder(prev => {
        // Remove closed windows
        let updated = prev.filter(id => newIds.includes(id));
        // Add new windows at the end
        updated = [...updated, ...addedIds];
        return updated;
      });
    }
  }, [windows]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (startMenuRef.current && !startMenuRef.current.contains(event.target as Node)) {
        setIsStartMenuOpen(false);
      }
    };

    if (isStartMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isStartMenuOpen]);

  const handleDragStart = (e: React.DragEvent, windowId: string) => {
    setDraggedWindow(windowId);
    e.dataTransfer.effectAllowed = 'move';
    setIsDragging(true);
  };

  const handleDragOver = (e: React.DragEvent, windowId: string) => {
    e.preventDefault();
    if (!draggedWindow || draggedWindow === windowId) return;

    const newOrder = [...windowOrder];
    const draggedIndex = newOrder.indexOf(draggedWindow);
    const targetIndex = newOrder.indexOf(windowId);

    if (draggedIndex !== -1 && targetIndex !== -1) {
      newOrder.splice(draggedIndex, 1);
      newOrder.splice(targetIndex, 0, draggedWindow);
      setWindowOrder(newOrder);
    }
  };

  const handleDragEnd = () => {
    setDraggedWindow(null);
    setIsDragging(false);
  };

  const handleWindowClick = (e: React.MouseEvent, windowId: string) => {
    // Only trigger click if not currently in a drag operation
    if (!isDragging) {
      onWindowClick(windowId);
    }
  };

  // Sort windows based on windowOrder
  const sortedWindows = [...windows].sort((a, b) => {
    const aIndex = windowOrder.indexOf(a.id);
    const bIndex = windowOrder.indexOf(b.id);
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });

  return (
    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-gray-800/90 to-gray-900/95 backdrop-blur-sm border-t border-white/10 flex items-center px-2 gap-2 shadow-2xl">
      {/* Start menu */}
      <div ref={startMenuRef}>
        {isStartMenuOpen && (
          <StartMenu
            onOpenWindow={onOpenWindow}
            onClose={() => setIsStartMenuOpen(false)}
          />
        )}
      </div>

      {/* Start button */}
      <button
        onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
        className={`h-8 px-3 rounded shadow-md flex items-center gap-2 border transition-all ${
          isStartMenuOpen
            ? 'bg-gradient-to-b from-green-600 to-green-700 border-green-800/50'
            : 'bg-gradient-to-b from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 border-green-700/50'
        }`}
      >
        <div className="w-5 h-5 bg-white/90 rounded-sm flex items-center justify-center">
          <div className="w-3 h-3 border-2 border-blue-600 rounded-sm" />
        </div>
        <span className="text-white text-sm">Start</span>
      </button>

      {/* Window buttons */}
      <div className="flex-1 flex items-center gap-1">
        {sortedWindows.map((window) => (
          <button
            key={window.id}
            draggable
            onDragStart={(e) => handleDragStart(e, window.id)}
            onDragOver={(e) => handleDragOver(e, window.id)}
            onDragEnd={handleDragEnd}
            onClick={(e) => handleWindowClick(e, window.id)}
            className={`h-8 px-3 rounded flex items-center gap-2 transition-colors max-w-[200px] cursor-move ${
              window.isMinimized
                ? 'bg-gray-700/50 hover:bg-gray-600/50'
                : 'bg-gradient-to-b from-blue-400/80 to-blue-500/80 border border-blue-600/50 shadow-md'
            } ${draggedWindow === window.id ? 'opacity-50' : ''}`}
          >
            <span className="text-base">{window.icon}</span>
            <span className="text-white text-sm truncate">{window.title}</span>
          </button>
        ))}
      </div>

      {/* System tray */}
      <div className="flex items-center gap-3 px-3 h-8 bg-blue-500/20 rounded border border-white/10">
        <Clock className="w-4 h-4 text-white/90" />
        <span className="text-white text-sm">
          {time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
}