'use client'
import { signIn, signOut } from 'next-auth/react'
import Link from 'next/link'


export default function Home() {
  return (
    <h1 className='flex justify-center items-center p-5 text-green-500 text-lg font-bold'>
      This is The Home Page! Everyone can see it.
    </h1>
  )
}
