"use client";

import { signOut } from "@/lib/auth/auth-client";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const result = await signOut();
      if (result?.data) {
        router.push("/sign-in");
      } else {
        alert("Error signing out");
      }
    } catch (error) {
      console.error("Sign out error:", error);
      alert("Error signing out");
    }
  };

  return (
    <DropdownMenuItem onClick={handleSignOut}>
      Log Out
    </DropdownMenuItem>
  );
}