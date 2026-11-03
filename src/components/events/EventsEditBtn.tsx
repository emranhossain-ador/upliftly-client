
"use client";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import Label from "@/components/ui/Label";
import ValidationErrorAlert from "@/components/ui/validationErrorAlert";
import { EventsType } from "@/type/EventsType";
import {
    CalendarDays,
    Image as ImageIcon,
    MapPin,
    Save,
    SquarePen,
    TypeOutline,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL;

// Same hosts allowed in next.config.ts images.remotePatterns
const ALLOWED_IMAGE_HOSTS = ["images.unsplash.com", "plus.unsplash.com"];

const EVENT_TYPES = [
    "Cleanup",
    "Plantation",
    "Donation",
    "Winter Relief",
    "Food Drive",
    "Health Camp",
    "Education",
];

interface FormErrors {
    eventTitle?: string;
    eventType?: string;
    eventDate?: string;
    location?: string;
    imageUrl?: string;
    eventDescription?: string;
}

const inputClass =
    "h-12 w-full rounded-xl border border-input bg-background pl-11 pr-4 text-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/10";

const EventsEditBtn = ({ event }: { event: EventsType }) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});

    const [form, setForm] = useState({
        eventTitle: event.eventTitle,
        eventType: event.eventType,
        eventDate: (event.eventDate || "").slice(0, 10),
        location: event.location,
        imageUrl: event.imageUrl,
        eventDescription: event.eventDescription,
    });

    const setField = (field: keyof typeof form) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
        setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

    const handleOpenChange = (nextOpen: boolean) => {
        // Prevent closing the modal while an update request is in flight
        if (loading && !nextOpen) return;
        setOpen(nextOpen);
        if (!nextOpen) setErrors({});
    };

    const validate = (): FormErrors => {
        const newError: FormErrors = {};

        if (!form.eventTitle.trim()) newError.eventTitle = "Event title is required!";
        if (!form.eventType.trim()) newError.eventType = "Event type is required!";
        if (!form.eventDate) newError.eventDate = "Event date is required!";
        if (!form.location.trim()) newError.location = "Location is required!";
        if (!form.eventDescription.trim()) newError.eventDescription = "Description is required!";

        const imageUrl = form.imageUrl.trim();
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

        return newError;
    };

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newError = validate();
        setErrors(newError);

        if (Object.keys(newError).length > 0) return;

        try {
            setLoading(true);

            const res = await fetch(`${apiUrl}/event/${event._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    eventTitle: form.eventTitle.trim(),
                    eventType: form.eventType.trim(),
                    eventDate: form.eventDate,
                    location: form.location.trim(),
                    imageUrl: form.imageUrl.trim(),
                    eventDescription: form.eventDescription.trim(),
                }),
            });

            const data = await res.json().catch(() => null);

            if (!res.ok) {
                throw new Error(
                    (data && data.message) || "Failed to update event"
                );
            }

            toast.success("Event updated successfully!");
            setOpen(false);
            router.refresh();

        } catch (error) {
            toast.error(
                error instanceof Error
                    ? error.message
                    : "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    };

    const typeOptions = EVENT_TYPES.includes(form.eventType)
        ? EVENT_TYPES
        : [form.eventType, ...EVENT_TYPES];

    const imageUrl = form.imageUrl.trim();
    let imagePreview = "";
    try {
        const parsed = new URL(imageUrl);
        if (parsed.protocol === "https:" && ALLOWED_IMAGE_HOSTS.includes(parsed.hostname)) {
            imagePreview = imageUrl;
        }
    } catch {
        imagePreview = "";
    }


    const today = new Date();
    const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;


    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <button
                type="button"
                title="edit event"
                onClick={() => setOpen(true)}
                className="flex items-center justify-center cursor-pointer rounded-md px-3 md:px-4 py-2 gap-1.5 text-xs sm:text-sm font-semibold border border-sky-500/50 text-sky-500 transition hover:bg-sky-500 hover:text-white"
            >
                <SquarePen size={16} /> Edit
            </button>

            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
                <DialogHeader className="items-center text-center">
                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-sky-500/10 text-sky-500">
                        <TypeOutline size={27} />
                    </div>

                    <DialogTitle className="text-xl font-bold">
                        Edit Event
                    </DialogTitle>

                    <DialogDescription className="max-w-sm text-center leading-6">
                        Update the details of &quot;{event.eventTitle}&quot;.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleUpdate} className="space-y-4">
                    <div className="space-y-2">
                        <Label labelText="Event Title" isRequired={true} />
                        <div className="group relative">
                            <TypeOutline className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
                            <input
                                type="text"
                                name="eventTitle"
                                value={form.eventTitle}
                                onChange={setField("eventTitle")}
                                placeholder="Winter Clothes Distribution"
                                className={inputClass}
                            />
                        </div>
                        {errors.eventTitle && <ValidationErrorAlert msg={errors.eventTitle} />}
                    </div>

                    <div className="flex flex-col justify-between gap-5 w-full sm:flex-row">
                        <div className="space-y-2 w-full">
                            <Label labelText="Event Type" isRequired={true} />
                            <select
                                name="eventType"
                                value={form.eventType}
                                onChange={setField("eventType")}
                                className="h-12 w-full rounded-xl border border-input bg-background pl-4 pr-4 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
                            >
                                {typeOptions.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                            {errors.eventType && <ValidationErrorAlert msg={errors.eventType} />}
                        </div>

                        <div className="space-y-2 w-full">
                            <Label labelText="Event Date" isRequired={true} />
                            <div className="group relative">
                                <CalendarDays className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
                                <input
                                    type="date"
                                    name="eventDate"
                                    value={form.eventDate}
                                    onChange={setField("eventDate")}
                                    className={inputClass}
                                    min={minDate}
                                />
                            </div>
                            {errors.eventDate && <ValidationErrorAlert msg={errors.eventDate} />}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label labelText="Location / Venue" isRequired={true} />
                        <div className="group relative">
                            <MapPin className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
                            <input
                                type="text"
                                name="location"
                                value={form.location}
                                onChange={setField("location")}
                                placeholder="Enter location"
                                className={inputClass}
                            />
                        </div>
                        {errors.location && <ValidationErrorAlert msg={errors.location} />}
                    </div>

                    <div className="space-y-2">
                        <Label labelText="Thumbnail Image URL" isRequired={true} />
                        <div className="group relative">
                            <ImageIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
                            <input
                                type="url"
                                name="imageUrl"
                                value={form.imageUrl}
                                onChange={setField("imageUrl")}
                                placeholder="https://images.unsplash.com/photo-..."
                                className={inputClass}
                            />
                        </div>
                        <p className="text-xs text-muted-foreground pl-1">
                            Only https://images.unsplash.com and https://plus.unsplash.com images are allowed.
                        </p>
                        {errors.imageUrl && <ValidationErrorAlert msg={errors.imageUrl} />}

                        {imagePreview && (
                            <div className="mt-2 overflow-hidden rounded-xl border border-border">
                                <Image
                                    src={imagePreview}
                                    alt="Image preview"
                                    width={480}
                                    height={180}
                                    className="h-32 w-full object-cover"
                                />
                            </div>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label labelText="About this event" isRequired={true} />
                        <textarea
                            name="eventDescription"
                            value={form.eventDescription}
                            onChange={setField("eventDescription")}
                            placeholder="Describe what volunteers will do, what to bring and why it matters..."
                            cols={10}
                            rows={5}
                            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/10 resize-none"
                        />
                        {errors.eventDescription && <ValidationErrorAlert msg={errors.eventDescription} />}
                    </div>

                    <DialogFooter className="mt-2 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                        <DialogClose
                            disabled={loading}
                            className="cursor-pointer rounded-md border px-5 py-2.5 text-sm font-semibold transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            Cancel
                        </DialogClose>

                        <button
                            type="submit"
                            disabled={loading}
                            className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <Save size={16} />
                            {loading ? "Saving..." : "Save Changes"}
                        </button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EventsEditBtn;
