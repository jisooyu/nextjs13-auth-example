"use client";
import './globals.css'
import { SessionProvider } from "next-auth/react";
import AppBar from "./AppBar";

export default function RootLayout({ children } ) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <AppBar />
          <div className={"  h-screen "}>{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}