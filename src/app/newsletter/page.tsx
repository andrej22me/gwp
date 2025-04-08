'use server';
import React from "react";
import {api} from "@/lib/api";

import type { Metadata } from "next";
import Newsletter from "@/components/newsletter/Newsletter";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const pageData = await api.get("/pages/newsletter");
    
    return {
      title: pageData.seoTitle || "Newsletter | GWP",
      description: pageData.seoDescription || "Stay connected with the Global Water Polo community! Join our newsletter for exclusive updates on training programs, events, and insights from  top-level coaches.",
      openGraph: {
            title: pageData.seoTitle || "Newsletter | GWP",
            description: pageData.seoDescription || "Stay connected with the Global Water Polo community! Join our newsletter for exclusive updates on training programs, events, and insights from  top-level coaches.",
            type: "website",
            images: [
                {
                    url: pageData.heroImage.url,
                    width: 1200,
                    height: 630,
                    alt: pageData.heroImage.title || "Newsletter GWP"
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: pageData.seoTitle || "Newsletter | GWP",
            description: pageData.seoDescription || "Stay connected with the Global Water Polo community! Join our newsletter for exclusive updates on training programs, events, and insights from  top-level coaches.",
        }
    };
  } catch (error) {
    // Fallback metadata if API request fails
    return {
      title: "Newsletter | GWP",
      description: "Stay connected with the Global Water Polo community! Join our newsletter for exclusive updates on training programs, events, and insights from  top-level coaches.",
      openGraph: {
        title: "Newsletter | GWP",
        description: "Stay connected with the Global Water Polo community! Join our newsletter for exclusive updates on training programs, events, and insights from  top-level coaches.",
        type: "website",
    },
    twitter: {
        card: 'summary_large_image',
        title: "Newsletter | GWP",
        description: "Stay connected with the Global Water Polo community! Join our newsletter for exclusive updates on training programs, events, and insights from  top-level coaches.",
    }
    };
  }
}



async function Page() {
    const data = await api.get("/pages/newsletter/components");
    console.log(data);

    return (
       <Newsletter initialData={data}/>
    );
}

export default Page;
