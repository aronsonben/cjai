import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useAdmin } from "../hooks/useAdmin";
import { getContent, saveContent, resetContent, generateId } from "../data/content";
import { 
  X, 
  Plus, 
  Trash2, 
  Download, 
  Upload, 
  Eye, 
  EyeOff, 
  LogOut, 
  Save,
  RotateCcw,
  Home
} from "lucide-react";
import textured from '../assets/textured_bkg_green.png';

// Login Component
const AdminLogin = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    const result = onLogin(password);
    if (!result.success) {
      setError(result.error);
      setPassword('');
    }
    setIsLoading(false);
  };

  return (
    <div 
      className="min-h-screen bg-gray-50 flex items-center justify-center p-4"
      style={{
        backgroundImage: `url("${textured}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
      >
      <motion.div
        id="admin-signin-card"
        className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">CJai Admin</h1>
          <p className="text-gray-600">Enter your password to access the admin panel</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter admin password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-md">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || !password.trim()}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

// Menu Items Editor Component
const MenuItemsEditor = ({ content, setContent }) => {
  const addMenuItem = () => {
    const newItem = {
      id: generateId(),
      text: "New Item",
      type: "external",
      href: "https://example.com"
    };
    setContent({
      ...content,
      navigation: {
        ...content.navigation,
        menuItems: [...content.navigation.menuItems, newItem]
      }
    });
  };

  const updateMenuItem = (id, field, value) => {
    setContent({
      ...content,
      navigation: {
        ...content.navigation,
        menuItems: content.navigation.menuItems.map(item =>
          item.id === id ? { ...item, [field]: value } : item
        )
      }
    });
  };

  const removeMenuItem = (id) => {
    if (confirm('Are you sure you want to remove this menu item?')) {
      setContent({
        ...content,
        navigation: {
          ...content.navigation,
          menuItems: content.navigation.menuItems.filter(item => item.id !== id)
        }
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h3 className="text-xl font-semibold text-gray-800">Menu Items</h3>
        <button
          onClick={addMenuItem}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Plus size={18} />
          Add Item
        </button>
      </div>
      
      <div className="space-y-4 font-sans">
        {content.navigation.menuItems.map((item, index) => (
          <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm font-medium text-gray-500">Item #{index + 1}</span>
              <button
                onClick={() => removeMenuItem(item.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Menu Text
                </label>
                <input
                  type="text"
                  value={item.text}
                  onChange={(e) => updateMenuItem(item.id, 'text', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Menu item text"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Link Type
                </label>
                <select
                  value={item.type}
                  onChange={(e) => updateMenuItem(item.id, 'type', e.target.value)}
                  className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="external">External Link</option>
                  <option value="internal">Internal Page</option>
                </select>
              </div>
              
              {item.type === 'external' ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    URL
                  </label>
                  <input
                    type="url"
                    value={item.href || ''}
                    onChange={(e) => updateMenuItem(item.id, 'href', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    placeholder="https://example.com"
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Page
                  </label>
                  <select
                    value={item.target || ''}
                    onChange={(e) => updateMenuItem(item.id, 'target', e.target.value)}
                    className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="music">Music Page</option>
                    <option value="contact">Contact Page</option>
                    <option value="epk">EPK Page</option>
                  </select>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Video Editor Component
const VideoEditor = ({ content, setContent }) => {
  return (
    <div className="space-y-6 font-sans">
      <h3 className="text-xl font-semibold text-gray-800">Home Page Video</h3>
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              YouTube Embed URL
            </label>
            <input
              type="url"
              value={content.homeVideo.youtubeUrl}
              onChange={(e) => setContent({
                ...content,
                homeVideo: { youtubeUrl: e.target.value }
              })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="https://www.youtube.com/embed/..."
            />
            <p className="text-sm text-gray-600 mt-2">
              💡 Use the embed URL format (youtube.com/embed/...), not the regular YouTube URL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Music Items Editor Component
const MusicItemsEditor = ({ content, setContent }) => {
  const addMusicItem = () => {
    const newItem = {
      id: generateId(),
      title: "New Song",
      cover: "/src/assets/img/songart/cjai_paradigm.jpg",
      link: "https://example.com"
    };
    setContent({
      ...content,
      musicItems: [...content.musicItems, newItem]
    });
  };

  const updateMusicItem = (id, field, value) => {
    setContent({
      ...content,
      musicItems: content.musicItems.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    });
  };

  const removeMusicItem = (id) => {
    if (confirm('Are you sure you want to remove this music item?')) {
      setContent({
        ...content,
        musicItems: content.musicItems.filter(item => item.id !== id)
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h3 className="text-xl font-semibold text-gray-800">Music Items</h3>
        <button
          onClick={addMusicItem}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Plus size={18} />
          Add Song
        </button>
      </div>
      
      <div className="space-y-4 font-sans">
        {content.musicItems.map((item, index) => (
          <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm font-medium text-gray-500">Song #{index + 1}</span>
              <button
                onClick={() => removeMusicItem(item.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Song Title
                </label>
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => updateMusicItem(item.id, 'title', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Song title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Image Path
                </label>
                <input
                  type="text"
                  value={item.cover}
                  onChange={(e) => updateMusicItem(item.id, 'cover', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="/src/assets/img/songart/song.jpg"
                />
                <p className="text-sm text-gray-600 mt-2">
                  💡 Use the path to images in the assets/img/songart folder
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Link URL
                </label>
                <input
                  type="url"
                  value={item.link}
                  onChange={(e) => updateMusicItem(item.id, 'link', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="https://spotify.com/..."
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Admin Component
export default function Admin({ onBack }) {
  const { isAdmin, isLoading, login, logout } = useAdmin();
  const [content, setContent] = useState(getContent());
  const [activeTab, setActiveTab] = useState('menu');
  const [hasChanges, setHasChanges] = useState(false);
  const [saveStatus, setSaveStatus] = useState('');

  // Track changes
  useEffect(() => {
    const currentContent = getContent();
    setHasChanges(JSON.stringify(content) !== JSON.stringify(currentContent));
  }, [content]);

  const handleSave = () => {
    const success = saveContent(content);
    if (success) {
      setSaveStatus('✅ Changes saved successfully!');
      setHasChanges(false);
    } else {
      setSaveStatus('❌ Error saving changes');
    }
    setTimeout(() => setSaveStatus(''), 3000);
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(content, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `cjai-content-backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedContent = JSON.parse(e.target.result);
          setContent(importedContent);
          setSaveStatus('📁 Content imported successfully! Don\'t forget to save.');
          setTimeout(() => setSaveStatus(''), 5000);
        } catch (error) {
          setSaveStatus('❌ Error importing file. Please check the file format.');
          setTimeout(() => setSaveStatus(''), 3000);
        }
      };
      reader.readAsText(file);
    }
    // Reset the input
    event.target.value = '';
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all content to defaults? This cannot be undone.')) {
      const defaultContent = resetContent();
      setContent(defaultContent);
      setSaveStatus('🔄 Content reset to defaults');
      setTimeout(() => setSaveStatus(''), 3000);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return <AdminLogin onLogin={login} />;
  }

  const tabs = [
    { id: 'menu', label: 'Menu Items', component: MenuItemsEditor },
    { id: 'video', label: 'Home Video', component: VideoEditor },
    { id: 'music', label: 'Music Items', component: MusicItemsEditor }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

  return (
    <div 
      id="admin-panel" 
      className="min-h-screen bg-gray-50" 
      style={{
        backgroundImage: `url("${textured}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b rounded-lg max-w-7xl mx-auto px-4 py-4  overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-bold text-gray-900">CJai Admin Panel</h2>
              {hasChanges && (
                <span className="text-sm text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                  Unsaved changes
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={onBack}
                className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <Home size={18} />
                <span className="hidden sm:inline">Back to Site</span>
              </button>
              
              <button
                onClick={logout}
                className="flex items-center gap-2 px-3 py-2 text-red-600 hover:text-red-800 transition-colors"
              >
                <LogOut size={18} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Message */}
        {saveStatus && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-blue-50 text-blue-800 rounded-lg"
          >
            {saveStatus}
          </motion.div>
        )}

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-b-2 border-blue-500 text-blue-600'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {ActiveComponent && (
              <ActiveComponent content={content} setContent={setContent} />
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleExport}
                className="flex items-center gap-2 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Download size={18} />
                Export Backup
              </button>
              
              <label className="flex items-center gap-2 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                <Upload size={18} />
                Import Backup
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImport}
                  className="hidden"
                />
              </label>
              
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-colors"
              >
                <RotateCcw size={18} />
                Reset to Defaults
              </button>
            </div>
            
            <button
              onClick={handleSave}
              disabled={!hasChanges}
              className="flex items-center justify-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Save size={18} />
              {hasChanges ? 'Save Changes' : 'No Changes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}