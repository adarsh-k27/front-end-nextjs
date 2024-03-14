import PublicLayout from '@/components/Layouts/PublicLayout'
import React from 'react'

type Props = {
    children:React.ReactNode
}

export default function SignInLayout({children}: Props) {
  return (
    <html>
        <body>
            <PublicLayout />
            {
                children
            }
        </body>
    </html>
  )
}