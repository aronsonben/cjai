// Default content structure for the CJai website
export const defaultContent = {
  navigation: {
    menuItems: [
      { 
        id: 1, 
        text: "Trax", 
        type: "internal", 
        target: "music" 
      },
      { 
        id: 2, 
        text: "EPK", 
        type: "external", 
        href: "https://cjaiproductions.wixsite.com/cjaiepk" 
      },
      { 
        id: 3, 
        text: "BERi", 
        type: "external", 
        href: "https://erapport.club/", 
        image: "/src/assets/img/cjai_beri.png" 
      },
      { 
        id: 4, 
        text: "Contact", 
        type: "internal", 
        target: "contact" 
      }
    ]
  },
  homeVideo: {
    youtubeUrl: "https://www.youtube.com/embed/6KQjxq8AaS4?si=09-FQ1QodBiTUpM0"
  },
  musicItems: [
    { 
      id: 1, 
      title: "Paradigm Shift (feat. Lixxtheprophet)", 
      cover: "/src/assets/img/songart/cjai_paradigm.jpg", 
      link: "https://distrokid.com/hyperfollow/cjai/paradigm-shift-feat-lixxtheprophet/" 
    },
    { 
      id: 2, 
      title: "Highway", 
      cover: "/src/assets/img/songart/cjai_highway.jpeg", 
      link: "https://linktr.ee/C.jai" 
    },
    { 
      id: 3, 
      title: "Regal", 
      cover: "/src/assets/img/songart/cjai_regal.png", 
      link: "https://linktr.ee/C.jai" 
    }
  ]
};

// Content management functions
export const getContent = () => {
  try {
    const stored = localStorage.getItem('cjai-content');
    return stored ? JSON.parse(stored) : defaultContent;
  } catch (error) {
    console.error('Error loading content from localStorage:', error);
    return defaultContent;
  }
};

export const saveContent = (content) => {
  try {
    localStorage.setItem('cjai-content', JSON.stringify(content));
    return true;
  } catch (error) {
    console.error('Error saving content to localStorage:', error);
    return false;
  }
};

export const resetContent = () => {
  try {
    localStorage.setItem('cjai-content', JSON.stringify(defaultContent));
    return defaultContent;
  } catch (error) {
    console.error('Error resetting content:', error);
    return defaultContent;
  }
};

// Helper function to generate new ID for items
export const generateId = () => {
  return Date.now() + Math.random();
};