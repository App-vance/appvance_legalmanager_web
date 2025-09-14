"use client"

import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'


import { navigationLinks } from '@/helpers/nav'
import Drawer from '@/components/Drawer'
import Link from 'next/link'
import { scrollToSection } from '@/helpers/nav'

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <header className='flex justify-between px-8 py-10 md:px-20 xl:px-56 items-center bg-[#001970] text-white text-body lg:py-11'>
        <div className='w-44 h-9 lg:w-52 relative'>
          <Link href="/">
            <Image
              src="/logoWhite.svg"
              alt="Appvance Legal Manager Logo"
              fill
              priority
              className='object-contain'
            />
          </Link>
        </div>
        <div className='lg:hidden z-100'>
          {
            !isOpen ? (
              <Bars3Icon className='h-8 w-8 cursor-pointer text-white' onClick={toggleDrawer} />
            ) : (
              <XMarkIcon className='h-8 w-8 cursor-pointer text-white' onClick={toggleDrawer} />
            )
          }
        </div>
        <nav className='hidden lg:block'>
          <ul className='flex lg:gap-6 xl:gap-9'>
            {navigationLinks.map((link) => (
              <li
                key={link.name}
                className="
                  relative inline-block text-body font-quicksand
                  before:content-[''] before:absolute before:inset-0 before:cursor-pointer before:bg-secondary-blue before:rounded-lg
                  before:opacity-0 hover:before:opacity-100
                  before:transition-opacity before:duration-300
                "
              >
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="relative z-10 px-1 cursor-pointer"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
      {isOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 bg-black opacity-50 z-20"
        ></div>
      )}
    </>
  )
}

export default Header