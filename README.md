# Cars Next.js Project

This is a Next.js web application focused on cars, featuring a modern UI with components such as car cards, home search, and various UI elements. The project showcases different car body types and makes, providing a user-friendly interface for browsing and searching cars.

## Features

- Browse cars by body type (Convertible, Hatchback, Sedan, SUV)
- Search functionality to find cars based on criteria
- Responsive and modern UI built with reusable components
- Integration with Supabase for backend services (authentication, data)
- Optimized font loading and performance with Next.js features

## Technologies Used

- [Next.js](https://nextjs.org) - React framework for server-side rendering and static site generation
- React components with modular UI design
- Supabase for backend services and database
- Tailwind CSS for styling (assumed from presence of postcss.config.mjs)
- Various UI components for accordion, buttons, dialogs, tables, etc.

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd cars
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Project Structure

- `app/` - Next.js app directory with pages and layouts
- `components/` - Reusable React components (car cards, search, UI elements)
- `lib/` - Utility functions and Supabase client setup
- `public/` - Static assets like images and icons

## Deployment

You can deploy this Next.js app easily on [Vercel](https://vercel.com), the platform from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

To learn more about Next.js and how this project is built, check out:

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

Feel free to contribute, open issues, or suggest improvements!
