

import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LogoutButton = () => {

    const router = useRouter();

    const handleLogout = async () => {
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/");
                    toast.success('You have been logout successfully');
                },
            },
        })
    }

    return (
        <button type="button" onClick={handleLogout} className="text-[15px] font-semibold px-4 py-2 tracking-wide bg-rose-500 text-white shadow-md shadow-red-400/40 transition-all hover:shadow-none rounded-md inline-flex items-center gap-1.5 cursor-pointer"> LogOut</button>
    )
};

export default LogoutButton;