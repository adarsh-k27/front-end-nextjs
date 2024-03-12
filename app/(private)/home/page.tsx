"use client"
import React from 'react'
import {useSession} from 'next-auth/react'
type Props = {}

export default function HomePage({}: Props) {
  const {data:session,status,update}=useSession()
  console.log("SessionHere",session,status);
  
  return (
    <div>HomePage</div>
  )
}