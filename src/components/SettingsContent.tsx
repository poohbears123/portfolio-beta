import { useState, useEffect } from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';

interface SettingsContentProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export function SettingsContent({ isDarkMode, onToggleDarkMode }: SettingsContentProps) {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(isDarkMode ? 'dark' : 'light');

  // Update local theme state when isDarkMode prop changes
  useEffect(() => {
    setTheme(isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    if (newTheme === 'dark' && !isDarkMode) {
      onToggleDarkMode();
    } else if (newTheme === 'light' && isDarkMode) {
      onToggleDarkMode();
    }
    // For 'system', we could implement system preference detection later
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Settings</h1>

      {/* Theme Settings */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Appearance</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleThemeChange('light')}
                className={`flex flex-col items-center p-4 rounded-lg border-2 transition-colors ${
                  theme === 'light' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Sun className="w-6 h-6 text-yellow-500 mb-2" />
                <span className="text-sm font-medium">Light</span>
              </button>

              <button
                onClick={() => handleThemeChange('dark')}
                className={`flex flex-col items-center p-4 rounded-lg border-2 transition-colors ${
                  theme === 'dark' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Moon className="w-6 h-6 text-blue-500 mb-2" />
                <span className="text-sm font-medium">Dark</span>
              </button>

              <button
                onClick={() => handleThemeChange('system')}
                className={`flex flex-col items-center p-4 rounded-lg border-2 transition-colors ${
                  theme === 'system' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Monitor className="w-6 h-6 text-gray-500 mb-2" />
                <span className="text-sm font-medium">System</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Other Settings Placeholders */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">System</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
            <span className="text-gray-700">Notifications</span>
            <div className="w-10 h-5 bg-gray-300 rounded-full relative">
              <div className="w-4 h-4 bg-white rounded-full absolute left-0.5 top-0.5"></div>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
            <span className="text-gray-700">Sound</span>
            <div className="w-10 h-5 bg-gray-300 rounded-full relative">
              <div className="w-4 h-4 bg-white rounded-full absolute left-0.5 top-0.5"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-4">
        <p className="text-blue-800">
          <strong>Note:</strong> Additional settings are under development and will be available in future updates.
        </p>
      </div>
    </div>
  );
}
