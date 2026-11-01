import { MailOpen } from "lucide-react";
import Image from "next/image";

const NewsletterSection = () => {
    return (
        <section className="section-container my-14 md:my-18">
            <div className="relative overflow-hidden rounded-3xl bg-secondary px-6 py-8 shadow-card sm:px-10">
                <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
                    <Image alt="brands" width={96} height={96} className="h-20 w-20 shrink-0 object-contain drop-shadow" src="/images/envelope.png" />


                    <div className="flex-1 text-center md:text-left">
                        <h3 className="font-display text-2xl font-bold text-navy">Subscribe to Our Newsletter</h3>
                        <p className="mt-1 text-sm text-muted-foreground">Get the latest events, updates and community news directly in your inbox.</p>
                    </div>
                    <form className="flex w-full max-w-md gap-2">
                        <input placeholder="Your email address" className="h-11 flex-1 rounded-full border border-input bg-background px-4 text-sm text-navy outline-none ring-primary/40 focus:ring-2" type="email" />

                        <button type="submit" className="flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-primary-dark">
                            <MailOpen className="w-4 h-4" />
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;