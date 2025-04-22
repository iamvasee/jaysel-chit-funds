const fs = require('fs');
const path = require('path');

const icons = [
  { name: 'logo', width: 150, height: 40 },
  { name: 'hero-image', width: 800, height: 600 },
  { name: 'join-icon', width: 40, height: 40 },
  { name: 'contribute-icon', width: 40, height: 40 },
  { name: 'win-icon', width: 40, height: 40 },
  { name: 'earn-icon', width: 40, height: 40 },
  { name: 'group-savings-icon', width: 24, height: 24 },
  { name: 'monthly-bid-icon', width: 24, height: 24 },
  { name: 'low-risk-icon', width: 24, height: 24 },
  { name: 'trust-icon', width: 32, height: 32 },
  { name: 'flexible-icon', width: 32, height: 32 },
  { name: 'transparent-icon', width: 32, height: 32 },
  { name: 'social-icon', width: 32, height: 32 },
];

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Generate SVG placeholder for each icon
icons.forEach(({ name, width, height }) => {
  const svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="#4014C6"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#FF4E59" font-family="Arial" font-size="${Math.min(width, height) / 4}px">
      ${name}
    </text>
  </svg>`;

  fs.writeFileSync(path.join(publicDir, `${name}.svg`), svg);
});

// Generate a placeholder video
const videoPlaceholder = `<svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
  <rect width="1920" height="1080" fill="#4014C6"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#FF4E59" font-family="Arial" font-size="48px">
    Hero Video Placeholder
  </text>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'hero-video-placeholder.svg'), videoPlaceholder);

console.log('Generated placeholder images in public directory'); 