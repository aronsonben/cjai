// Dynamic image management system for user uploads and built-in assets
import beriLogo from '../assets/img/cjai_beri.png'
import paradigmCover from '../assets/img/songart/cjai_paradigm.jpg'
import highwayCover from '../assets/img/songart/cjai_highway.jpeg'
import regalCover from '../assets/img/songart/cjai_regal.png'
import keysCover from '../assets/img/songart/cjai_keys.png'

// Built-in images that are bundled with the app
const builtInImages = {
  'cjai_beri': beriLogo,
  'cjai_paradigm': paradigmCover,
  'cjai_highway': highwayCover,
  'cjai_regal': regalCover,
  'cjai_keys': keysCover,
}

// LocalStorage key for user uploaded images
const UPLOADED_IMAGES_KEY = 'cjai-uploaded-images'

// Image upload and management functions
export const uploadImage = (file, name) => {
  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith('image/')) {
      reject(new Error('Please select a valid image file'))
      return
    }

    // Validate file size (5MB limit)
    const maxSize = 5 * 1024 * 1024 // 5MB
    if (file.size > maxSize) {
      reject(new Error('Image must be smaller than 5MB'))
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const imageData = {
          name: name || file.name.replace(/\.[^/.]+$/, ""), // Remove extension
          data: e.target.result, // Base64 data URL
          uploadedAt: new Date().toISOString(),
          size: file.size,
          type: file.type
        }

        // Save to localStorage
        const existingImages = getUploadedImages()
        existingImages[imageData.name] = imageData
        localStorage.setItem(UPLOADED_IMAGES_KEY, JSON.stringify(existingImages))
        
        resolve(imageData)
      } catch (error) {
        reject(new Error('Failed to process image'))
      }
    }
    reader.onerror = () => reject(new Error('Failed to read file'))
    reader.readAsDataURL(file)
  })
}

// Get all uploaded images from localStorage
export const getUploadedImages = () => {
  try {
    const stored = localStorage.getItem(UPLOADED_IMAGES_KEY)
    return stored ? JSON.parse(stored) : {}
  } catch (error) {
    console.error('Error loading uploaded images:', error)
    return {}
  }
}

// Delete an uploaded image
export const deleteUploadedImage = (imageName) => {
  try {
    const uploadedImages = getUploadedImages()
    delete uploadedImages[imageName]
    localStorage.setItem(UPLOADED_IMAGES_KEY, JSON.stringify(uploadedImages))
    return true
  } catch (error) {
    console.error('Error deleting image:', error)
    return false
  }
}

// Get image by key (supports both built-in and uploaded images)
export const getImage = (imageKey) => {
  // console.log("GET IMAGE", imageKey, "Found? ", builtInImages[imageKey]);
  if (!imageKey) return null
  
  // Check built-in images first
  if (builtInImages[imageKey]) {
    return builtInImages[imageKey]
  }
  
  // Check uploaded images
  const uploadedImages = getUploadedImages()
  if (uploadedImages[imageKey]) {
    return uploadedImages[imageKey].data // Return base64 data URL
  }
  
  return null
}

// Get all available image keys (built-in + uploaded)
export const getAvailableImageKeys = () => {
  const builtInKeys = Object.keys(builtInImages)
  const uploadedKeys = Object.keys(getUploadedImages())
  return [...builtInKeys, ...uploadedKeys]
}

// Get image info (useful for admin interface)
export const getImageInfo = (imageKey) => {
  if (builtInImages[imageKey]) {
    return {
      key: imageKey,
      type: 'built-in',
      src: builtInImages[imageKey]
    }
  }
  
  const uploadedImages = getUploadedImages()
  if (uploadedImages[imageKey]) {
    return {
      key: imageKey,
      type: 'uploaded',
      ...uploadedImages[imageKey]
    }
  }
  
  return null
}

// Check if image key exists
export const imageExists = (imageKey) => {
  return getImage(imageKey) !== null
}

// Validate image key name
export const validateImageKey = (key) => {
  if (!key || typeof key !== 'string') {
    return { valid: false, error: 'Image key must be a non-empty string' }
  }
  
  if (key.length < 1 || key.length > 50) {
    return { valid: false, error: 'Image key must be 1-50 characters long' }
  }
  
  if (!/^[a-zA-Z0-9_-]+$/.test(key)) {
    return { valid: false, error: 'Image key can only contain letters, numbers, underscores, and hyphens' }
  }
  
  return { valid: true }
}

// Favicon management functions
export const updateFavicon = (imageKey) => {
  try {
    // Remove existing favicon links
    const existingFavicons = document.querySelectorAll('link[rel*="icon"]')
    existingFavicons.forEach(link => link.remove())

    if (!imageKey) {
      // Reset to default favicon if no imageKey provided
      return true
    }

    const imageUrl = getImage(imageKey)
    if (!imageUrl) {
      console.error('Favicon image not found:', imageKey)
      return false
    }

    // Create new favicon link element
    const faviconLink = document.createElement('link')
    faviconLink.rel = 'icon'
    faviconLink.type = 'image/x-icon'
    faviconLink.href = imageUrl

    // Add the favicon to the document head
    document.head.appendChild(faviconLink)
    
    // Also add a shortcut icon for better browser compatibility
    const shortcutLink = document.createElement('link')
    shortcutLink.rel = 'shortcut icon'
    shortcutLink.href = imageUrl
    document.head.appendChild(shortcutLink)

    return true
  } catch (error) {
    console.error('Error updating favicon:', error)
    return false
  }
}

// Get current favicon image key from content
export const getCurrentFaviconKey = () => {
  try {
    const content = JSON.parse(localStorage.getItem('cjai-content') || '{}')
    return content.favicon?.imageKey || null
  } catch (error) {
    console.error('Error getting current favicon key:', error)
    return null
  }
}