"use client";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Montserrat } from "next/font/google";
import { Ubuntu } from "next/font/google";

export const montserrat_init = Montserrat({
    subsets: ["latin-ext"],
    display: "swap",
    variable: '--font-montserrat',
});

export const ubuntu_init = Ubuntu({
    subsets: ["latin-ext"],
    display: "swap",
    variable: '--font-ubuntu',
    weight: ["400", "500", "700"],
});

export default function DefaultLayout({
                                          children,
                                      }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header className={montserrat_init.className}/>
            <main>
                {children}
            </main>
            <Footer className={montserrat_init.className}/>
        </>
    );
}
