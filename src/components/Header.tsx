'use client';
import {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from "next/image";
import {usePathname} from "next/navigation";

type HeaderProps = {
    className?: string;
}

const Header: React.FC<HeaderProps> = (className) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const pathname = usePathname();
    const isBlackLink = pathname.startsWith("/events/") && pathname !== "/events";


    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        if (window.innerWidth > 1024) {
            window.addEventListener('scroll', handleScroll);
            handleScroll();
        }

        console.log('isScrolled', isScrolled);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolled]);

    return (
        <header className="fixed w-full z-20 px-4 bg-gold lg:bg-transparent h-[75px] flex items-center">
            <div className={`bg-primary lg:bg-transparent container mx-auto flex justify-between items-center p-2 rounded-lg ${isScrolled ? 'shadow-2xl' : ''} ${className}`} style={{backgroundColor: isScrolled ? 'white' : 'transparent'}}>
                {/* Hamburger Menu Icon */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden text-white text-3xl focus:outline-none"
                >
                    {menuOpen ? '✖' : '☰'}
                </button>
                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center justify-between text-white text-base font-medium w-full">
                    <Link href="/" passHref>
                        <span className={`bg-primary transition rounded-full ${isBlackLink || isScrolled? 'text-black':'text-white'} uppercase text-base py-2 lg:px-1 xl:px-3`}>Home</span>
                    </Link>
                    <Link href="/about" passHref>
                        <span className={`hover:bg-primary transition rounded-full ${isBlackLink || isScrolled? 'text-black':'text-white'} uppercase text-base py-2 lg:px-1 xl:px-3`}>About Us</span>
                    </Link>
                    <Link href="/gallery" passHref>
                        <span className={`hover:bg-primary transition rounded-full ${isBlackLink || isScrolled? 'text-black':'text-white'} uppercase text-base py-2 lg:px-1 xl:px-3`}>Gallery</span>
                    </Link>
                    <Link href="/coaching-staff" passHref>
                        <span className={`hover:bg-primary transition rounded-full ${isBlackLink || isScrolled? 'text-black':'text-white'} uppercase text-base py-2 lg:px-1 xl:px-3`}>Coaching Staff</span>
                    </Link>
                    {/* Logo */}
                    <Link
                        href={"/"}
                        className="hover:opacity-90 transition-opacity min-w-[70px]"
                    >
                        <Image
                            src={isBlackLink || isScrolled ? "/logo-black.png" : "/logo.png"}
                            alt="zagrebi logo"
                            height={70}
                            width={151}
                            priority
                        />
                    </Link>
                    <Link href="/newsletter" passHref>
                        <span className={`hover:bg-primary transition rounded-full ${isBlackLink || isScrolled? 'text-black':'text-white'} uppercase text-base py-2 lg:px-1 xl:px-3`}>Newsletter</span>
                    </Link>
                    <Link href="/testimonials" passHref>
                        <span className={`hover:bg-primary transition rounded-full ${isBlackLink || isScrolled? 'text-black':'text-white'} uppercase text-base py-2 lg:px-1 xl:px-3`}>Testimonials</span>
                    </Link>
                    <Link href="/contact" passHref>
                        <span className={`hover:bg-primary transition rounded-full ${isBlackLink || isScrolled? 'text-black':'text-white'} uppercase text-base py-2 lg:px-1 xl:px-3`}>Contact</span>
                    </Link>
                    <Link href="/join" passHref>
                        <span className={`bg-primary ${isBlackLink || isScrolled? 'text-black':'text-white'} lg:px-1 xl:px-3 py-2 rounded-full uppercase text-base transiti0n`}>
                            Join Us
                        </span>
                    </Link>
                </nav>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div
                    className="lg:hidden fixed top-[68px] border-t border-white left-0 w-full h-full bg-primary flex flex-col text-white space-y-1 px-6 py-4">
                    <div>
                        <Link
                        href="/"
                        className="hover:bg-primary transition inline-block rounded-full font-bold text-xl py-2 px-4"
                        passHref
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                        </Link></div>
                    <div>
                        <Link
                        href="/about"
                        passHref
                        className="hover:bg-primary transition inline-block rounded-full font-bold text-xl py-2 px-4"
                        onClick={() => setMenuOpen(false)}
                    >
                        About Us
                        </Link></div>
                    <div>
                        <Link
                        href="/gallery"
                        passHref
                        className="hover:bg-primary transition inline-block rounded-full font-bold text-xl py-2 px-4"
                        onClick={() => setMenuOpen(false)}
                    >
                        Gallery
                        </Link></div>
                    <div>
                        <Link
                        href="/coaching-staff"
                        passHref
                        className="hover:bg-primary transition inline-block rounded-full font-bold text-xl py-2 px-4"
                        onClick={() => setMenuOpen(false)}
                    >
                        Coaching Staff
                        </Link></div>
                    <div>
                        <Link
                        href="/newsletter"
                        passHref
                        className="hover:bg-primary transition inline-block rounded-full font-bold text-xl py-2 px-4"
                        onClick={() => setMenuOpen(false)}
                    >
                        Newsletter
                        </Link></div>
                    <div>
                        <Link
                        href="/testimonials"
                        passHref
                        className="hover:bg-primary transition inline-block rounded-full font-bold text-xl py-2 px-4"
                        onClick={() => setMenuOpen(false)}
                    >
                        Testimonials
                        </Link></div>
                    <div>
                        <Link
                        href="/contact"
                        passHref
                        className="hover:bg-primary transition inline-block rounded-full font-bold text-xl py-2 px-4"
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                        </Link></div>
                    <div className="pt-5">
                        <Link
                        href="/join"
                        passHref
                        className="bg-yellow-700 text-white px-5 py-2 mt rounded-full font-bold text-xl hover:bg-yellow-600 transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        Join Us
                        </Link></div>
                </div>
            )}
        </header>
    );
};

export default Header;
