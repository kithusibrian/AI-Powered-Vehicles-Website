# CarsAI

**AI-Powered Vehicle Marketplace** — A production-grade Next.js full-stack application demonstrating modern web architecture, AI integration, and scalable design patterns. CarsAI enables dealerships to manage vehicle inventory with AI-assisted workflows, while customers browse, save, and book test drives through an intuitive marketplace interface.

### Core Value Proposition

- **For Dealerships**: Reduce inventory data entry time by 80%+ with Gemini AI image-to-data extraction
- **For Customers**: Intelligent search powered by AI vision and natural language
- **For Engineering**: Full-stack TypeScript/JavaScript, server-side rendering, rate-limited AI APIs, and production database patterns

## Engineering Highlights

### Architecture & Best Practices

- **Type-Safe Full Stack**: Next.js 15 with React 19 for frontend; PostgreSQL + Prisma for type-safe data access
- **Modern Routing**: App Router with route groups for clean separation of auth, public, customer, and admin areas
- **Server Actions**: Lean backend logic using Next.js server actions instead of traditional API routes
- **Authentication**: Clerk integration for robust user management and session handling
- **Rate Limiting**: Arcjet middleware for protection against API abuse on high-cost Gemini endpoints
- **Image Management**: Supabase storage integration with signed URLs and CDN optimization
- **Database Patterns**: Prisma with optimized indexes on frequently filtered fields (make, model, body type, price, status)

### AI Integration

- **Vision API**: Google Gemini 3.5 Flash for real-time image-to-structured-data extraction
- **Streaming & Inference**: Handles image uploads, processes vehicle specifications, and fallback logic
- **Multi-Modal Search**: Image-based and text-based vehicle discovery in a single interface

## Features

### Customer Experience

- Advanced filtering (make, model, body type, price range, fuel type, year, transmission)
- Save vehicles to personalized watchlist
- Test drive booking with availability management
- Reservation tracking and status updates
- Responsive design optimized for mobile and desktop

### Admin Dashboard

- Bulk car management (create, update, delete with image uploads)
- AI-assisted data entry: upload car photo → auto-populated specs
- Test drive booking management and review
- Dealership settings and working hours configuration
- Feature flag support for highlighting premium listings

## Tech Stack

| Layer          | Technology                  | Purpose                                             |
| -------------- | --------------------------- | --------------------------------------------------- |
| **AI**         | Google Gemini 3.5 Flash API | Vision-based vehicle data extraction & inference    |
| **Database**   | PostgreSQL + Prisma ORM     | Type-safe relational data with migrations           |
| **Storage**    | Supabase (S3-compatible)    | Image hosting with CDN and signed URLs              |
| **Backend**    | Next.js 15 Server Actions   | Serverless compute with built-in request handling   |
| **Frontend**   | React 19 + TypeScript       | Modern component patterns, hooks, and optimization  |
| **Auth**       | Clerk                       | OAuth, session management, user metadata            |
| **Protection** | Arcjet                      | Rate limiting, bot detection, DDoS protection       |
| **UI**         | Tailwind CSS + shadcn/ui    | Accessible, responsive, production-grade components |
| **Deployment** | Vercel / Docker             | Zero-config or containerized deployment options     |

## App Structure

| Route Group | Purpose                     | Key Features                                             |
| ----------- | --------------------------- | -------------------------------------------------------- |
| `(main)`    | Customer marketplace        | Browse, filter, search, save cars; book test drives      |
| `(admin)`   | Dealership management       | Inventory CRUD, AI-assisted image upload, booking review |
| `(auth)`    | Authentication flows        | Clerk-powered sign-in/sign-up                            |
| Public      | Homepage, details, waitlist | SEO-friendly, static generation where possible           |

## Project Structure

```
cars/
├── app/                    # Next.js 15 App Router
│   ├── (main)/            # Customer routes
│   ├── (admin)/           # Admin dashboard & management
│   ├── (auth)/            # Clerk authentication flows
│   ├── layout.js          # Root layout with Clerk provider
│   └── globals.css        # Tailwind + global styles
├── actions/               # Server actions for data operations
│   ├── cars.js           # Car CRUD + Gemini image processing
│   ├── car-listing.js    # Filtering, searching, aggregations
│   ├── home.js           # AI-powered home search
│   ├── test-drive.js     # Booking operations
│   ├── settings.js       # User & dealership settings
│   └── admin.js          # Admin-only operations
├── components/            # Reusable React components
│   ├── car-card.jsx      # Vehicle listing card
│   ├── home-search.jsx   # AI search interface
│   ├── Header.jsx        # Navigation
│   └── ui/               # shadcn/ui components
├── lib/                   # Utilities & clients
│   ├── prisma.js         # Prisma client singleton
│   ├── supabase.js       # Supabase client
│   ├── arcjet.js         # Rate limiting config
│   ├── checkUser.js      # Auth helpers
│   └── data.js           # Data constants
├── prisma/               # Database schema & migrations
│   ├── schema.prisma     # Data model definitions
│   └── migrations/       # Version-controlled schema changes
├── public/               # Static assets
├── middleware.js         # Auth middleware
├── next.config.mjs       # Next.js config (image optimization)
└── package.json          # Dependencies (see Tech Stack above)
```

## Setup & Configuration

### Environment Variables

Create a `.env.local` file with the following services:

```bash
# Database
DATABASE_URL=postgres://...
DIRECT_URL=postgres://...  # Direct connection for migrations

# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...

# Image Storage
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbG...
SUPABASE_SERVICE_ROLE_KEY=eyJhbG...  # Server-side uploads

# AI & Security
GEMINI_API_KEY=AIza...          # Google Gemini API
ARCJET_KEY=ajk_...              # Rate limiting
```

> **Note**: `SUPABASE_SECRET_KEY` can substitute `SUPABASE_SERVICE_ROLE_KEY` if needed.

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (local or Supabase)
- Gemini API key from Google Cloud
- Clerk project (free tier available)
- Supabase project for image storage

### Installation

```bash
# Install dependencies
npm install

# Set up .env.local with values from above
cp .env.example .env.local

# Run database migrations and seed (if applicable)
npx prisma migrate dev
npx prisma generate

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command         | Purpose                                      |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Start dev server with Turbopack              |
| `npm run build` | Generate Prisma client, build for production |
| `npm run start` | Run production server                        |
| `npm run lint`  | ESLint check with Next.js rules              |

## Data Model

The Prisma schema enforces relational integrity with indexes on hot paths:

```prisma
// Core entities
User (linked to Clerk) → UserSavedCar → Car
User → TestDriveBooking → Car

// Support
DealershipInfo → WorkingHour
Car ← [indexes on: make, model, bodyType, price, status, featured]
```

**Key Design Decisions**:

- Separate `UserSavedCar` table for many-to-many relationship (scalable)
- `TestDriveBooking` tracks status (PENDING, CONFIRMED, COMPLETED, CANCELLED, NO_SHOW)
- Multi-field indexes on frequently filtered columns for O(1) lookups
- Enum types for status and roles (prevents invalid states at the database level)
- Cascade delete on relationships (user deletion removes bookings and saves automatically)
- Dates stored as `DateTime` for proper temporal queries

## Performance & Scale

### Optimization Patterns

- **Server Components**: App Router uses React Server Components by default (reduced JS bundle)
- **Image Optimization**: Next.js Image component with Supabase CDN backend
- **Database Indexing**: Strategic indexes on `make`, `model`, `bodyType`, `price`, `status`, `featured`
- **Rate Limiting**: Arcjet protects high-cost Gemini API calls
- **Caching**: Clerk token caching, Prisma query optimization

### Scalability Considerations

- **Horizontal**: Stateless Next.js servers behind load balancer
- **Database**: PostgreSQL connection pooling via Prisma
- **Storage**: S3-compatible Supabase for unlimited image scaling
- **AI Costs**: Arcjet rate limiting prevents runaway Gemini API bills

## Deployment

### Production-Ready

The app follows Next.js best practices for deployment:

- **Vercel**: Zero-config deployment with automatic SSL, staging environments, and preview deployments
- **Docker**: Included Dockerfile for self-hosted or cloud deployments (AWS, GCP, DigitalOcean, etc.)
- **Environment**: Production requires all service credentials (database, Clerk, Supabase, Gemini, Arcjet)

### Example: Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

## Testing & Quality

- **Linting**: ESLint with Next.js rules configured
- **Type Safety**: TypeScript for static type checking across server and client
- **Manual Testing Checklist**: Browse, filter, search with AI, auth flows, admin CRUD, image uploads, booking workflows
- **CI/CD Ready**: Dockerized for GitHub Actions or GitLab CI

## What This Project Demonstrates

✅ **Full-Stack Development**: React frontend → Next.js middleware → PostgreSQL backend  
✅ **Modern Patterns**: Server Actions, App Router, React Server Components, TypeScript  
✅ **AI Integration**: Real-time vision API calls, structured data extraction, rate limiting  
✅ **Authentication**: Third-party OAuth (Clerk), protected routes, role-based access (USER/ADMIN)  
✅ **Database Design**: Relational schema, migrations, indexes, transactions  
✅ **File Management**: Cloud storage integration, signed URLs, CDN optimization  
✅ **API Security**: Rate limiting, bot protection, input validation  
✅ **Deployment**: Multi-platform (Vercel, Docker, self-hosted)
