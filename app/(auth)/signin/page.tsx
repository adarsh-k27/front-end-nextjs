"use client"
import React from 'react'
import { Metadata } from "next";
import { signIn } from "next-auth/react";
import { error } from 'console';

type Props = {}

// export const metadata: Metadata = {
//   title: "Authentication",
//   description: "Authentication forms built using the components. and its Github Authentication",
// };

const handleSignIn=async()=>{
const callbackUrl=process.env.NEXT_PUBLIC_NEXTAUTH_CALLBACK_URL
console.log("CallBackUrl",callbackUrl);
alert(callbackUrl)
 signIn("github",{callbackUrl,redirect:true}).then((res)=>{
  console.log('====================================');
  console.log("response",res);
  console.log('====================================');
}).catch((error:any)=>{
  console.log('====================================');

  console.log("error",error);
  console.log('====================================');
})
}


export default function SignInPage({}: Props) {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Login To My Deploy App</h1>
        <button
          className="bg-green-900 text-white font-bold py-2 px-4 rounded-lg ml-11"
          onClick={handleSignIn}
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  )

}