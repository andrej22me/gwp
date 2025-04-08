'use server';
import React from "react";
import {api} from "@/lib/api";

import type { Metadata } from "next";
import Gallery from "@/components/gallery/Gallery";
import GalleryPage from "@/components/gallery/GalleryPage";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const pageData = await api.get("/pages/gallery");
    
    return {
      title: pageData.seoTitle || "Gallery | GWP",
      description: pageData.seoDescription || "Welcome to Global Water Polo (GWP), a community where the love for water polo transcends borders, combining tradition, innovation, and excellence.1",
      openGraph: {
            title: pageData.seoTitle || "Gallery | GWP",
            description: pageData.seoDescription || "Welcome to Global Water Polo (GWP), a community where the love for water polo transcends borders, combining tradition, innovation, and excellence.1",
            type: "website",
            images: [
                {
                    url: pageData.heroImage.url,
                    width: 1200,
                    height: 630,
                    alt: pageData.heroImage.title || "Gallery GWP"
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: pageData.seoTitle || "Gallery | GWP",
            description: pageData.seoDescription || "Welcome to Global Water Polo (GWP), a community where the love for water polo transcends borders, combining tradition, innovation, and excellence.1",
        }
    };
  } catch (error) {
    // Fallback metadata if API request fails
    return {
      title: "Gallery | GWP",
      description: "Welcome to Global Water Polo (GWP), a community where the love for water polo transcends borders, combining tradition, innovation, and excellence.1",
      openGraph: {
        title: "Gallery | GWP",
        description: "Welcome to Global Water Polo (GWP), a community where the love for water polo transcends borders, combining tradition, innovation, and excellence.1",
        type: "website",
    },
    twitter: {
        card: 'summary_large_image',
        title: "Gallery | GWP",
        description: "Welcome to Global Water Polo (GWP), a community where the love for water polo transcends borders, combining tradition, innovation, and excellence.1",
    }
    };
  }
}


async function Page() {
    const data = await api.get("/pages/gallery/components");

    return (
       <GalleryPage initialData={data}/>
    );
}

export default Page;
