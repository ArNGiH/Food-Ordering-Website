import React from 'react'
import Menu from './Menu'
import Link from 'next/link'

function Navbar() {
 return (
    <div className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase'>

        <div className='text-xl'>
            <Link href='/'>
              Zwiggy
            </Link>
        </div>

        <div>
            <Menu/>
        </div>
    </div>
  )
}

export default Navbar