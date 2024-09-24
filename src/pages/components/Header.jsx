import Link from 'next/link';
import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo - Collegamento alla home */}
        <div className="flex items-center">
          <Link href="/" legacyBehavior>
            <a>
              <img src="/logo.png" alt="Logo" className="h-14 w-auto mr-4" />
            </a>
          </Link>
        </div>

        {/* Menu di Navigazione */}
        <nav className="flex-grow">
          <ul className="flex space-x-8 text-gray-800 justify-center">
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
        <div className="flex space-x-4">
          <a href="#" className="text-gray-800 hover:text-black"><FaLinkedin size={20} /></a>
          <a href="#" className="text-gray-800 hover:text-green-500"><FaWhatsapp size={20} /></a>
          <a href="#" className="text-gray-800 hover:text-red-600"><FaEnvelope size={20} /></a>
        </div>
      </div>
    </header>
  );
}
