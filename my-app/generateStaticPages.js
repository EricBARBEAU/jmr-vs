const fs = require('fs');
const path = require('path');

// Define all your routes
const routes = [
  '/services/visa-service-packages',
  '/services/consultation-calls',
  '/services/letter-services',
  '/services/reservations',
  '/services/appointment-scheduling',
  '/our-process',
  '/testimonials',
  '/about-us',
  '/contact'
];

// Get the build directory
const buildDir = path.join(__dirname, 'build');

// Read the content of the main index.html file
const indexContent = fs.readFileSync(
  path.join(buildDir, 'index.html'),
  'utf8'
);

// Create directories and files for each route
routes.forEach(route => {
  // Create the directory structure
  const dirPath = path.join(buildDir, route);
  fs.mkdirSync(dirPath, { recursive: true });
  
  // Create an index.html file in each directory
  fs.writeFileSync(
    path.join(dirPath, 'index.html'),
    indexContent,
    'utf8'
  );
  
  console.log(`Created static file for: ${route}`);
});

console.log('Static pages generation complete!');