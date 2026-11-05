"use client";

import { ArrowRight, X } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { GetTokenFromClient } from "@/lib/getTokenFromClient";

const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const EventLeaveButton = ({ joinedEventId, userId }: { joinedEventId: string, userId: string }) => {

    const [isOpen, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleOpenChange = (nextOpen: boolean) => {
        if (loading && !nextOpen) return;
        setOpen(nextOpen);
    }

    const handleEventLeave = async () => {
        try {
            setLoading(true);

            const token = await GetTokenFromClient();

            const res = await fetch(`${apiUrl}/user/event-joined/${joinedEventId}/${userId}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${token}`
                }
            });

            if (res.ok) {
                toast.success("Event leave successful");
                setLoading(false);
                router.refresh();
            }

        } catch (error) {
            toast.error(
                error instanceof Error
                    ? error.message
                    : "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    }


    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <button
                type="button"
                title="Leave event"
                onClick={() => setOpen(true)}
                className="flex items-center justify-center cursor-pointer rounded-md px-4 py-2 gap-1.5 text-sm font-semibold border border-red-400/50 text-red-500 transition hover:bg-rose-500 hover:text-white">
                <X size={16} strokeWidth={3} /> Leave
            </button>
            <DialogContent className="sm:max-w-md">
                <DialogHeader className="items-center text-center">
                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-rose-500/10 text-rose-500">
                        <ArrowRight size={27} />
                    </div>

                    <DialogTitle className="text-xl font-bold">
                        Leave this event?
                    </DialogTitle>

                    <DialogDescription className="max-w-sm text-center leading-6">
                        Are you sure you want to leave this event?
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
                        disabled={loading}
                        onClick={handleEventLeave}
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {loading ? "Leaveing..." : "Leave Event"}
                        <ArrowRight size={16} />
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default EventLeaveButton;