import "./globals.css";
import Link from "next/link";
import { SkillProvider } from "@/context/SkillContext";
import { CirclePlus, Home, LayoutDashboard } from "lucide-react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SkillProvider>
          <nav
            className="
              flex 
              items-center
              justify-center
              gap-8 
              px-8 
              py-5
              fixed 
              backdrop-blur-lg
              bg-black/15
              border-b
              border-purple-800
              top-0 
              w-full 
              z-20 
              text-white
            "
          >
              
              <Link href="/" className="transition flex gap-1 items-center hover:text-purple-400 cursor-pointer">
              <Home className="size-5" />
                Home
              </Link>
              <Link href="/dashboard" className="transition flex gap-1 items-center hover:text-purple-400 cursor-pointer">
              <LayoutDashboard className="size-5" />
                Dashboard
              </Link>
              <Link href="/add" className="transition flex gap-1 items-center hover:text-purple-400 cursor-pointer">
              <CirclePlus className="size-5"/>
                Add
              </Link>
          </nav>

          {/* PAGE WRAPPER */}
          <main className="min-h-screen">{children}</main>
        </SkillProvider>
      </body>
    </html>
  );
}
