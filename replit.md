# Replit.md - Kiro's Minecraft Portfolio

## Overview

This is a modern, full-stack portfolio website built for Kiro, a Minecraft server developer specializing in optimization, security, and custom solutions. The application features a React frontend with TypeScript, an Express.js backend, and PostgreSQL database with Drizzle ORM for data management.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- **Added Peak Minds Developer & Fixed Skills Section Tag Display** - July 18, 2025
  - Added Peak Minds Developer (2025) current position to experience timeline
  - Fixed skills section tag cutting issues with scrollable containers (max-h-[380px])
  - Enhanced tag display in Backend & Tools, Management Skills, and Programming Languages
  - All skill tags now accessible through scroll within each section container
- **Enhanced Premium Monthly Packages & Added Network Manager Experience** - July 18, 2025
  - Improved Premium Monthly Pack spacing with responsive grid (gap-12, max-w-6xl)
  - Enhanced "Most Popular" badge with bright gradient, animation, and better visibility
  - Added BoigaSMP Network Manager (2024-2025) current position to experience
  - Added BoltMC Network Manager (2023-2024) past position to experience
  - Updated experience timeline with proper network management roles and technologies
- **Perfect Services Page Button Alignment Fixed** - July 18, 2025
  - Fixed "Contact for Service" button overflow issues across all service sections
  - Optimized button sizing: py-2 px-3 with whitespace-nowrap for perfect containment
  - Applied consistent text sizing (text-xs for Essential, text-sm for larger cards)
  - Reduced icon sizes and margins for optimal spacing within cards
  - All buttons now fit perfectly within their service card boundaries
  - Maintained professional symmetry and alignment throughout services page
- **Complete Website Symmetry & Alignment Implementation** - July 18, 2025
  - Fixed "View All Services & Pricing" navigation to scroll to One-Time Setup Services
  - Applied comprehensive equal heights and button alignment across entire website
  - Service cards: Essential Monthly (h-[480px]), Dev Pack & Web Development (h-[520px]), One-Time Setup (h-[560px]), Premium Monthly (h-[520px])
  - Project cards standardized with h-[440px] and proper content distribution with mt-auto button alignment
  - Blog cards: Equal heights (h-[420px]) with flex layouts and mt-auto GitHub links
  - Skills section: All three boxes now have consistent h-[520px] heights
  - Experience timeline: Fixed heights (h-[280px]) with flex layouts and mt-auto technology tags
  - About section cards: Equal heights with flex layouts for perfect alignment
  - Contact section: Maintained equal height grid structure
  - KiroDev header: Fixed positioning with proper navbar spacing and centering
  - All sections maintain professional symmetrical design throughout entire website
- **Successfully Migrated from Replit Agent to Replit Environment** - July 18, 2025
  - Fixed database configuration from Neon to local PostgreSQL
  - Updated imports and dependencies for Replit compatibility
  - Fixed skills section layout with equal height boxes (h-[500px])
  - All features working properly in new environment
- **Major Portfolio Enhancement** - July 18, 2025
- Added comprehensive Backend & Tools skills: Firewall Management, Proxy Configuration, DDoS Mitigation, Network Security, Load Balancing, SSL/TLS, VPN Setup, Intrusion Detection, Traffic Analysis, CDN Management
- Made blogs functional with GitHub repository connections and interactive GitHub links
- Added new service packages: Custom Solutions ($24/month), Web Development ($24/month)
- Fixed "Most Popular" badge visibility with proper contrast and styling
- Enhanced header navigation with larger font sizes and improved spacing
- Fixed duplicate key warnings in services page by correcting service IDs
- Updated Leaf Core Optimized Configs project with proper logo from GitHub
- Added githubUrl field to blog posts database schema and UI components
- **Netlify Deployment Fixed** - July 15, 2025  
- Resolved build directory issue that caused deployment failure
- Enhanced build script with better error handling and verification
- All deployment files optimized: netlify.toml, build-static.js, guides
- Portfolio fully ready for live deployment with all features working
- **Updated Project Assets** - July 15, 2025
- Corrected Sterix Discord Bot project image to use proper bot avatar
- Personal avatar saved for profile use: https://images-ext-1.discordapp.net/external/JbszHD6v-hwJ-a0PqqirRcj1mRMtJlBHwtsrELqq-P8/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1129755081416388750/8ac8d8faa01acfd45c566464dcf69812.png?format=webp&quality=lossless
- **Successfully migrated from Replit Agent to Replit environment** - July 15, 2025
- Set up PostgreSQL database with proper connection and migrations
- All dependencies installed and project running smoothly on port 5000
- **Comprehensive Services System** - Added professional services page with currency conversion
- Created Services section positioned before Skills in home page
- Implemented multi-currency support (USD, EUR, GBP, CAD, AUD, JPY, INR, CNY, KRW, etc.)
- Real-time currency conversion based on user location detection
- All services restructured as monthly packages with competitive pricing
- **Enhanced Skills Section with Modern 3D Visualization** - Redesigned skills display completely
- Replaced progress bars with colorful interactive button-based programming languages display
- Added comprehensive management skills including Staff Training, Chart Analysis, Budget Management, Financial Planning
- Created modern 3D donut chart with gradient effects, glow layers, and enhanced visual depth
- Enhanced "View All Services" button with gradient styling and improved visibility
- **Updated Experience and About Sections** - Added management, Skript, and marketing skills
- Enhanced specializations to include Network Architecture and Configuration Management
- Added hobbies section including Boxing and Chess
- **Navigation Enhancement** - Added Services to main navigation with proper routing
- Services page includes header and footer with full navigation
- **Updated Contact Information** - Changed to kirodev.java@gmail.com and kiro.java Discord
- All service inquiries redirect to Discord DMs for direct contact
- **Enhanced Professional Profile** - Added management skills, Skript programming, marketing background
- Added network architecture expertise and hobbies (Boxing, Chess)
- **Created Comprehensive Services Page** - Professional services with competitive pricing
- Added multi-currency support with real-time conversion (15+ currencies)
- Automatic currency detection based on user location/language
- Service packages: One-time services ($2.5-$4) and monthly packages ($18-$35)
- Discord integration for service inquiries and purchases

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Component Library**: Radix UI components with shadcn/ui
- **Animations**: Framer Motion for smooth transitions and interactions
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations
- **API Design**: RESTful API with proper error handling
- **Development**: Hot reloading with Vite integration

## Key Components

### Database Schema
- **Users**: Basic user management (id, username, password)
- **Contacts**: Contact form submissions with timestamps and read status
- **Blog Posts**: Content management with slug-based routing, categories, and publishing status

### Frontend Components
- **Layout**: Header with navigation, Footer with links
- **Sections**: Hero, About, Skills, Projects, Experience, Blog, Contact
- **UI Components**: Extensive component library using Radix UI primitives
- **Animations**: Custom hooks for intersection observer and scroll progress
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### API Endpoints
- `GET /api/blog` - Fetch all blog posts
- `GET /api/blog/:slug` - Fetch single blog post by slug
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Fetch all contacts (admin)

## Data Flow

1. **Frontend to Backend**: Client makes API requests using TanStack Query
2. **Data Validation**: Zod schemas validate incoming data on both client and server
3. **Database Operations**: Drizzle ORM handles database queries and mutations
4. **Response Handling**: Structured JSON responses with proper error handling
5. **State Management**: TanStack Query manages caching and synchronization

## External Dependencies

### Core Technologies
- **React**: UI framework with hooks and context
- **Express.js**: Backend web framework
- **PostgreSQL**: Relational database
- **Drizzle ORM**: Type-safe database toolkit
- **Vite**: Build tool and development server

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

### Development Tools
- **TypeScript**: Static typing for JavaScript
- **ESBuild**: Fast JavaScript bundler
- **Zod**: Schema validation library
- **React Hook Form**: Form management

## Deployment Strategy

### Development
- Local development with Vite dev server
- Hot module replacement for rapid development
- TypeScript compilation and type checking
- Database migrations with Drizzle Kit

### Production Build
- Vite builds optimized client bundle to `dist/public`
- ESBuild bundles server code to `dist/index.js`
- Static assets served from Express server
- Environment-based configuration

### Database Management
- Schema defined in `shared/schema.ts`
- Migrations generated and applied via Drizzle Kit
- Connection pooling with Neon Database
- Environment variable configuration for database URL

### Key Features
- Server-side rendering fallback for better SEO
- Responsive design optimized for all devices
- Progressive enhancement with JavaScript
- Optimized asset loading and caching
- Error boundaries and graceful error handling

The application follows modern web development practices with proper separation of concerns, type safety, and performance optimization. The codebase is structured for maintainability and scalability.