import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

const Breadcrumb = ({title}: {title:string})=>{
    return (
        <nav className="mb-6 flex items-center gap-2 text-xs font-medium text-muted-foreground sm:text-sm">
            <Link href="/profile"
                className="inline-flex font-semibold items-center gap-1.5 transition hover:text-primary">
                <Home size={15} className="text-primary" />
                Dashboard
            </Link>
            <ChevronRight size={15} />
            <span className="font-semibold text-foreground">
                {title}
            </span>
        </nav>
    )
};

export default Breadcrumb;