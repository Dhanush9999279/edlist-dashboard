# EdList Dashboard

A project management dashboard built with Next.js, TypeScript, and Tailwind CSS. It provides a clean interface for tracking active projects, task counts, ownership, and risk status.

## Features

- Sidebar navigation with active link styling
- Search bar and top navigation
- KPI summary cards
- Projects table with project status, tasks, and owner
- Separate Projects, Teams, and Settings pages
- Responsive dark dashboard layout

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Getting Started

```bash
cd client
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```bash
client/
  app/
    components/
      navbar.tsx
      sidebar.tsx
    dashboardWrapper.tsx
    layout.tsx
    page.tsx
    projects/page.tsx
    teams/page.tsx
    settings/page.tsx
  public/
    dashboard-preview.png
```

## Screenshot

![Dashboard Preview](./client/public/dashboard-preview.png)

## Why I Built This

I built this project to practice building a dashboard-style application using Next.js App Router, reusable UI components, and Tailwind CSS.

## Future Improvements

- Project detail page
- Search and filter enhancements
- Authentication
- Database integration with Prisma and PostgreSQL
- Role-based access control

## License

MIT