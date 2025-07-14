# Replit.md - Kiro's Minecraft Portfolio

## Overview

This is a modern, full-stack portfolio website built for Kiro, a Minecraft server developer specializing in optimization, security, and custom solutions. The application features a React frontend with TypeScript, an Express.js backend, and PostgreSQL database with Drizzle ORM for data management.

## User Preferences

Preferred communication style: Simple, everyday language.

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