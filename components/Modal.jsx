import React from "react";

// import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"
export function Modal() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>

      </>
    );
  } else {
    return (
      <>
        <button onClick={()=>{signIn()}} className="rounded px-3 py-2 text-gray-50 hover:bg-orange-700 bg-orange-500">
          Sign In
        </button>
       
      </>
    );
  }
}
