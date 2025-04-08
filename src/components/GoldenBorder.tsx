'use client';
import React from "react";

interface GoldenBorderProps {
    imageUrl: string;
    isVideo?: boolean;
    isActive?: boolean;
    borderColor?: string;
    borderWidths?: {
        top?: string;
        right?: string;
        bottom?: string;
        left?: string;
    };
    borderRadius?: {
        topLeft?: string;
        topRight?: string;
        bottomRight?: string;
        bottomLeft?: string;
    };
    aspectRatio?: string;
    gap?: string;
    opacity?: string;
    className?: string;
}

const GoldenBorder: React.FC<GoldenBorderProps> = ({
    imageUrl,
    isVideo = false,
    isActive = true,
    borderColor = "#B39852",
    borderWidths = {
        top: "8px",
        right: "8px",
        bottom: "8px",
        left: "8px",
    },
    borderRadius = {
        topLeft: "16px",
        topRight: "16px",
        bottomRight: "16px",
        bottomLeft: "16px",
    },
    aspectRatio = "399 / 568",
    gap = "0px",
    opacity = "1",
    className = "",
}) => {
    const [isMuted, setIsMuted] = React.useState(true);
    const videoRef = React.useRef<HTMLVideoElement>(null);

    React.useEffect(() => {
        if (videoRef.current) {
            if (isActive) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    }, [isActive]);

    const getBorderClasses = () => {
        const topWidth = borderWidths?.top || "8px";
        return `border-[16px] md:border-[${topWidth.replace('px', '')}px]`;
    };

    return (
        <div className={className}>
            <div
                className={`relative group border-solid ${getBorderClasses()}`}
                style={{
                    borderColor: borderColor,
                    borderTopLeftRadius: borderRadius.topLeft,
                    borderTopRightRadius: borderRadius.topRight,
                    borderBottomRightRadius: borderRadius.bottomRight,
                    borderBottomLeftRadius: borderRadius.bottomLeft,
                    aspectRatio: aspectRatio,
                    gap: gap,
                    opacity: opacity,
                    overflow: "hidden",
                }}
            >
                {isVideo ? (
                    <>  
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            loop
                            muted={isMuted}
                            preload="metadata"
                            playsInline
                        >
                            <source src={imageUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        {isMuted && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    onClick={() => setIsMuted(false)}
                                    className="w-12 h-12 flex items-center justify-center bg-[#B39852] rounded-full cursor-pointer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="none"
                                        className="w-6 h-6"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <img
                        src={imageUrl}
                        alt="Golden Border"
                        className="absolute h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                )}
            </div>
        </div>
    );
};

export default GoldenBorder;
