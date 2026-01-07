import { useState } from 'react';
import { Desktop } from './components/Desktop';
import { Taskbar } from './components/Taskbar';
import { Window } from './components/Window';
import { AboutContent } from './components/AboutContent';
import { ProjectsContent } from './components/ProjectsContent';
import { SkillsContent } from './components/SkillsContent';
import { ContactContent } from './components/ContactContent';
import { DocumentContent } from './components/DocumentContent';
import { SettingsContent } from './components/SettingsContent';

export interface WindowState {
  id: string;
  title: string;
  icon: string;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
  content: string;
}

export default function App() {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [nextZIndex, setNextZIndex] = useState(2);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const openWindow = (windowType: string) => {
    const existingWindow = windows.find((w) => w.content === windowType);
    if (existingWindow) {
      if (existingWindow.isMinimized) {
        updateWindow(existingWindow.id, { isMinimized: false });
      }
      bringToFront(existingWindow.id);
      return;
    }

    const windowConfigs: Record<string, Partial<WindowState>> = {
      about: {
        title: 'About Me',
        icon: '👤',
        position: { x: 100, y: 80 },
        size: { width: 600, height: 400 },
      },
      projects: {
        title: 'My Projects',
        icon: '📁',
        position: { x: 150, y: 120 },
        size: { width: 700, height: 500 },
      },
      skills: {
        title: 'Skills',
        icon: '⚡',
        position: { x: 200, y: 100 },
        size: { width: 500, height: 450 },
      },
      contact: {
        title: 'Contact',
        icon: '✉️',
        position: { x: 250, y: 140 },
        size: { width: 500, height: 400 },
      },
      documents: {
        title: 'Documents',
        icon: '📄',
        position: { x: 300, y: 160 },
        size: { width: 600, height: 500 },
      },
      settings: {
        title: 'Settings',
        icon: '⚙️',
        position: { x: 350, y: 180 },
        size: { width: 500, height: 400 },
      },
    };

    const config = windowConfigs[windowType];
    if (config) {
      const newWindow: WindowState = {
        id: windowType,
        content: windowType,
        isMinimized: false,
        isMaximized: false,
        zIndex: nextZIndex,
        ...config,
      } as WindowState;

      setWindows([...windows, newWindow]);
      setNextZIndex(nextZIndex + 1);
    }
  };

  const closeWindow = (id: string) => {
    setWindows(windows.filter((w) => w.id !== id));
  };

  const updateWindow = (id: string, updates: Partial<WindowState>) => {
    setWindows(windows.map((w) => (w.id === id ? { ...w, ...updates } : w)));
  };

  const bringToFront = (id: string) => {
    setWindows(
      windows.map((w) =>
        w.id === id ? { ...w, zIndex: nextZIndex } : w
      )
    );
    setNextZIndex(nextZIndex + 1);
  };

  const getWindowContent = (contentType: string) => {
    switch (contentType) {
      case 'about':
        return <AboutContent />;
      case 'projects':
        return <ProjectsContent />;
      case 'skills':
        return <SkillsContent />;
      case 'contact':
        return <ContactContent />;
      case 'documents':
        return <DocumentContent />;
      case 'settings':
        return <SettingsContent isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} />;
      default:
        return null;
    }
  };

  return (
    <div className={`fixed inset-0 overflow-hidden bg-gradient-to-br from-sky-400 via-blue-500 to-blue-600 ${isDarkMode ? 'dark' : ''}`}>
      <Desktop onOpenWindow={openWindow} />
      
      {windows.map((window) => (
        <Window
          key={window.id}
          window={window}
          onClose={() => closeWindow(window.id)}
          onMinimize={() => updateWindow(window.id, { isMinimized: !window.isMinimized })}
          onMaximize={() =>
            updateWindow(window.id, {
              isMaximized: !window.isMaximized,
            })
          }
          onFocus={() => bringToFront(window.id)}
          onUpdatePosition={(position) => updateWindow(window.id, { position })}
          onUpdateSize={(size) => updateWindow(window.id, { size })}
        >
          {getWindowContent(window.content)}
        </Window>
      ))}

      <Taskbar
        windows={windows}
        onWindowClick={(id) => {
          const window = windows.find((w) => w.id === id);
          if (window?.isMinimized) {
            updateWindow(id, { isMinimized: false });
          }
          bringToFront(id);
        }}
        onOpenWindow={openWindow}
      />
    </div>
  );
}