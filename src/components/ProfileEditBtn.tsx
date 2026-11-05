"use client"

import { Image, Pencil, Save, TypeOutline, User } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Label from "./ui/Label";
import IconInput from "./ui/IconInput";
import { updateUser, useSession } from "@/lib/auth-client";
import { toast } from "react-toastify";


// Same hosts allowed in next.config.ts images.remotePatterns
const ALLOWED_IMAGE_HOSTS = ["images.unsplash.com", "plus.unsplash.com"];

type FormErrors = {
    name?: string;
    imageUrl?: string;
}

const ProfileEditBtn = () => {

    const session = useSession();
    const user = session?.data?.user;

    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});


    const handleOpenChange = (nextOpen: boolean) => {
        if (loading && !nextOpen) return;
        setOpen(nextOpen);
        if (!nextOpen) setErrors({});
    }


    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formdata = new FormData(e.currentTarget);
        const name = String(formdata.get('name') ?? "").trim();
        const imageUrl = String(formdata.get("imageUrl") ?? "").trim();

        const newError: FormErrors = {};
        let image = "";

        if (!name) {
            newError.name = "Name is required!";
        }

        if (imageUrl) {
            let hostName = "";
            try {
                hostName = new URL(imageUrl).hostname;
            } catch {
                newError.imageUrl = "Please enter a valid image URL!";
            }

            if (!newError.imageUrl) {
                if (!ALLOWED_IMAGE_HOSTS.includes(hostName)) {
                    newError.imageUrl = "Only images.unsplash.com and plus.unsplash.com images are allowed!";
                } else {
                    image = imageUrl;
                }
            }
        }

        setErrors(newError);

        // Stop here so invalid input is never sent to better-auth
        if (Object.keys(newError).length > 0) return;

        setLoading(true);

        try {
            // Only send `image` when the user typed one, so the avatar is not wiped
            const { error } = image
                ? await updateUser({ name, image })
                : await updateUser({ name });

            if (error) {
                toast.error(error.message || "Profile update failed!");
                return;
            }

            toast.success("User Update successful");
            setOpen(false);
            router.refresh();
        } catch {
            toast.error("Profile update failed!");
        } finally {
            setLoading(false);
        }
    }


    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <button type="button" onClick={() => setOpen(true)}
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-primary/20 bg-background px-5 text-sm font-semibold text-foreground shadow-sm transition hover:border-primary hover:bg-primary/5 cursor-pointer"
            >
                <Pencil size={16} />
                Edit Profile
            </button>

            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
                <DialogHeader className="items-center text-center">
                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-sky-500/10 text-sky-500">
                        <TypeOutline size={27} />
                    </div>

                    <DialogTitle className="text-xl font-bold">
                        Edit Profile
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={handleUpdate}>

                    <div className="space-y-3">
                        <div className="space-y-2">
                            <Label labelText="Name" isRequired={true} />
                            <IconInput Icon={User} type="text" name="name" placeholder="Enter your name..." defaultValue={user?.name} />
                            {errors.name && (
                                <p className="pl-1 text-xs font-medium text-red-500">{errors.name}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label labelText="Profile Url" />
                            <IconInput Icon={Image} type="url" name="imageUrl" placeholder="https://example.com/image.png..." defaultValue={user?.image as string} />
                            {errors.imageUrl && (
                                <p className="pl-1 text-xs font-medium text-red-500">{errors.imageUrl}</p>
                            )}
                        </div>
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

    )
};

export default ProfileEditBtn;