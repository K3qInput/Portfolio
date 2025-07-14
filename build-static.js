import { execSync } from 'child_process';

try {
  console.log('Building static version for Netlify...');
  
  // Run the standard vite build command
  execSync('npx vite build', { 
    stdio: 'inherit',
    cwd: process.cwd()
  });
  
  console.log('Static build complete!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}