
"use client";

import { useSession } from "@/lib/auth-client";
import { GetTokenFromClient } from "@/lib/getTokenFromClient";
import { ArrowRight, CircleCheckBig, LoaderCircle, UsersRound } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL;

type JoinState = "checking" | "idle" | "joining" | "joined";

const JoinEventBtn = ({ eventid }: { eventid: string }) => {

    const session = useSession();
    const userId = session?.data?.user?.id;

    const [state, setState] = useState<JoinState>("checking");

    // Check on mount whether this user already joined this event
    useEffect(() => {
        let cancelled = false;

        const checkJoinStatus = async () => {

            const token = await GetTokenFromClient();

            // Wait until the session has loaded before checking
            if (!userId) {
                if (!session.isPending) setState("idle");
                return;
            }

            try {
                const res = await fetch(
                    `${apiUrl}/user/event-joined?userId=${userId}&eventId=${eventid}`,
                    {
                        headers: {
                            authorization: `Bearer ${token}`
                        }
                    }
                );

                if (!res.ok) return;

                const data = await res.json();

                if (!cancelled && data?.joined) {
                    setState("joined");
                } else if (!cancelled) {
                    setState("idle");
                }
            } catch {
                if (!cancelled) setState("idle");
            }
        };

        checkJoinStatus();

        return () => {
            cancelled = true;
        };
    }, [userId, eventid, session.isPending]);

    const handleEventJoined = async () => {

        // Already joined — nothing to do
        if (state === "joined") return;

        try {
            setState("joining");

            const token = await GetTokenFromClient();

            const res = await fetch(`${apiUrl}/user/event-joined`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    eventId: eventid,
                    userId: userId,
                    status: "joined"
                })
            });

            // One user can join an event only once
            if (res.status === 409) {
                setState("joined");
                toast.info("You have already joined this event");
                return;
            }

            const data = await res.json().catch(() => null);

            if (!res.ok) {
                throw new Error(
                    (data && data.message) || "Failed to join event"
                );
            }

            setState("joined");
            toast.success("Event joined successfully");

        } catch (error) {
            setState("idle");
            toast.error(
                error instanceof Error
                    ? error.message
                    : "Something went wrong"
            );
        }
    };

    const isJoined = state === "joined";
    const isChecking = state === "checking";
    const isJoining = state === "joining";
    const isDisabled = isChecking || isJoining;

    return (
        <button
            type="button"
            onClick={handleEventJoined}
            disabled={isDisabled}
            aria-pressed={isJoined}
            className={`group flex w-full items-center gap-4 rounded-2xl p-4 text-left text-white shadow-soft transition-transform sm:p-5 ${isJoined
                ? "cursor-default bg-linear-to-r from-[#0f7a4d] to-[#15a866]"
                : "cursor-pointer bg-linear-to-r from-[#0b47a3] to-[#1668d4] hover:scale-[1.01] disabled:cursor-wait disabled:opacity-80"
                }`}
        >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20">
                {isChecking || isJoining ? (
                    <LoaderCircle className="h-5 w-5 animate-spin sm:h-6 sm:w-6" />
                ) : isJoined ? (
                    <CircleCheckBig className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                    <UsersRound className="h-5 w-5 sm:h-6 sm:w-6" />
                )}
            </span>

            <span className="min-w-0">
                <span className="block font-header text-base font-bold sm:text-lg">
                    {isChecking
                        ? "Checking..."
                        : isJoining
                            ? "Joining..."
                            : isJoined
                                ? "You've Joined This Event"
                                : "Join This Event"}
                </span>
                <span className="block text-xs text-white/80 sm:text-sm">
                    {isJoined
                        ? "Thanks for being part of something bigger!"
                        : "Be a part of something bigger!"}
                </span>
            </span>

            {!isJoined && (
                <span className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/40 transition-colors group-hover:bg-white/25">
                    <ArrowRight className="h-5 w-5" />
                </span>
            )}
        </button>
    )
};

export default JoinEventBtn;
