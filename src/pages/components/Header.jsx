import Link from 'next/link';
import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4">
        {/* Logo - Collegamento alla home */}
        <div className="flex items-center">
          <Link href="/" legacyBehavior>
            <a>
              <img src="/logo.png" alt="Logo" className="h-12 w-auto mr-4" />
            </a>
          </Link>
        </div>

        {/* Menu di Navigazione - Hamburger Icon per mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>

        <nav className={`md:flex md:space-x-8 md:items-center ${menuOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-gray-800 justify-center">
            <li className="uppercase text-sm font-light">
              <Link href="/aboutus" legacyBehavior>
                <a className="relative hover:text-red-600 hover:after:content-[''] hover:after:absolute hover:after:bg-red-600 hover:after:h-[2px] hover:after:w-full hover:after:left-0 hover:after:bottom-[-2px] hover:after:transition-all">
                  Chi Siamo
                </a>
              </Link>
            </li>
            <li className="uppercase text-sm font-light">
              <Link href="/services" legacyBehavior>
                <a className="relative hover:text-red-600 hover:after:content-[''] hover:after:absolute hover:after:bg-red-600 hover:after:h-[2px] hover:after:w-full hover:after:left-0 hover:after:bottom-[-2px] hover:after:transition-all">
                  Servizi
                </a>
              </Link>
            </li>
            <li className="uppercase text-sm font-light">
              <Link href="/blog" legacyBehavior>
                <a className="relative hover:text-red-600 hover:after:content-[''] hover:after:absolute hover:after:bg-red-600 hover:after:h-[2px] hover:after:w-full hover:after:left-0 hover:after:bottom-[-2px] hover:after:transition-all">
                  Blog
                </a>
              </Link>
            </li>
            <li className="uppercase text-sm font-light">
              <Link href="/contact" legacyBehavior>
                <a className="relative hover:text-red-600 hover:after:content-[''] hover:after:absolute hover:after:bg-red-600 hover:after:h-[2px] hover:after:w-full hover:after:left-0 hover:after:bottom-[-2px] hover:after:transition-all">
                  Contatti
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Icone Social */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-800 hover:text-black">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="text-gray-800 hover:text-green-500">
            <FaWhatsapp size={20} />
          </a>
          <a href="#" className="text-gray-800 hover:text-red-600">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}
