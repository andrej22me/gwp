'use server';
import React from "react";
import {api} from "@/lib/api";

import type { Metadata } from "next";
import Home from "@/components/home/Home";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const pageData = await api.get("/pages/home");
    
    return {
      title: pageData.seoTitle || "Home | GWP",
      description: pageData.seoDescription || "Welcome to Global Water Polo (GWP), a community where the love for water polo transcends borders, combining tradition, innovation, and excellence.",
      openGraph: {
            title: pageData.seoTitle || "Home | GWP",
            description: pageData.seoDescription || "Welcome to Global Water Polo (GWP), a community where the love for water polo transcends borders, combining tradition, innovation, and excellence.",
            type: "website",
            images: [
                {
                    url: pageData.heroImage.url,
                    width: 1200,
                    height: 630,
                    alt: pageData.heroImage.title || "Home GWP"
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: pageData.seoTitle || "Home | GWP",
            description: pageData.seoDescription || "Welcome to Global Water Polo (GWP), a community where the love for water polo transcends borders, combining tradition, innovation, and excellence.",
        }
    };
  } catch (error) {
    // Fallback metadata if API request fails
    return {
      title: "Home | GWP",
      description: "Welcome to Global Water Polo (GWP), a community where the love for water polo transcends borders, combining tradition, innovation, and excellence.",
      openGraph: {
        title: "Home | GWP",
        description: "Welcome to Global Water Polo (GWP), a community where the love for water polo transcends borders, combining tradition, innovation, and excellence.",
        type: "website",
    },
    twitter: {
        card: 'summary_large_image',
        title: "Home | GWP",
        description: "Welcome to Global Water Polo (GWP), a community where the love for water polo transcends borders, combining tradition, innovation, and excellence.",
    }
    };
  }
}


async function Page() {
    const data = await api.get("/pages/home/components");

    return (
       <Home initialData={data}/>
    );
}

export default Page;
