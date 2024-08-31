"use client"

import React from 'react'
import Image from 'next/image' 
import { useState } from 'react'

const Menu = () => {
const [open,setOpen]=useState(false)
  return (
    <div>
        {!open ?(  <Image src="/open.png" alt="Open" width={20} height={20} onClick={()=>setOpen(true)} />
):(
        <Image src="/close.png" alt="Close" width={20} height={20} onClick={()=>setOpen(false)} />
    )}
</div>
      
  )
}

export default Menu

