import { UserRound } from "lucide-react";

const JoinedEventsPage = ()=>{
    return (
        <main className="min-h-screen bg-background">
            {/* ================= HERO SECTION ================= */}
            <section className="relative isolate overflow-hidden border-b border-border bg-secondary">

                <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute right-1/4 top-0 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />

                <div className="relative mx-auto flex min-h-62.5 max-w-7xl items-center px-5 py-12 sm:px-8 lg:min-h-68.75 lg:px-10">

                    <div className="max-w-2xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-background/70 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur font-header">
                            <UserRound size={17} />
                            Profile Dashboard
                        </div>

                        <h1 className="font-header text-4xl font-extrabold tracking-tight text-secondary-foreground sm:text-5xl lg:text-6xl">
                            My Joined <span className="text-primary">Events</span>
                        </h1>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                            All the events you have signed up for. You can leave an event anytime. 
                        </p>

                        <div className="mt-5 h-1.5 w-24 rounded-full bg-primary" />
                    </div>
                </div>
            </section>
        </main>
    )
};


export default JoinedEventsPage;