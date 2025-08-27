import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type DrawerProps = {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const Drawer = ({isOpen, toggleDrawer}: DrawerProps) => {
  return (
      <div
        className={`fixed top-0 left-0 w-56 h-full py-10 pl-8 bg-primary-blue text-white transition-transform transform duration-1000 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-30`} 
      >
           <div className='w-44 h-9 relative'>
                  <Image
                    src="/logoWhite.svg"
                    alt="Appvance Legal Manager Logo"
                    fill
                    priority
                    className='object-contain'
                  />
                </div>
        <nav className='mt-16'>
          <ul className="space-y-8 text-base">
            <li key={1}>
                  <Link href={""} onClick={toggleDrawer}>hola</Link>
                </li>
          </ul>
        </nav>
      </div>
  )
}

export default Drawer