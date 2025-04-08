'use client';
import { useEffect, useState } from "react";

const useResponsiveWidth = () => {
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth >= 1280) {
                // Tailwind lg (>=1280px)
                setWidth(270); // Example width for large screens
            } else if (screenWidth >= 1024) {
                // Tailwind md (>=1024px)
                setWidth(200);
            } else if (screenWidth >= 768) {
                // Tailwind sm (>=768px)
                setWidth(150);
            } else {
                // Tailwind xs (<768px)
                setWidth(120);
            }
        };

        // Set initial width
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Clean up event listener
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
};

export default useResponsiveWidth;
