import "./globals.css";
import DashboardWrapper from "./dashboardWrapper";

export const metadata = {
  title: "EdList Dashboard",
  description: "A project management dashboard built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}