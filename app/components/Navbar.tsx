'use client'
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // close mobile menu when route change
    useEffect(() => {
        setIsOpen(false)
    }, [pathname])


    // close mobile menu when click outsite of the mobile menu

    useEffect(() => {

        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && !(event.target as Element).closest('.navbar-container')) {
                setIsOpen(false)
            }

        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);


    }, [isOpen])



    const navLinks = [
        { name: "Home", path: '/' },
        { name: "About", path: '/about' },
        { name: "Service", path: '/service' },
        { name: "Contact", path: '/contact' }
    ];


    return (
        <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
            <div className="navbar-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <div className="flex-shrink-0 flex items-center">
                    <Link href={'/'} className="text-xl font-bold text-white hover:text-indigo-300 transition-colors">
                        NextNav
                    </Link>
                </div>
                {/* Desktop Navigation */}

                <div className="hidden md:flex  space-x-8 h-[100%] items-center ">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.path}
                            className="px-3 py-2 text-sm rounded-md font-medium hover:text-indigo-300 transition-colors">
                            {link.name}
                        </Link>

                    ))}
                </div>


                {/* mobile memu button */}


                <div className={`md:hidden flex items-end pt-2 ${isOpen ? 'flex flex-col ' : ''}`}>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex  items-start justify-end p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        aria-expanded={false}>
                        {/* <span className="sr-only">Open your Menu</span> */}
                        {isOpen ?
                            <XMarkIcon className="block h-6 w-6" aria-hidden={true} />
                            :
                            <Bars3Icon className="block h-6 w-6" aria-hidden={true} />
                        }
                    </button>

                    {/* mobile navigation */}

                    <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                        <div className="rounded-lg px-5 pt-6 pb-3 space-y-1 sm:px-3 bg-gray-800">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    className={`block px-2 py-2 mb-2 rounded-md text-xl font-medium ${pathname === link.path ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>


            </div>

        </nav>
    )


}

export default Navbar;