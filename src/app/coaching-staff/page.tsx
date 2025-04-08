'use server';
import React from "react";
import {api} from "@/lib/api";

import type { Metadata } from "next";
import Coaching from "@/components/coaching-staff/Coaching";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const pageData = await api.get("/pages/coaching-staff");
    
    return {
      title: pageData.seoTitle || "Coaching Staff | GWP",
      description: pageData.seoDescription || "Welcome to Global Water Polo (GWP), a community where the love for water polo transcends borders, combining tradition, innovation, and excellence.1",
      openGraph: {
            title: pageData.seoTitle || "Coaching Staff | GWP",
            description: pageData.seoDescription || "Welcome to Global Water Polo (GWP), a community where the love for water polo transcends borders, combining tradition, innovation, and excellence.1",
            type: "website",
            images: [
                {
                    url: pageData.heroImage.url,
                    width: 1200,
                    height: 630,
                    alt: pageData.heroImage.title || "Coaching Staff GWP"
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: pageData.seoTitle || "Coaching Staff | GWP",
            description: pageData.seoDescription || "Welcome to Global Water Polo (GWP), a community where the love for water polo transcends borders, combining tradition, innovation, and excellence.1",
        }
    };
  } catch (error) {
    // Fallback metadata if API request fails
    return {
      title: "Coaching Staff | GWP",
      description: "Welcome to Global Water Polo (GWP), a community where the love for water polo transcends borders, combining tradition, innovation, and excellence.1",
      openGraph: {
        title: "Coaching Staff | GWP",
        description: "Welcome to Global Water Polo (GWP), a community where the love for water polo transcends borders, combining tradition, innovation, and excellence.1",
        type: "website",
    },
    twitter: {
        card: 'summary_large_image',
        title: "Coaching Staff | GWP",
        description: "Welcome to Global Water Polo (GWP), a community where the love for water polo transcends borders, combining tradition, innovation, and excellence.1",
    }
    };
  }
}


async function Page() {
    const data = await api.get("/pages/coaching-staff/components");

    return (
       <Coaching initialData={data}/>
    );
}

export default Page;
