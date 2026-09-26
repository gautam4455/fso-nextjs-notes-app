import { Metadata } from "next";

import "./globals.css";

import AuthSessionProvider from "./components/SessionProvider";
import Navbar from "./components/Navbar";
import { NotificationProvider } from "./components/NotificationContext";
import Notification from "./components/Notification";

export const metadata: Metadata = {
  title: "Notes app",
  description: "A simple notes application built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <AuthSessionProvider>
          <NotificationProvider>
            <Navbar />

            <Notification />

            {children}
          </NotificationProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
