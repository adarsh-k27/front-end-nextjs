"use client";
import React from 'react'
import { signIn } from "next-auth/react";

type Props = {}

const handleSignIn = async () => {
    const callbackUrl = process.env.NEXT_PUBLIC_NEXTAUTH_CALLBACK_URL
    console.log("CallBackUrl", callbackUrl);
    alert(callbackUrl)
    signIn("github", { callbackUrl, redirect: true }).then((res) => {
  
    }).catch((error: any) => {
  
    })
  }

export default function LoginButton({ }: Props) {
    return (
        <button
            className="bg-green-900 text-white font-bold py-2 px-4 rounded-lg ml-11"
            onClick={handleSignIn}
        >
            Sign in with GitHub
        </button>
    )
}