"use client"
import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { usePathname } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import LogoutButton from "./LogoutButton";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TopHeader = () => {

  const active = usePathname();
  const session = useSession();
  const user = session?.data?.user;


  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
      <div className="section-container flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-12 w-12 md:h-14 md:w-14 shrink-0">
            <Image src="/images/logo.png" alt="logo" width={100} height={100} className="w-full h-full object-cover" />
          </span>
          <span className="font-header text-2xl font-black tracking-tight">
            Upliftly
          </span>
        </Link>

        {/* nav section */}
        <nav className="flex items-center gap-2.5">
          <Link href={'/'} className={`hidden rounded-md px-3 py-2 text-sm font-medium transition-colors sm:block ${active === '/' ? 'text-primary' : 'text-foreground/90  hover:text-primary'}`}>Home</Link>
          <Link
            href="/events"
            className={`hidden rounded-md px-3 py-2 text-sm font-medium transition-colors sm:block ${active === '/events' ? 'text-primary' : 'text-foreground/90 hover:text-primary '}`}
          >
            Upcoming Events
          </Link>
        </nav>

        <div className="flex items-center gap-1 sm:gap-3">
          {/* Dark & light theme switch */}
          <ThemeToggle />

          {
            !user ? (
              <Link href={'/login'} className="text-[15px] font-semibold px-4 py-2 tracking-wide bg-primary text-white shadow-md shadow-primary/40 transition-all hover:shadow-none rounded-md inline-flex items-center gap-1.5"><LogIn className="h-4 w-4" strokeWidth={3} /> Login</Link>
            ) : (
              <>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger key={'bottom'}>
                      <Link
                        href="/profile"
                        aria-label="My profile"
                        className="flex h-9.5 w-9.5 shrink-0 items-center justify-center border border-primary rounded-full"
                      >
                        <Image src={'/images/avatar.jpeg'} width={36} height={36} alt="avatar" className="w-full h-full object-cover rounded-full" />
                      </Link>
                    </TooltipTrigger>

                    <TooltipContent side="bottom">
                      <p>Profile</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <LogoutButton />

              </>
            )
          }

        </div>
      </div>
    </header >
  );
}


export default TopHeader;