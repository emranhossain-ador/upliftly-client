
import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const TopHeader = () => {

  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
      <div className="section-container flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-14 w-14 shrink-0">
            <Image src="/images/light-logo.png" alt="logo" width={100} height={100} className="w-full h-full object-cover" />
          </span>
          <span className="font-header text-2xl font-black tracking-tight">
            Upliftly
          </span>
        </Link>

        {/* nav section */}
        <nav className="flex items-center gap-2.5">
          <Link href={'/'} className="hidden rounded-md px-3 py-2 text-sm font-medium text-primary transition-colors sm:block">Home</Link>
          <Link
            href="/events"
            className="hidden rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:block"
          >
            Upcoming Events
          </Link>
        </nav>

        <div className="flex items-center gap-1 sm:gap-3">
          {/* Dark & light theme switch */}
          <ThemeToggle />

          {/* Login & Register btn */}
          <Link href={'/login'} className="text-[15px] font-semibold px-4 py-2 tracking-wide bg-primary text-white shadow-md shadow-primary/40 transition-all hover:shadow-none rounded-md inline-flex items-center gap-1.5"><LogIn className="h-4 w-4" strokeWidth={3} /> Login</Link>


          {/* <Link
            href="/profile"
            aria-label="My profile"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20"
          >
            <UserRound className="h-5 w-5" />
          </Link> */}
        </div>
      </div>
    </header>
  );
}


export default TopHeader;