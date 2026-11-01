import Breadcrumb from "@/components/ui/Breadcrumb"
import IconInput from "@/components/ui/IconInput"
import Label from "@/components/ui/Label"
import { CalendarDays, Image, MapPin, MousePointerClick, TypeOutline } from "lucide-react"

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
                    <form action="" className="space-y-4">

                        <div className="space-y-2">
                            <Label labelText="Event Title" isRequired={true} />
                            <IconInput
                                Icon={TypeOutline}
                                type="text"
                                name="eventTitle"
                                placeholder="Winter Clothes Distribution"
                                autoComplete="event-title"
                            />
                        </div>


                        <div className="flex flex-col md:flex-row items-center justify-between gap-5 w-full">

                            <div className="space-y-2 w-full">
                                <Label labelText="Event Type" isRequired={true} />
                                <select name="eventType" className="h-12 w-full rounded-xl border border-input bg-background pl-4 pr-4 text-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/10">
                                    <option value="Cleanup">Cleanup</option>
                                    <option value="Plantation">Plantation</option>
                                    <option value="Donation">Donation</option>
                                    <option value="Winter Relief">Winter Relief</option>
                                    <option value="Food Drive">Food Drive</option>
                                    <option value="Health Camp">Health Camp</option>
                                    <option value="Education">Education</option>
                                </select>
                            </div>

                            <div className="space-y-2 w-full">
                                <Label labelText="Event Date" isRequired={true} />
                                <IconInput
                                    Icon={CalendarDays}
                                    type="date"
                                    name="eventDate"
                                    autoComplete="event-date"
                                />
                            </div>

                        </div>


                        <div className="space-y-2">
                            <Label labelText="Location / Venue" isRequired={true} />
                            <IconInput
                                Icon={MapPin}
                                type="text"
                                name="location"
                                autoComplete="location"
                                placeholder="Enter location"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label labelText="Thumbnail Image URL" isRequired={true} />
                            <IconInput
                                Icon={Image}
                                type="url"
                                name="imageUrl"
                                placeholder="https://images.com/photo-..."
                                autoComplete="url"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label labelText="About this event" isRequired={true} />
                            <textarea name="eventDescription" id="eventDescription" placeholder="Describe what volunteers will do, what to bring and why it matters..." cols={10} rows={5} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/10 resize-none"></textarea>
                        </div>

                        <div className="mt-5">
                            <button type="submit" className="w-full py-3 px-4 bg-primary rounded-md text-white inline-flex items-center gap-2 justify-center transition-all shadow-md shadow-primary/40 hover:shadow-none hover:bg-primary/90 cursor-pointer font-semibold text-[15px]"><MousePointerClick size={16} /> Publish Event</button>
                        </div>

                    </form>
                </div>
            </section>

        </main>
    )
}

export default CreateEventPage