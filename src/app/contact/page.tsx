'use server';
import React from "react";
import {api} from "@/lib/api";

import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const pageData = await api.get("/pages/contact");
    
    return {
      title: pageData.seoTitle || "Contact Us | GWP",
      description: pageData.seoDescription || "Get in touch with GWP. Contact us for any questions, inquiries, or support.",
      openGraph: {
            title: pageData.seoTitle || "Contact Us | GWP",
            description: pageData.seoDescription || "Get in touch with GWP. Contact us for any questions, inquiries, or support.",
            type: "website",
            images: [
                {
                    url: pageData.heroImage.url,
                    width: 1200,
                    height: 630,
                    alt: pageData.heroImage.title || "Contact GWP"
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: pageData.seoTitle || "Contact Us | GWP",
            description: pageData.seoDescription || "Get in touch with GWP. Contact us for any questions, inquiries, or support.",
        }
    };
  } catch (error) {
    // Fallback metadata if API request fails
    return {
      title: "Contact Us | GWP",
      description: "Get in touch with GWP. Contact us for any questions, inquiries, or support.",
      openGraph: {
        title: "Contact Us | GWP",
        description: "Get in touch with GWP. Contact us for any questions, inquiries, or support.",
        type: "website",
    },
    twitter: {
        card: 'summary_large_image',
        title: "Contact Us | GWP",
        description: "Get in touch with GWP. Contact us for any questions, inquiries, or support.",
    }
    };
  }
}



async function Page() {
    const data = await api.get("/pages/contact/components");
    console.log(data);

    return (
       <ContactForm initialData={data}/>
    );
}

export default Page;
