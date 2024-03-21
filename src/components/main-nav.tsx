import Link from 'next/link'
import React from 'react'

const MainNav = () => {
  return (
    <header className="bg-slate-700 p-7 ">
    <section className="max-w-4xl mx-auto flex justify-between items-center ">
      <Link href={'/'}>Home</Link>
      <div className="flex space-x-4">
        <Link href={'/register'}>Register</Link>
        <Link href={'/login'}>Log in</Link>
      </div>
    </section>
  </header>
  )
}

export default MainNav