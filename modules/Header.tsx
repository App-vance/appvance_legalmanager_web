"use client"

import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'


import { navigationLinks } from '@/helpers/nav'
import Drawer from '@/components/Drawer'

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className='flex justify-between px-8 py-10 md:px-20 lg:px-56 items-center bg-[#001970] text-white text-body lg:py-11'>
        <div className='w-44 h-9 lg:w-52 relative'>
          <Image
            src="/logoWhite.svg"
            alt="Appvance Legal Manager Logo"
            fill
            priority
            className='object-contain'
          />
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
          <ul className='flex gap-9'>
            {navigationLinks.map((link) => (
              <li key={link.name} className='text-body'>
                <button className='cursor-pointer hover:text-secondary-blue transition-colors duration-200' onClick={() => scrollToSection(link.href)}>{link.name}</button>
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