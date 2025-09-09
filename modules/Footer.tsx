'use client';
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from 'next/image';
import Link from "next/link";
import { navigationLinks, scrollToSection } from "@/helpers/nav";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="font-quicksand">
        <div className="flex flex-col px-8 md:px-20 lg:px-56 py-10 bg-primary-blue text-white lg:flex-row lg:py-20">
          <div className="flex-1 flex flex-col gap-5 mb-8 lg:mb-0">
            <div className='hidden lg:block lg:w-52 lg:h-9 lg:relative lg:mb-10'>
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
            {
              navigationLinks.map((link) => (
                <button key={link.name} onClick={() => scrollToSection(link.id)} className='text-body lg:text-xl text-left cursor-pointer hover:text-secondary-blue transition-colors duration-200'>{link.name}</button>
              ))
            }
            <div className="flex flex-col gap-5 lg:flex-row lg:pt-10 lg:gap-10 lg:mb-6">
              <p className="inline-flex items-center gap-4">
                <PhoneIcon className="h-4 w-4" />
                <span>+574 322 03 51</span>
              </p>
              <p className="inline-flex items-center gap-4">
                <EnvelopeIcon className="h-4 w-4" />
                <span>info@consultoriasempresariales.co</span>
              </p>
            </div>
            <p className="hidden lg:block lg:!text-small">&copy; {year} Consultorías Empresariales. Todos los derechos reservados. Diseño y desarrollo por Appvance.</p>
          </div>
          <div className="flex-1 w-full">
            <div className="w-full h-[21.25rem] lg:h-96 lg:w-[37.125rem] lg:ml-auto">
              <iframe
                width="100%"
                height="100%"
                className="rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1402.4083574288577!2d-75.58514341574745!3d6.182942197270802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46825cb710c439%3A0x36858de39c430d03!2sComplex%20las%20vegas!5e0!3m2!1ses-419!2sco!4v1628044743201!5m2!1ses-419!2sco"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-8 px-10 text-small text-gray gap-4 text-center lg:hidden">
          <span>&copy; {year} Consultorías Empresariales. </span>
          <span>Todos los derechos reservados. Diseño y desarrollo por Appvance.</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;