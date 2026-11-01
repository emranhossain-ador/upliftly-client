import { ArrowRight, UsersRound } from "lucide-react";

const JoinEventBtn = () => {
    return (
        <button type="button" className="group flex w-full items-center gap-4 rounded-2xl bg-linear-to-r from-[#0b47a3] to-[#1668d4] p-4 text-left text-white shadow-soft transition-transform hover:scale-[1.01] sm:p-5 cursor-pointer">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20">
                <UsersRound className="h-5 w-5 sm:h-6 sm:w-6" />
            </span>
            <span className="min-w-0">
                <span className="block font-header text-base font-bold sm:text-lg">Join This Event</span>
                <span className="block text-xs text-white/80 sm:text-sm">Be a part of something bigger!</span>
            </span>
            <span className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/40 transition-colors group-hover:bg-white/25">
                <ArrowRight className="h-5 w-5" />
            </span>
        </button>
    )
};

export default JoinEventBtn;