# Replit.md - Kiro's Minecraft Portfolio

## Overview

This is a modern, full-stack portfolio website built for Kiro, a Minecraft server developer specializing in optimization, security, and custom solutions. The application features a React frontend with TypeScript, an Express.js backend, and PostgreSQL database with Drizzle ORM for data management.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- Fixed hero section greeting from "Greetings! I'm Kiro" to "I'm Kiro"
- Enhanced header visibility with semi-transparent background
- Added proper spacing to prevent header from hiding content
- Updated Matrix Custom Config project image to use Matrix anticheat plugin image
- Updated Server IP Hider project to use firewall/proxy themed image
- Updated Essential Security Practices blog post to use lock/security themed image
- **Added PostgreSQL database integration** - Replaced in-memory storage with persistent database storage
- Created database connection with Neon PostgreSQL
- Migrated all data operations to use Drizzle ORM with proper schema
- **Enhanced Skills Section** - Added comprehensive animated pie chart showing skill distribution
- Organized skills into Programming Languages, Backend & Tools, and Specializations
- Added extensive programming languages (HTML, CSS, C++, etc.) and backend technologies
- **Updated Contact Information** - Changed to kirodev.java@gmail.com and kiro.java Discord
- Removed contact form, simplified to contact information display only
- **Added Educational Background** - Network Architecture (2nd Year), Diploma in Cyber Law
- Added personal information (Age: 22) and languages (English, French, Hindi)
- Cleaned up hero section by removing coding languages display
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