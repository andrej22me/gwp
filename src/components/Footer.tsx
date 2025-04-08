// Import necessary modules
'use client';
import React from "react";
import Image from "next/image";

type FooterProps = {
    className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
    return (
        <footer className={`bg-[#b59856] md:px-20 lg:px-0 text-white py-6 sm:pt-20 md:pt-20 md:py-20 font-montserrat ${className}`}>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-20 lg:gap-10 xl:gap-20 2xl:gap-[145px]">
                {/* Logo Section */}
                <div className="col-span-1 xl:col-span-2 text-center md:text-left">
                    <Image
                        src={'/logo.png'} alt={'GWP Logo'}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="max-w-52 md:max-w-fit mx-auto md:mx-0"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>

                {/* Menu Section */}
                <div className="text-center md:text-left">
                    <h3 className="font-semibold mb-4 text-2xl">Menu</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:underline font-montserrat">Home</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Products</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Rental Service</a>
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="text-center md:text-left">
                    <h3 className="font-semibold mb-4 text-2xl">Contact</h3>
                    <p className="text-base font-montserrat leading-6">ModernRides@contact.com</p>
                    <p className="text-base font-montserrat leading-6">+012-345-6789</p>
                    <p className="text-base font-montserrat leading-6">9889 Lorem Ipsum Street,</p>
                    <p className="text-base font-montserrat leading-6">Pellentesque, CA, USA</p>
                </div>

                {/* Social Section */}
                <div className="text-center md:text-left">
                    <h3 className="font-semibold mb-4 text-2xl">Social</h3>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="#" className="hover:opacity-75">
                            <svg width="11" height="18" viewBox="0 0 11 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.46441 5.80996H0.727539V8.62327H3.46441V17.0632H7.56972V8.62327H10.0603L10.3066 5.80996H7.56972V4.63822C7.56972 3.96584 7.70109 3.69998 8.3333 3.69998H10.3066V0.18335H7.01687C4.55642 0.18335 3.46441 1.29742 3.46441 3.4299V5.80996Z"
                                    fill="#B39852"/>
                            </svg>
                        </a>
                        <a href="#" className="hover:opacity-75">
                            <svg width="17" height="15" viewBox="0 0 17 15" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.5443 1.91802C15.9408 2.19372 15.2908 2.3794 14.6093 2.4638C15.3058 2.03477 15.8382 1.35676 16.0913 0.547939C15.4399 0.944615 14.7188 1.23298 13.9511 1.38771C13.338 0.713924 12.4609 0.293335 11.4934 0.293335C9.31756 0.293335 7.71923 2.3794 8.2105 4.54565C5.41205 4.40076 2.92834 3.02224 1.26706 0.927736C0.384418 2.48349 0.810002 4.52033 2.30981 5.5514C1.75833 5.53312 1.23969 5.37698 0.78537 5.11816C0.748422 6.72174 1.8678 8.22264 3.48803 8.55742C3.01455 8.68965 2.49455 8.72059 1.96633 8.6165C2.39465 9.99221 3.64129 10.9923 5.11373 11.0205C3.69466 12.1627 1.91159 12.6733 0.123047 12.4567C1.61464 13.4399 3.38403 14.0124 5.28615 14.0124C11.5426 14.0124 15.0759 8.58134 14.8625 3.7101C15.522 3.22339 16.0927 2.61291 16.5443 1.91802Z"
                                    fill="#B39852"/>
                            </svg>
                        </a>
                        <a href="#" className="hover:opacity-75">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M8.80827 0.18335C6.57772 0.18335 6.29993 0.193196 5.42276 0.235396C2.43957 0.376061 0.783763 2.0767 0.64692 5.14321C0.607235 6.04487 0.597656 6.33183 0.597656 8.62327C0.597656 10.9161 0.607235 11.2031 0.64692 12.1033C0.783763 15.1684 2.43957 16.8719 5.42276 17.0125C6.29993 17.0533 6.57772 17.0632 8.80827 17.0632C11.0388 17.0632 11.318 17.0533 12.1951 17.0125C15.1729 16.8719 16.8355 15.1712 16.9696 12.1033C17.0093 11.2031 17.0189 10.9161 17.0189 8.62327C17.0189 6.33183 17.0093 6.04487 16.9696 5.14321C16.8355 2.08092 15.1783 0.374654 12.1951 0.235396C11.318 0.193196 11.0388 0.18335 8.80827 0.18335ZM8.80834 1.70537C11.0006 1.70537 11.2606 1.71381 12.1268 1.7546C14.3532 1.8587 15.3905 2.94323 15.4931 5.21356C15.5315 6.10397 15.5397 6.36983 15.5397 8.62329C15.5397 10.8767 15.5315 11.144 15.4931 12.033C15.3905 14.3019 14.3546 15.3893 12.1268 15.4934C11.2606 15.5328 11.0019 15.5426 8.80834 15.5426C6.61611 15.5426 6.35611 15.5342 5.49126 15.4934C3.26071 15.3879 2.22754 14.2991 2.1249 12.033C2.08659 11.144 2.07701 10.8767 2.07701 8.62329C2.07701 6.36983 2.08659 6.10257 2.1249 5.21356C2.22617 2.94182 3.26344 1.85729 5.49126 1.7532C6.35611 1.7124 6.61611 1.70537 8.80834 1.70537ZM4.59171 8.62336C4.59171 6.22924 6.48015 4.28946 8.80786 4.28946C11.1356 4.28946 13.024 6.23065 13.024 8.62336C13.024 11.0175 11.1356 12.9573 8.80786 12.9573C6.48015 12.9573 4.59171 11.0175 4.59171 8.62336ZM8.80793 11.4362C7.29581 11.4362 6.07106 10.1773 6.07106 8.62292C6.07106 7.06998 7.29581 5.80962 8.80793 5.80962C10.3187 5.80962 11.5462 7.06857 11.5462 8.62292C11.5462 10.1773 10.3187 11.4362 8.80793 11.4362ZM12.205 4.11919C12.205 3.55934 12.647 3.1064 13.1902 3.1064C13.7362 3.1064 14.1769 3.55934 14.1769 4.11919C14.1769 4.67904 13.7349 5.13198 13.1902 5.13198C12.6456 5.13198 12.205 4.67763 12.205 4.11919Z"
                                      fill="#B39852"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="text-center md:text-left mt-8 border-t border-white pt-6 lg:mt-24">
                    <p>Copyright <a href="https://digitaleagle.me/" target="_blank">Digitaleagle</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
