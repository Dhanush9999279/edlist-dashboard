# EdList Dashboard

A modern project management dashboard built with Next.js, TypeScript, and Tailwind CSS. It provides a clean and responsive interface for viewing projects, teams, and settings in a dashboard-style layout.

## Preview

![Dashboard Preview](public/dashboard-preview.png)

## Features

- Dashboard-style layout with sidebar and top navigation
- Clean and responsive user interface
- Projects page for viewing project-related data
- Teams page for team overview
- Settings page for dashboard preferences
- Built with reusable components

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Project Structure

```bash
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

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Dhanush9999279/edlist-dashboard.git
```

### 2. Go into the project folder

```bash
cd edlist-dashboard
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

To test the production build locally:

```bash
npm run build
npm run start
```

## Why I Built This

I built this project to practice creating a real dashboard UI using the Next.js App Router, reusable React components, and Tailwind CSS styling.

## Future Improvements

- Authentication and authorization
- Backend API integration
- Database integration with Prisma and PostgreSQL
- Search and filtering
- Role-based dashboard access

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.