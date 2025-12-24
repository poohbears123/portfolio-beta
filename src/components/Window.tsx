import { useState, useRef, useEffect, ReactNode } from 'react';
import { Minus, Square, X } from 'lucide-react';
import type { WindowState } from '../App';

interface WindowProps {
  window: WindowState;
  onClose: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  onUpdatePosition: (position: { x: number; y: number }) => void;
  onUpdateSize: (size: { width: number; height: number }) => void;
  children: ReactNode;
}

export function Window({
  window,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  onUpdatePosition,
  onUpdateSize,
  children,
}: WindowProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isResizing, setIsResizing] = useState(false);
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.window-controls')) return;
    if (window.isMinimized) return;
    onFocus();
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - window.position.x,
      y: e.clientY - window.position.y,
    });
  };

  const handleResizeStart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResizing(true);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: window.size.width,
      height: window.size.height,
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && !window.isMaximized) {
        const newX = e.clientX - dragOffset.x;
        const newY = e.clientY - dragOffset.y;
        
        // Get viewport dimensions (accounting for taskbar)
        const viewportWidth = globalThis.innerWidth;
        const viewportHeight = globalThis.innerHeight;
        const maxX = viewportWidth - 100; // Keep at least 100px visible
        const maxY = viewportHeight - 80; // Account for taskbar (40px) and keep title bar visible
        
        // Constrain position within bounds
        const constrainedX = Math.max(0, Math.min(newX, maxX));
        const constrainedY = Math.max(0, Math.min(newY, maxY));
        
        onUpdatePosition({
          x: constrainedX,
          y: constrainedY,
        });
      }
      if (isResizing) {
        const newWidth = Math.max(400, resizeStart.width + (e.clientX - resizeStart.x));
        const newHeight = Math.max(300, resizeStart.height + (e.clientY - resizeStart.y));
        
        // Get viewport dimensions
        const viewportWidth = globalThis.innerWidth;
        const viewportHeight = globalThis.innerHeight;
        const maxWidth = viewportWidth - window.position.x;
        const maxHeight = viewportHeight - window.position.y - 40; // Account for taskbar
        
        // Constrain size within bounds
        const constrainedWidth = Math.min(newWidth, maxWidth);
        const constrainedHeight = Math.min(newHeight, maxHeight);
        
        onUpdateSize({ width: constrainedWidth, height: constrainedHeight });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, isResizing, dragOffset, window.isMaximized, window.position.x, window.position.y, resizeStart, onUpdatePosition, onUpdateSize]);

  const style = window.isMinimized
    ? {
        left: 0,
        bottom: 40,
        width: '200px',
        height: '8px',
        zIndex: window.zIndex,
      }
    : window.isMaximized
    ? {
        left: 0,
        top: 0,
        width: '100%',
        height: 'calc(100% - 40px)',
        zIndex: window.zIndex,
      }
    : {
        left: window.position.x,
        top: window.position.y,
        width: window.size.width,
        height: window.size.height,
        zIndex: window.zIndex,
      };

  return (
    <div
      ref={windowRef}
      className="absolute rounded-lg overflow-hidden shadow-2xl"
      style={style}
      onMouseDown={onFocus}
    >
      {/* Window border */}
      <div className="absolute inset-0 rounded-lg border border-white/30 pointer-events-none" />
      
      {/* Title bar */}
      <div
        className="h-8 bg-gradient-to-b from-blue-400/90 to-blue-500/90 backdrop-blur-sm border-b border-white/20 flex items-center justify-between px-2 cursor-move select-none"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">{window.icon}</span>
          <span className="text-white text-sm drop-shadow-sm">{window.title}</span>
        </div>
        <div className="flex items-center gap-1 window-controls">
          <button
            onClick={onMaximize}
            className="w-7 h-6 rounded bg-gradient-to-b from-blue-300/80 to-blue-400/80 hover:from-blue-200/80 hover:to-blue-300/80 flex items-center justify-center border border-blue-600/30 shadow-sm"
          >
            <Square className="w-3 h-3 text-gray-700" />
          </button>
          <button
            onClick={onClose}
            className="w-7 h-6 rounded bg-gradient-to-b from-red-400/80 to-red-500/80 hover:from-red-300/80 hover:to-red-400/80 flex items-center justify-center border border-red-700/30 shadow-sm"
          >
            <X className="w-3 h-3 text-white" />
          </button>
        </div>
      </div>

      {/* Window content */}
      <div className="absolute inset-0 top-8 bg-gradient-to-br from-gray-50 to-gray-100 overflow-auto">
        {children}
      </div>

      {/* Resize handle */}
      {!window.isMaximized && (
        <div
          className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
          onMouseDown={handleResizeStart}
        />
      )}
    </div>
  );
}