# KITHUSIBRIAN2004


# VEHICLES Next.js Project

This repository contains a sophisticated Next.js application focused on car browsing and search functionalities. The project leverages modern React features, server-side rendering, and integration with backend services to deliver a performant and scalable web application.

## Project Overview

The application provides users with the ability to explore various car models categorized by body types and manufacturers. It features a modular component architecture, optimized data fetching, and a responsive UI designed for seamless user experience across devices.

## Technical Stack

- **Framework:** Next.js (React 18+) with App Router for enhanced routing and layouts
- **Styling:** Tailwind CSS for utility-first, responsive styling
- **SHADCN UI:** Utilizes reusable components like button,calendar etc from SHADCNUI for smooth operation,functionality and reusability
- **Backend Integration:** Supabase for authentication, database, and real-time data handling and sharing
- **State Management:** React hooks and context API for local state handling
- **Data Layer:** Prisma ORM for database interactionS
- **Component Design:** Reusable UI components including car cards, search inputs, accordions, dialogs, and more
- **Image Optimization:** Next.js Image component and static assets in the `public` directory for optimized loading
-  **Gemini API:** Uses Gemini AI to fetch Car Information from Gemini

## Key Features

- Dynamic car listings filtered by body type and manufacturer
- Advanced search capabilities with real-time filtering
- User authentication and session management via Supabase
- Responsive design with accessibility considerations
- Modular and scalable codebase following best practices
- Advanced Search Functionality with Gemini AI(On The Backend)

## Project Structure

- `app/` - Next.js app directory containing pages, layouts, and server components
- `components/` - React components organized by feature and UI elements
- `lib/` - Utility modules including Supabase client setup, Prisma ORM client, and helper functions
- `public/` - Static assets such as images, icons, and SVGs

## Getting Started

### Prerequisites

- Node.js v14 or higher
- npm or yarn package manager

### Installation

Clone the repository and install dependencies:

(...Touch on how to set up a database a supabase database for storage and how to seed data)

```bash
git clone <your-repo-url>
cd cars
npm install (Use --Peer-deps to resovle conflicts)- some modules are also yet not compatible with React 17
```

### Running the Development Server

Start the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Environment Variables

Configure your environment variables for Supabase and any other services in a `.env.local` file at the root of the project. Example variables might include:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Testing

Currently, no automated tests are included. Manual testing is recommended for key user flows such as browsing cars, searching, and authentication.

## Deployment

This Next.js application is optimized for deployment on Vercel. You can deploy directly from your GitHub repository using the Vercel platform.
The Project also uses docker for containerization thou it isnt supported by vercel.Hence not included in The Github commit

Refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for detailed instructions.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for bug fixes, enhancements, or new features.

## References

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Prisma ORM Documentation](https://www.prisma.io/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [SHADCN UI Documentation](https://ui.shadcn.com/docs)



---

You are full of shiiiit 😂😂😂😂😂😂😂😂
POV: Terrible UI from the most cooked person in the world rn
