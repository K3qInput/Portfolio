import { execSync } from 'child_process';

try {
  console.log('Building static version for Netlify...');
  
  // Only build the frontend for static deployment
  execSync('npx vite build --outDir dist/public', { 
    stdio: 'inherit',
    cwd: process.cwd()
  });
  
  console.log('Static build complete!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}