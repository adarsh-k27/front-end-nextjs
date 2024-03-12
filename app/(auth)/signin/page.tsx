
import React from 'react'

import Image from 'next/image';
import LoginButton from '@/components/next-auth-provider/clientComponents/buttons/loginButton';

type Props = {}

// export const metadata: Metadata = {
//   title: "Authentication",
//   description: "Authentication forms built using the components. and its Github Authentication",
// };




export default function SignInPage({ }: Props) {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Login To My Deploy App</h1>
        <div className="flex items-center">
          <Image src="/download.png" alt="GitHub Logo" className="w-12 h-12 mr-4" width={100} height={100} />

          <LoginButton />
        </div>

      </div>
    </div>


  )

}