"use client";

import React, { useState } from "react";
import Image from "next/image";

const FaqSection = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "Who can participate in GWP camps?",
            answer:
                "Our camps are open to athletes aged 13–18, from beginners to advanced players, who are passionate about improving their water polo skills.",
        },
        {
            question: "Where are the camps held?",
            answer:
                "Our camps are held at various locations worldwide. Please refer to the events page for specific locations and dates.",
        },
        {
            question: "What is included in the camp package?",
            answer:
                "The camp package includes training sessions, accommodation, meals, and access to coaching from top athletes.",
        },
        {
            question: "Do I need prior water polo experience to join?",
            answer:
                "No prior water polo experience is required. Our programs cater to players of all skill levels.",
        },
    ];

    return (
        <>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-6 my-12 lg:py-16 px-4">
                {/* Left Content */}
                <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-4 flex flex-col space-y-4 lg:space-y-6 order-2 lg:order-1">
                    <h2 className="text-2xl lg:text-5xl font-semibold text-[#222021] font-montserrat">
                        Ready to Elevate Your Game?
                    </h2>
                    <p className="text-base lg:text-xl text-[#222021] font-montserrat lg:leading-8">
                        Join the growing community of water polo athletes who are redefining
                        their limits and achieving their goals. Whether you&#39;re here to enhance
                        your skills, build lifelong connections, or experience the joy of the
                        sport, Global Water Polo is your ultimate destination. Take the first
                        step toward excellence today!
                    </p>

                    {/* FAQs */}
                    <div className="space-y-4 pt-4 border-t border-[#D6D7DD]">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-[#D6D7DD] pb-4 cursor-pointer"
                            >
                                <div
                                    className="flex justify-between items-center"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <h3 className="font-semibold text-[#222021] font-montserrat text-base">
                                        {faq.question}
                                    </h3>
                                    <span className="text-[#B39852] text-xl font-sans">
                                      {
                                          activeFaq === index ?
                                              (
                                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0 0H16V16H0V0Z" fill="#F8F8F8"/>
                                                      <path d="M12.8487 14.465L8.00001 9.61625L3.15128 14.465L1.53503 12.8487L6.38377 8.00001L1.53503 3.15128L3.15128 1.53503L8.00001 6.38377L12.8487 1.53503L14.465 3.15128L9.61625 8.00001L14.465 12.8487L12.8487 14.465Z" fill="#222021"/>
                                                  </svg>
                                              ) : (
                                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z" fill="#222021"/>
                                                  </svg>
                                              )
                                      }
                                    </span>
                                </div>
                                {activeFaq === index && (
                                    <p className="mt-4 text-[#222021] font-montserrat text-base">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Image */}
                <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-7 relative order-1 lg:order-2">
                    <div className="w-full h-full rounded-lg relative shadow-lg aspect-[803/786]">
                        <Image
                            src="/events-camp.jpg" // Replace with your actual image path
                            alt="Event"
                            layout="fill"
                            className="object-cover w-full h-full"
                        />
                        <div className="bg-gold absolute -right-4 -top-4 -z-10 w-full h-full"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqSection;
