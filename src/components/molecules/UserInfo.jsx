"use client";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const router = useRouter();
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut();
    // Redirect to the homepage after successful logout
    router.push("/");
  };

  return (
        <p>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </p>
  );
}

