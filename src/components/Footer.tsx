
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";


const social = [
    { icon: <FaFacebook />, url: "https://www.facebook.com/upliftly" },
    { icon: <FaXTwitter />, url: "https://x.com/upliftly" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/upliftly" },
]

const Footer = () => {

    return (
        <footer className="mt-16 border-t bg-card">
            <div className="section-container space-y-5 sm:space-y-0 py-10 grid w-full md:grid-cols-4">
                <div className="md:col-span-2">
                    <div className="flex items-center gap-2">
                        <div className="w-15 h-15 shrink-0">
                            <Image src={'/images/logo.png'} alt="ServeCircle" width={60} height={60} className="w-full h-full object-cover" />
                        </div>

                        <span className="font-display text-xl font-bold tracking-tight text-foreground">
                            Upliftly
                        </span>
                    </div>
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/70">
                        A community platform for social development — discover volunteer events near you, host your own drives,
                        and grow your impact together.
                    </p>
                    <div className="mt-5 flex gap-3">

                        {
                            social.map((media, i) =>
                                <Link key={i} href={media.url} target="_blank" rel="noreferrer" className="flex size-9 items-center justify-center rounded-md shadow-md bg-muted transition-colors border border-primary/80 text-primary hover:bg-primary hover:text-white ">
                                    {media.icon}
                                </Link>
                            )
                        }

                    </div>
                </div>
                <div>
                    <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                        Explore
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li>
                            <Link href="/" className="text-foreground/70 transition-colors hover:text-primary active">Home</Link>
                        </li>
                        <li>
                            <Link href="/events" className="text-foreground/70 transition-colors hover:text-primary">Upcoming Events</Link>
                        </li>
                        <li>
                            <Link href="/events/create" className="text-foreground/70 transition-colors hover:text-primary">Create Event</Link>
                        </li>
                        <li>
                            <Link href="/events/joined" className="text-foreground/70 transition-colors hover:text-primary">Joined Events</Link>
                        </li>
                        <li>
                            <Link href="/profile" className="text-foreground/70 transition-colors hover:text-primary">Profile</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                        Contact
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                        <li className="flex items-center gap-2">
                            <Mail className="size-4 shrink-0 text-brand-aqua" />
                            <Link href="mailto:hello@upliftly.com" className="text-foreground/70 transition-colors hover:text-primary">hello@upliftly.com</Link>
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone className="size-4 shrink-0 text-brand-aqua" />
                            <Link href="tel:+8801700000000" className="text-foreground/70 transition-colors hover:text-primary">+880 1700 000000</Link>
                        </li>
                        <li className="flex items-center gap-2">
                            <MapPin className="size-4 shrink-0 text-brand-aqua" />
                            <Link href="https://maps.app.goo.gl/1234567890" className="text-foreground/70 transition-colors hover:text-primary">Dhaka, Bangladesh</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-border py-5 text-center text-xs text-foreground">
                © 2026 Upliftly. Made with care for community volunteers.
            </div>
        </footer>
    );
};

export default Footer;