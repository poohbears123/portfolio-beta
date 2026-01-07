import { useState, useRef, useEffect } from 'react';

interface DesktopProps {
  onOpenWindow: (windowType: string) => void;
}

interface IconPosition {
  x: number;
  y: number;
}

export function Desktop({ onOpenWindow }: DesktopProps) {
  const icons = [
    { id: 'about', label: 'About Me', icon: '👤' },
    { id: 'projects', label: 'My Projects', icon: '📁' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'contact', label: 'Contact', icon: '✉️' },
    { id: 'documents', label: 'Documents', icon: '📄' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  const [iconPositions, setIconPositions] = useState<Record<string, IconPosition>>({
    about: { x: 16, y: 16 },
    projects: { x: 16, y: 120 },
    skills: { x: 16, y: 224 },
    contact: { x: 16, y: 328 },
    documents: { x: 16, y: 432 },
    settings: { x: 16, y: 536 },
  });

  const [draggingIcon, setDraggingIcon] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [clickTime, setClickTime] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const clickTimeoutRef = useRef<number>();

  const handleMouseDown = (e: React.MouseEvent, iconId: string) => {
    const now = Date.now();
    const timeSinceLastClick = now - clickTime;

    // Track clicks for double-click detection
    if (timeSinceLastClick < 300) {
      setClickCount(clickCount + 1);
      if (clickCount + 1 === 2) {
        // Double click
        onOpenWindow(iconId);
        setClickCount(0);
        return;
      }
    } else {
      setClickCount(1);
    }
    setClickTime(now);

    // Clear previous timeout
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }

    // Set timeout to reset click count
    clickTimeoutRef.current = window.setTimeout(() => {
      setClickCount(0);
    }, 300);

    // Start dragging
    const position = iconPositions[iconId];
    setDraggingIcon(iconId);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (draggingIcon) {
        setIconPositions((prev) => ({
          ...prev,
          [draggingIcon]: {
            x: e.clientX - dragOffset.x,
            y: e.clientY - dragOffset.y,
          },
        }));
      }
    };

    const handleMouseUp = () => {
      setDraggingIcon(null);
    };

    if (draggingIcon) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [draggingIcon, dragOffset]);

  return (
    <div className="absolute inset-0 select-none">
      {icons.map((icon) => (
        <button
          key={icon.id}
          onMouseDown={(e) => handleMouseDown(e, icon.id)}
          className="absolute flex flex-col items-center gap-1 p-2 rounded hover:bg-white/20 transition-colors group cursor-default w-24"
          style={{
            left: iconPositions[icon.id].x,
            top: iconPositions[icon.id].y,
            cursor: draggingIcon === icon.id ? 'grabbing' : 'grab',
          }}
        >
          <div className="text-5xl drop-shadow-lg pointer-events-none">{icon.icon}</div>
          <span className="text-white dark:text-gray-200 text-xs text-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] px-1 py-0.5 rounded group-hover:bg-blue-600/50 pointer-events-none">
            {icon.label}
          </span>
        </button>
      ))}
    </div>
  );
}