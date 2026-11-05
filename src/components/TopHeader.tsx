"use client"
import { CalendarDays, House, LogIn, Menu, UserRound, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu as soon as the route changes
  const [lastPathname, setLastPathname] = useState(active);
  if (lastPathname !== active) {
    setLastPathname(active);
    setMenuOpen(false);
  }

  // Close the mobile menu with the Escape key
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // Lock the page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const mobileLinkClass = (href: string) =>
    `flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${active === href
      ? "bg-primary/10 text-primary"
      : "text-foreground/90 hover:bg-accent hover:text-primary"
    }`;


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
              <Link href={'/login'} className="hidden text-[15px] font-semibold px-4 py-2 tracking-wide bg-primary text-white shadow-md shadow-primary/40 transition-all hover:shadow-none rounded-md sm:inline-flex items-center gap-1.5"><LogIn className="h-4 w-4" strokeWidth={3} /> Login</Link>
            ) : (
              <>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger key={'bottom'}>
                      <Link
                        href="/profile"
                        aria-label="My profile"
                        className="sm:flex h-9.5 w-9.5 shrink-0 items-center justify-center border border-primary rounded-full hidden"
                      >
                        <Image src={user?.image ? user.image : '/images/avatar.jpeg'} width={36} height={36} alt="avatar" className="w-full h-full object-cover rounded-full" />
                      </Link>
                    </TooltipTrigger>

                    <TooltipContent side="bottom">
                      <p>Profile</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <span className="hidden sm:inline-flex">
                  <LogoutButton />
                </span>

              </>
            )
          }

          {/* Mobile menu trigger - only visible on mobile devices */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls={menuOpen ? "mobile-menu" : undefined}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border bg-background/60 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground cursor-pointer sm:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <>
          {/* Click outside to close */}
          <div
            aria-hidden="true"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] bg-black/40 sm:hidden"
          />

          <div id="mobile-menu" className="absolute inset-x-0 top-full z-10 border-b bg-background/95 backdrop-blur sm:hidden">
            <nav className="section-container flex flex-col gap-1 py-4">
              <Link href="/" onClick={() => setMenuOpen(false)} className={mobileLinkClass("/")}>
                <House size={17} className="shrink-0" />
                Home
              </Link>

              <Link href="/events" onClick={() => setMenuOpen(false)} className={mobileLinkClass("/events")}>
                <CalendarDays size={17} className="shrink-0" />
                Upcoming Events
              </Link>

              <div className="my-2 border-t border-border" />

              {
                !user ? (
                  <Link href="/login" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 rounded-md bg-primary px-3 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/40 transition-all hover:shadow-none">
                    <LogIn className="h-4 w-4" strokeWidth={3} />
                    Login
                  </Link>
                ) : (
                  <>
                    <Link href="/profile" onClick={() => setMenuOpen(false)} className={mobileLinkClass("/profile")}>
                      <Image src={user?.image ? user.image : '/images/avatar.jpeg'} width={36} height={36} alt="avatar" className="w-9 h-9 shrink-0 object-cover rounded-full" />
                      My Profile
                    </Link>

                    <div className="mt-1 px-1">
                      <LogoutButton />
                    </div>
                  </>
                )
              }
            </nav>
          </div>
        </>
      )}
    </header >
  );
}


export default TopHeader;