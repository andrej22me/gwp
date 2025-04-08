'use client';

import React from 'react';
import GoldenBorder from "@/components/GoldenBorder";
import Image from "next/image";
import useResponsiveWidth from "@/hooks/useResponsiveWidth";
import { GalleryType } from "@/interfaces/GalleryType";

interface GalleryFoldersProps {
    onSelectType: (type: GalleryType) => void;
}

const GalleryFolders: React.FC<GalleryFoldersProps> = ({ onSelectType }) => {
    const imageWidth = useResponsiveWidth();

    const folders = [
        {
            type: GalleryType.PHOTO,
            title: "Photo",
            image: "/gallery-photos.png"
        },
        {
            type: GalleryType.VIDEO,
            title: "Video",
            image: "/gallery-videos.png"
        }
    ];

    return (
        <section className="container mx-auto grid grid-cols-12 gap-3 mt-8 lg:-mt-40">
            {folders.map((folder, index) => (
                <div 
                    key={folder.type} 
                    className={`col-span-10 col-start-2 ${index === 0 ? 'md:col-start-2' : 'md:col-start-7'} md:col-span-5 relative pb-0 lg:pb-20`}
                    onClick={() => onSelectType(folder.type)}
                >
                    <GoldenBorder
                        className="cursor-pointer transition-transform duration-300"
                        imageUrl={folder.image}
                        borderColor="#B39852"
                        borderWidths={{
                            top: "26px",
                            right: "36px",
                            bottom: "26px",
                            left: "36px",
                        }}
                        borderRadius={{
                            topLeft: "0px",
                            topRight: "0px",
                            bottomRight: "0px",
                            bottomLeft: "160px",
                        }}
                        aspectRatio="534 / 738"
                    />
                    <Image 
                        src={'/waterpolo-ball-1.png'} 
                        alt={'Water Polo Ball'} 
                        width={imageWidth} 
                        height={imageWidth} 
                        className={`absolute bottom-10 md:bottom-4 lg:bottom-7 hover:scale-105 xl:-bottom-[0px] ${
                            index === 0 ? '-left-[20px]' : '-right-[20px] md:-right-16 lg:-right-20 xl:-right-[38px]'
                        } -z-10`}
                    />
                    <h2 className="text-3xl font-semibold font-montserrat text-center text-[#405B6F]">
                        {folder.title}
                    </h2>
                </div>
            ))}
        </section>
    );
};

export default GalleryFolders;