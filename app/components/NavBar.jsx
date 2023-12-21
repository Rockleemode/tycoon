import React from 'react';
import Link  from 'next/link';
import Image from 'next/image'
import logo from './download.png'

export default function NavBar() {
  return (
    <nav>
      <Image 
      src={logo} 
      alt= "rocklee's logo"
      height={100}
      width={100}
      quality={100}
      />
      <h2>Rock's Help Desk</h2>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
