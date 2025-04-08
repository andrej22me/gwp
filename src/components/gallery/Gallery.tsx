"use client";

import Image from "next/image";
import { useState } from "react";
import { GalleryInterface } from "@/interfaces/Gallery";

interface GalleryProps {
    galleries: GalleryInterface[];
}

const filters = [
    { id: "TEAM", label: "TEAM TRENING" },
    { id: "MENS", label: "MAN TRENING" },
    { id: "WOMENS", label: "WOMEN TRENING" },
    { id: "INDIVIDUAL", label: "INDIVIDUALN TRENING" },
];

export default function Gallery({ galleries }: GalleryProps) {
    // Get available filters first
    const availableFilters = filters.filter(filter => 
        galleries.some(gallery => gallery.category === filter.id)
    );

    const [activeFilter, setActiveFilter] = useState<string>(availableFilters[0]?.id || "TEAM");
    const [selectedMedia, setSelectedMedia] = useState<{ src: string; alt: string; fileType?: string; } | null>(null);

    // Filter galleries based on the active filter category
    const filteredGalleries = galleries.filter(gallery => 
        gallery.category === activeFilter
    );

    // Flatten all media from filtered galleries
    const allMedia = filteredGalleries.flatMap(gallery => 
        (gallery.media?.map(image => {
            if(image.media) {
                return ({
                    src: image.media.url || '',
                    alt: image.media.title || gallery.title,
                    fileType: image.media.fileType
                })
            }
            return undefined;
        }).filter((item): item is { src: string; alt: string; fileType: string } => !!item) || [])
    );

    return (
        <>
            <main className="min-h-screen bg-white">
                <section className="py-8 md:py-16 px-6">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row">
                            <h2 className="text-4xl font-ubuntu font-semibold mr-4 mb-2">
                                {galleries[0]?.type === "PHOTO" ? "Photos" : "Videos"}
                            </h2>
                            <div className="lg:flex lg:flex-wrap lg:gap-4 mb-10 overflow-x-scroll lg:overflow-x-auto whitespace-nowrap pb-2">
                                {availableFilters.map((filter) => (
                                    <button
                                        key={filter.id}
                                        onClick={() => setActiveFilter(filter.id)}
                                        className={`px-6 py-2 rounded-full transition-all duration-300 text-xl font-montserrat ${
                                            activeFilter === filter.id
                                                ? "bg-gold text-white"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                    >
                                        {filter.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {
                            allMedia.length > 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {allMedia.map((media, index) => (
                                    <div
                                        key={index}
                                        className="relative aspect-square rounded-3xl overflow-hidden group cursor-pointer"
                                        onClick={() => setSelectedMedia(media)}
                                    >
                                        {media.fileType?.includes('video') ? (
                                            <video
                                                src={media.src}
                                                className="absolute inset-0 w-full h-full object-cover"
                                                muted
                                                playsInline
                                                onMouseEnter={(e) => e.currentTarget.play()}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.pause();
                                                    e.currentTarget.currentTime = 0;
                                                }}
                                            />
                                        ) : (
                                            <Image
                                                src={media.src}
                                                alt={media.alt}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="text-white text-lg font-semibold">
                                                View {media.fileType?.includes('video') ? "Video" : "Photo"}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            )
                        }
                    </div>
                </section>
            </main>

            {/* Media Modal */}
            {selectedMedia && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    onClick={() => setSelectedMedia(null)}
                >
                    <div className="absolute inset-0 bg-black/90" />
                    <div className="relative w-[90vw] h-[90vh] max-w-[1400px] mx-auto z-10">
                        <div className="relative w-full h-full">
                            {selectedMedia.fileType?.includes('video') ? (
                                <video
                                    src={selectedMedia.src}
                                    controls
                                    autoPlay
                                    className="absolute inset-0 w-full h-full"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <Image
                                    src={selectedMedia.src}
                                    alt={selectedMedia.alt}
                                    fill
                                    className="object-contain"
                                    sizes="90vw"
                                    priority
                                />
                            )}
                        </div>
                        <button
                            className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedMedia(null);
                            }}
                            aria-label="Close modal"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mt-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}