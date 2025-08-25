import React from 'react'
import Image from 'next/image'

import { navigationLinks } from '@/helpers/nav'

const Header = () => {
  return (
    <header className='flex justify-between xl:px-56 items-center bg-[#001970] text-white text-body py-11'>
      <Image
        src="/logoWhite.svg"
        alt="Appvance Legal Manager Logo"
        width={200}
        height={33}
        className='object-contain'
      />
      <nav>
        <ul className='flex gap-9'>
          {navigationLinks.map((link) => (
            <li key={link.name} className='text-body' >
              {link.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header