import { Search } from "lucide-react"

const EventsFilter = ({ count }: { count: number }) => {
    return (
        <div className="mt-10 space-y-4">
            <div className=" flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <input className="flex h-11 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-9" placeholder="Search events by title or location…" aria-label="Search events" />
                </div>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-11 px-4 py-2 shrink-0">Earliest first</button>
            </div>
            <div className="flex items-center overflow-x-auto gap-2">
                <button className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-colors cursor-pointer whitespace-nowrap">All</button>
                <button className="rounded-full border bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground whitespace-nowrap">Cleanup</button>
                <button className="rounded-full border bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">Plantation</button>
                <button className="rounded-full border bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">Donation</button>
                <button className="rounded-full border bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">Food Drive</button>
                <button className="rounded-full border bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">Blood Donation</button>
                <button className="rounded-full border bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">Awareness Campaign</button>
                <button className="rounded-full border bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">Workshop</button>
            </div>
            <p className="mt-4 md:mt-6 text-sm text-muted-foreground">{count} Events found</p>
        </div>
    )
};

export default EventsFilter;