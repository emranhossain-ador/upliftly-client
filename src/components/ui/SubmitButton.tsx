import { ArrowRight } from "lucide-react";

const SubmitButton = ({ isLoading, title }: { isLoading: boolean, title: string }) => {
    return (
        <button
            type="submit"
            disabled={isLoading}
            className="group flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
        >
            {isLoading ? (
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            ) : (
                <>
                    {title}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
            )}
        </button>
    );
};

export default SubmitButton;