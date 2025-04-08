'use server';
import React from "react";
import {api} from "@/lib/api";

import type { Metadata } from "next";
import About from "@/components/about/About";
import Testimonials from "@/components/testimonials/Testimonials";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const pageData = await api.get("/pages/testimonials");
    
    return {
      title: pageData.seoTitle || "Testimonials | GWP",
      description: pageData.seoDescription || "Discover success stories from clients who transformed their careers and lives with Waterpollo Coaching. See how our expert coaches can help you achieve your goals!",
      openGraph: {
            title: pageData.seoTitle || "Testimonials | GWP",
            description: pageData.seoDescription || "Discover success stories from clients who transformed their careers and lives with Waterpollo Coaching. See how our expert coaches can help you achieve your goals!",
            type: "website",
            images: [
                {
                    url: pageData.heroImage.url,
                    width: 1200,
                    height: 630,
                    alt: pageData.heroImage.title || "About GWP"
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: pageData.seoTitle || "Testimonials | GWP",
            description: pageData.seoDescription || "Discover success stories from clients who transformed their careers and lives with Waterpollo Coaching. See how our expert coaches can help you achieve your goals!",
        }
    };
  } catch (error) {
    // Fallback metadata if API request fails
    return {
      title: "Testimonials | GWP",
      description: "Discover success stories from clients who transformed their careers and lives with Waterpollo Coaching. See how our expert coaches can help you achieve your goals!",
      openGraph: {
        title: "Testimonials | GWP",
        description: "Discover success stories from clients who transformed their careers and lives with Waterpollo Coaching. See how our expert coaches can help you achieve your goals!",
        type: "website",
    },
    twitter: {
        card: 'summary_large_image',
        title: "Testimonials | GWP",
        description: "Discover success stories from clients who transformed their careers and lives with Waterpollo Coaching. See how our expert coaches can help you achieve your goals!",
    }
    };
  }
}


async function Page() {
    const data = await api.get("/testimonials");

    return (
       <Testimonials initialData={data}/>
    );
}

export default Page;
