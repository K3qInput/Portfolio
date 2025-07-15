import { execSync } from 'child_process';
import { mkdirSync, existsSync, rmSync } from 'fs';

try {
  console.log('🚀 Building Kiro\'s Portfolio for Netlify...');
  
  // Clean previous builds
  if (existsSync('dist')) {
    rmSync('dist', { recursive: true, force: true });
  }
  
  // Create output directory
  mkdirSync('dist/public', { recursive: true });
  
  // Build the frontend
  console.log('Building React app...');
  execSync('npx vite build', { 
    stdio: 'inherit',
    timeout: 120000  // 2 minute timeout
  });
  
  // Verify the build
  if (existsSync('dist/public/index.html')) {
    console.log('✅ Build successful!');
    console.log('📁 Files created:');
    execSync('ls -la dist/public/', { stdio: 'inherit' });
    console.log('🌐 Ready for Netlify deployment!');
  } else {
    throw new Error('Build verification failed - index.html not found');
  }
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}