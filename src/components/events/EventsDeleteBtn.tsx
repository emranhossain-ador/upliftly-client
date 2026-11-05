
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
import { GetTokenFromClient } from "@/lib/getTokenFromClient";

import { Trash2, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const EventDeleteBtn = ({ eventId }: { eventId: string }) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleOpenChange = (nextOpen: boolean) => {
        // Prevent closing the dialog while a delete request is in flight
        if (loading && !nextOpen) return;
        setOpen(nextOpen);
    };

    const handleDelete = async () => {
        try {
            setLoading(true);
            const token = await GetTokenFromClient();
            const res = await fetch(`${apiUrl}/event/${eventId}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${token}`
                }
            });

            const data = await res.json().catch(() => null);

            if (!res.ok) {
                throw new Error(
                    (data && data.message) || "Failed to delete event"
                );
            }

            if (data?.deletedCount === 0) {
                throw new Error("Event not found or already deleted");
            }

            toast.success("Event deleted successfully!");
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

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <button
                type="button"
                title="Delete event"
                onClick={() => setOpen(true)}
                className="flex cursor-pointer items-center justify-center gap-1.5 rounded-md border border-red-400/50 px-3 py-2 text-xs font-semibold text-red-500 transition hover:bg-rose-500 hover:text-white md:px-4 sm:text-sm"
            >
                <X size={16} strokeWidth={3} />
                Delete
            </button>

            <DialogContent className="sm:max-w-md">
                <DialogHeader className="items-center text-center">
                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-rose-500/10 text-rose-500">
                        <Trash2 size={27} />
                    </div>

                    <DialogTitle className="text-xl font-bold">
                        Delete this event?
                    </DialogTitle>

                    <DialogDescription className="max-w-sm text-center leading-6">
                        Are you sure you want to delete this event?
                        This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter className="mt-2 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                    <DialogClose
                        disabled={loading}
                        className="cursor-pointer rounded-md border px-5 py-2.5 text-sm font-semibold transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        Cancel
                    </DialogClose>

                    <button
                        type="button"
                        onClick={handleDelete}
                        disabled={loading}
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <Trash2 size={16} />
                        {loading ? "Deleting..." : "Delete Event"}
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default EventDeleteBtn;
