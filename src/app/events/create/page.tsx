import CreateEventForm from "@/components/events/CreateEventForm"
import Breadcrumb from "@/components/ui/Breadcrumb"

const CreateEventPage = () => {
    return (
        <main className="min-h-screen bg-background">
            {/* ================= HERO SECTION ================= */}
            <section className="relative isolate overflow-hidden border-b border-border bg-secondary">

                <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute right-1/4 top-0 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />

                <div className="relative section-container flex min-h-62.5 items-center px-5 py-12 sm:px-8 lg:min-h-68.75 lg:px-10">

                    <div className="max-w-2xl">
                        {/* Breadcrumb */}
                        <Breadcrumb title="Create Events" />


                        <h1 className="font-header text-4xl font-extrabold tracking-tight text-secondary-foreground sm:text-5xl lg:text-6xl">
                            Create New <span className="text-primary">Event</span>
                        </h1>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                            Organize an event for your community — clean-ups, drives, camps and more.
                        </p>

                        <div className="mt-5 h-1.5 w-24 rounded-full bg-primary" />
                    </div>
                </div>
            </section>


            {/* ================= MAIN CONTENT ================= */}
            <section className="mx-auto max-w-3xl mt-12 ">
                <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow p-5 md:p-8">

                    <CreateEventForm />

                </div>
            </section>

        </main>
    )
}

export default CreateEventPage