// import {api} from "@/lib/api";
// import type { Metadata } from "next";

// export async function getContactPageData() {
//     try {
//         const pageData = await api.get("/pages/contact");
//         return pageData;
//     } catch (error) {
//         console.error("Failed to fetch contact page data:", error);
//         return null;
//     }
// }

// export async function generateMetadata(): Promise<Metadata> {
//     try {
//         const pageData = await api.get("/pages/contact");
//         const imageUrl = pageData?.heroImage?.url;

        
//         return {
//             title: pageData.seoTitle || "Contact Us | GWP",
//             description: pageData.seoDescription || "Get in touch with GWP. Contact us for any questions, inquiries, or support.",
//             openGraph: {
//                 title: pageData.seoTitle || "Contact Us | GWP",
//                 description: pageData.seoDescription || "Get in touch with GWP. Contact us for any questions, inquiries, or support.",
//                 type: "website",
//                 images: [
//                     {
//                         url: imageUrl,
//                         width: 1200,
//                         height: 630,
//                         alt: pageData?.heroImage?.title || "Contact GWP"
//                     }
//                 ]
//             },
//             twitter: {
//                 card: 'summary_large_image',
//                 title: pageData.seoTitle || "Contact Us | GWP",
//                 description: pageData.seoDescription || "Get in touch with GWP. Contact us for any questions, inquiries, or support.",
//                 images: [imageUrl],
//             }
//         };
//     } catch (error) {
//         // Fallback metadata if API request fails
//         return {
//             title: "Contact Us | GWP",
//             description: "Get in touch with GWP. Contact us for any questions, inquiries, or support.",
//             openGraph: {
//                 title: "Contact Us | GWP",
//                 description: "Get in touch with GWP. Contact us for any questions, inquiries, or support.",
//                 type: "website",
//                 images: [
//                     {
//                         url: '/images/default-contact.jpg',
//                         width: 1200,
//                         height: 630,
//                         alt: "Contact GWP"
//                     }
//                 ]
//             },
//             twitter: {
//                 card: 'summary_large_image',
//                 title: "Contact Us | GWP",
//                 description: "Get in touch with GWP. Contact us for any questions, inquiries, or support.",
//                 images: ['/images/default-contact.jpg'],
//             }
//         };
//     }
// }
