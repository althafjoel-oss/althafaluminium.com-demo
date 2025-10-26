# Image Update Guide for Althaf Aluminium Website

## Overview
All old photos have been replaced with professional stock photos of aluminum partitions, glass works, and modern office spaces. Placeholder spots have been created in the Portfolio section where you can add your own images.

## Current Image Status

### ✅ Replaced with Professional Stock Photos:
1. **Hero Section** - Modern office interior with blue accents
2. **About Section** - Modern office atrium image
3. **Services Section** (4 images):
   - Aluminum Partitions - Commercial interior space
   - False Ceiling - Ceiling installation work
   - Glass Partitions - Glass ceiling/partition structure
   - Office Cabin - Modern office cabin design

### 📍 Placeholder Spots for Your Images:
- **PortfolioShowcase Component**: 8 placeholder spots (items #5, 6, 11, 12, 14, 15, 17, 18)
- **Portfolio Page (Parallax Scroll)**: 20 placeholder spots at the bottom of the gallery

## How to Add Your Own Images

### Option 1: Using Image URLs (Recommended for Quick Updates)

1. Open the file: `/app/frontend/src/components/PortfolioShowcase.tsx`
2. Find the placeholder images (they show "Your Image Here")
3. Replace `placeholderImage` with your image URL:

```typescript
// Example - Replace this:
image: placeholderImage,

// With your image URL:
image: "https://your-image-url.com/photo.jpg",
```

### Option 2: Using Local Image Files

1. **Add your images to the assets folder:**
   - Place your images in: `/app/frontend/src/assets/`
   - Recommended naming: `my-photo-1.jpg`, `my-photo-2.jpg`, etc.

2. **Import them in the component:**
   
For **PortfolioShowcase.tsx**:
```typescript
// Add at the top after other imports
import myPhoto1 from "@/assets/my-photo-1.jpg";
import myPhoto2 from "@/assets/my-photo-2.jpg";
// ... add more as needed
```

3. **Update the portfolio items array:**
```typescript
{
  id: 5,
  title: "Butterfly Louver Design",
  category: "Custom Designs",
  description: "Decorative louver partition for modern interiors",
  image: myPhoto1,  // Change from placeholderImage to myPhoto1
  icon: Frame
},
```

For **Portfolio.tsx** (Parallax Scroll Section):
```typescript
// Add imports at the top
import myPhoto1 from "@/assets/my-photo-1.jpg";
import myPhoto2 from "@/assets/my-photo-2.jpg";

// Then in galleryImages array, replace placeholderImage entries:
const galleryImages = [
  // ... existing images ...
  myPhoto1,  // Replace placeholderImage
  myPhoto2,  // Replace placeholderImage
  // ... etc
];
```

## Files to Edit

### Main Portfolio Showcase (Homepage):
- **File**: `/app/frontend/src/components/PortfolioShowcase.tsx`
- **Placeholder Count**: 8 spots
- **Line numbers**: Check items with `image: placeholderImage`

### Full Portfolio Page (Parallax Scroll):
- **File**: `/app/frontend/src/components/Portfolio.tsx`
- **Placeholder Count**: 20 spots at the end of galleryImages array
- **Line numbers**: Bottom section of galleryImages array

## After Making Changes

The frontend has hot-reload enabled, so your changes should appear automatically. If not:

```bash
sudo supervisorctl restart frontend
```

## Tips for Best Results

1. **Image Size**: Use high-quality images (minimum 1200px width)
2. **Format**: JPG or PNG format works best
3. **Aspect Ratio**: Landscape orientation (16:9 or 4:3) works best for the portfolio
4. **File Size**: Keep images under 2MB for fast loading
5. **Naming**: Use descriptive names: `office-partition-project-1.jpg` instead of `IMG001.jpg`

## Need Help?

If you encounter any issues or need to add more placeholder spots, let me know and I'll help you update the configuration.

## Current Image Sources

All professional stock images are sourced from:
- Unsplash (https://unsplash.com)
- Pexels (https://pexels.com)

These are high-quality, royalty-free images suitable for commercial use.
