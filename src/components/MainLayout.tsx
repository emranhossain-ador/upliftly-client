"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";
import TopHeader from "./TopHeader";
import Footer from "./Footer";

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    const hideLayout = ["/login", "/register"].includes(pathname);

    return (
        <>
            {!hideLayout && <TopHeader />}

            <main>{children}</main>

            {!hideLayout && <Footer />}
        </>
    );
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense fallback={<main>{children}</main>}>
            <LayoutContent>{children}</LayoutContent>
        </Suspense>
    );
};

export default MainLayout;