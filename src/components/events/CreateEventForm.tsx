"use client";

import IconInput from "@/components/ui/IconInput"
import Label from "@/components/ui/Label"
import { CalendarDays, Image, MapPin, MousePointerClick, TypeOutline } from "lucide-react"
import { useState, type FormEvent } from "react";
import ValidationErrorAlert from "../ui/validationErrorAlert";
import { toast } from "react-toastify";
import { useSession } from "@/lib/auth-client";
import { GetTokenFromClient } from "@/lib/getTokenFromClient";


interface FormErrors {
    eventTitle?: string;
    eventType?: string;
    eventDate?: string;
    location?: string;
    imageUrl?: string;
    eventDescription?: string;
}

const ALLOWED_IMAGE_HOSTS = ["images.unsplash.com", "plus.unsplash.com"];

const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const CreateEventForm = () => {

    const session = useSession();
    const user = session?.data?.user;

    const [error, setErrors] = useState<FormErrors>({});
    const [isLoading, setIsLoading] = useState(false);

    const handleEventSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        const eventTitle = String(formData.get('eventTitle') ?? "").trim();
        const eventType = String(formData.get('eventType') ?? "").trim();
        const eventDate = String(formData.get('eventDate') ?? "").trim();
        const location = String(formData.get('location') ?? "").trim();
        const imageUrl = String(formData.get('imageUrl') ?? "").trim();
        const eventDescription = String(formData.get('eventDescription') ?? "").trim();

        const newError: FormErrors = {};


        if (!imageUrl) {
            newError.imageUrl = "Image URL is required!";
        } else {
            let parsed: URL | null = null;
            try {
                parsed = new URL(imageUrl);
            } catch {
                parsed = null;
            }

            if (!parsed) {
                newError.imageUrl = "Please enter a valid image URL!";
            } else if (parsed.protocol !== "https:") {
                newError.imageUrl = "Image URL must start with https://!";
            } else if (!ALLOWED_IMAGE_HOSTS.includes(parsed.hostname)) {
                newError.imageUrl =
                    "Only images.unsplash.com and plus.unsplash.com images are allowed!";
            }
        }

        if (!eventTitle) {
            newError.eventTitle = "Event title is required!";
        }

        if (!eventType) {
            newError.eventType = "Event type is required!";
        }

        if (!eventDate) {
            newError.eventDate = "Event date is required!";
        }

        if (!location) {
            newError.location = "Location is required!";
        }

        if (!imageUrl) {
            newError.imageUrl = "Image URL is required!";
        }

        if (!eventDescription) {
            newError.eventDescription = "Description is required!";
        }

        setErrors(newError);

        if (Object.keys(newError).length === 0) {
            setIsLoading(true);
            try {
                const token = await GetTokenFromClient();

                const res = await fetch(`${apiUrl}/event`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        user_id: user?.id as string,
                        eventTitle: eventTitle as string,
                        eventType: eventType as string,
                        eventDate: eventDate as string,
                        location: location as string,
                        imageUrl: imageUrl as string,
                        eventDescription: eventDescription as string,
                    })
                });

                if (res.ok) {
                    form.reset();
                    toast.success("Event created successful");
                }

            } catch (error) {
                console.log(error);
                toast.error("An unexpected error occurred while creating the event.");
            } finally {
                setIsLoading(false);
            }
        }

    }

    const today = new Date();
    const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

    return (
        <form onSubmit={handleEventSubmit} className="space-y-4">


            <div className="space-y-2">
                <Label labelText="Event Title" isRequired={true} />
                <IconInput
                    Icon={TypeOutline}
                    type="text"
                    name="eventTitle"
                    placeholder="Winter Clothes Distribution"
                    autoComplete="event-title"
                />
                {error.eventTitle && <ValidationErrorAlert msg={error.eventTitle} />}
            </div>


            <div className="flex flex-col md:flex-row justify-between gap-5 w-full">

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
                    {error.eventType && <ValidationErrorAlert msg={error.eventType} />}
                </div>

                <div className="space-y-2 w-full">
                    <Label labelText="Event Date" isRequired={true} />
                    <IconInput
                        Icon={CalendarDays}
                        type="date"
                        name="eventDate"
                        min={minDate}
                        autoComplete="event-date"
                    />
                    {error.eventDate && <ValidationErrorAlert msg={error.eventDate} />}
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
                {error.location && <ValidationErrorAlert msg={error.location} />}
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
                {error.imageUrl && <ValidationErrorAlert msg={error.imageUrl} />}
            </div>

            <div className="space-y-2">
                <Label labelText="About this event" isRequired={true} />
                <textarea name="eventDescription" id="eventDescription" placeholder="Describe what volunteers will do, what to bring and why it matters..." cols={10} rows={5} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/10 resize-none"></textarea>
                {error.eventDescription && <ValidationErrorAlert msg={error.eventDescription} />}
            </div>

            <div className="mt-5">
                <button type="submit" disabled={isLoading} className="w-full py-3 px-4 bg-primary rounded-md text-white inline-flex items-center gap-2 justify-center transition-all shadow-md shadow-primary/40 hover:shadow-none hover:bg-primary/90 cursor-pointer font-semibold text-[15px] disabled:cursor-not-allowed disabled:opacity-70">
                    {isLoading ? (
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    ) : (
                        <>
                            <MousePointerClick size={16} /> Publish Event
                        </>
                    )}

                </button>
            </div>

        </form>
    )
};


export default CreateEventForm;