import { useState } from 'react';
import { User, Folder, Settings, Power, Search } from 'lucide-react';

interface StartMenuProps {
  onOpenWindow: (windowType: string) => void;
  onClose: () => void;
  onShutdown?: () => void;
}

export function StartMenu({ onOpenWindow, onClose }: StartMenuProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems = [
    { id: 'about', label: 'About Me', icon: '👤', description: 'View profile' },
    { id: 'projects', label: 'My Projects', icon: '📁', description: 'Browse projects' },
    { id: 'skills', label: 'Skills', icon: '⚡', description: 'View skills' },
    { id: 'contact', label: 'Contact', icon: '✉️', description: 'Get in touch' },
  ];

  const filteredMenuItems = menuItems.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleItemClick = (id: string) => {
    onOpenWindow(id);
    onClose();
  };

  const handleSystemItemClick = (id: string) => {
    onOpenWindow(id);
    onClose();
  };

  const handleShutdown = () => {
    if (onShutdown) {
      onShutdown();
    } else {
      // Default behavior: close all windows and exit
      window.close();
    }
  };

  return (
    <div className="absolute bottom-10 left-0 w-96 bg-gradient-to-b from-gray-800/95 to-gray-900/95 backdrop-blur-md rounded-t-lg shadow-2xl border border-white/10 overflow-hidden">
      {/* Search box */}
      <div className="p-3 border-b border-white/10">
        <div className="flex items-center gap-2 bg-gray-700/50 rounded px-3 py-2 border border-white/10">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search programs and files"
            className="flex-1 bg-transparent text-white text-sm placeholder-gray-400 outline-none"
          />
        </div>
      </div>

      <div className="flex">
        {/* Left side - User section */}
        <div className="w-14 bg-gradient-to-b from-gray-700/50 to-gray-800/50 border-r border-white/10 p-2">
          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-md">
              <User className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Main menu area */}
        <div className="flex-1">
          {/* Programs list */}
          <div className="p-2">
            <div className="text-xs text-gray-400 px-2 py-1">Programs</div>
            <div className="space-y-1">
              {filteredMenuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-blue-500/20 transition-colors group text-left"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div className="flex-1">
                    <div className="text-white text-sm">{item.label}</div>
                    <div className="text-gray-400 text-xs">{item.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 my-2" />

          {/* System options */}
          <div className="p-2 pb-3">
            <button
              onClick={() => handleSystemItemClick('documents')}
              className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-blue-500/20 transition-colors group text-left"
            >
              <Folder className="w-5 h-5 text-blue-400" />
              <span className="text-white text-sm">Documents</span>
            </button>
            <button
              onClick={() => handleSystemItemClick('settings')}
              className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-blue-500/20 transition-colors group text-left"
            >
              <Settings className="w-5 h-5 text-gray-400" />
              <span className="text-white text-sm">Settings</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border-t border-white/10 p-2 flex justify-end">
        <button
          onClick={handleShutdown}
          className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-red-500/20 transition-colors group"
        >
          <Power className="w-4 h-4 text-red-400" />
          <span className="text-white text-sm">Shut down</span>
        </button>
      </div>
    </div>
  );
}
