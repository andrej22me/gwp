'use client';
import Image from "next/image";
import React from "react";

interface HeroImageProps {
    src: string | null;       // src is a string
    alt: string;       // alt is a string
    gradient?: boolean; // gradient is an optional boolean
    title?: string; // children can be any valid React node
    objectPosition?: string;
    clipPath?: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, gradient = true, title, objectPosition, clipPath }) => {

    const imageStyles: React.CSSProperties = {
        objectFit: "cover",
        objectPosition: objectPosition || "center",
        maxHeight: '650px',
        clipPath: clipPath ? clipPath : 'none',
    }

    const titleLineStyles: React.CSSProperties = {
        height: '2px',
        width: '31px',
        backgroundColor: 'white',
        display: 'block',
    }

    return (
        <div className="relative w-full h-[300px] lg:h-[600px]" style={{
            clipPath: clipPath ? 'none' : 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
        }}>
            {/* Background Image */}
            <Image
                src={src || '/images/default-hero.jpg'}
                alt={alt}
                fill
                priority
                style={imageStyles}
                className="absolute"
            />

            {/* Gradient Overlay */}
            {gradient && (
                <div
                    className="absolute inset-0 w-1/2 left-0"
                    style={{
                        background: "linear-gradient(90deg, rgba(179, 152, 82, 0.85) 5.4%, rgba(34, 148, 191, 0) 96.65%)",
                    }}
                ></div>
            )}

            {/* Gradient Overlay */}
            {gradient && (
                <div
                    className="absolute w-1/2 right-0 h-full"
                    style={{
                        rotate: "-180deg",
                        background: "linear-gradient(90deg, rgba(179, 152, 82, 0.85) 5.4%, rgba(34, 148, 191, 0) 96.65%)",
                    }}
                ></div>
            )}

            {/* Children (Content Over Image) */}
            <div className="absolute inset-0 flex container mx-auto items-center">
                <div>
                    <div className="ml-4 lg:ml-0" style={titleLineStyles}></div>
                    <h1 className="font-ubuntu text-4xl text-white uppercase mt-6 px-4 lg:px-0">{title}</h1>
                </div>
            </div>
        </div>
    );
};

export default HeroImage;