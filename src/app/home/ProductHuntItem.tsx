import React from "react";
import Image from "next/image";

interface ProductHuntItemProps {
    name: string;
    role: string;
    testimonial: string;
    rating: number; // Rating out of 5
    imageSrc: string;
    title: string; // e.g., "Trener"
}

const ProductHuntItem: React.FC<ProductHuntItemProps> = (
    {
        name,
        role,
        testimonial,
        rating,
        imageSrc,
        title,
    }
) => {
    return (
        <div className="bg-[#B39852] rounded-lg text-center p-8 shadow-lg">
            {/* Title and Rating */}
            <div className="flex items-center justify-center gap-2 mb-6">
        <span className="bg-white rounded-full p-2">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-[#B39852]"
          >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.125 15.75L5.625 12l4.5-3.75M18.375 15.75L13.875 12l4.5-3.75"
            />
          </svg>
        </span>
                <span className="text-white text-sm font-bold">{title}</span>
            </div>
            <div className="flex justify-center mb-6">
                {/* Rating */}
                {[...Array(5)].map((_, index) => (
                    <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={index < rating ? "#FFD700" : "none"}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.998 4.5l1.362 4.193a1 1 0 00.949.689h4.41l-3.497 2.54a1 1 0 00-.365 1.118l1.364 4.196L11.998 14a1 1 0 00-1.263 0l-3.497 2.54 1.364-4.196a1 1 0 00-.365-1.118l-3.497-2.54h4.41a1 1 0 00.949-.689L11.998 4.5z"
                        />
                    </svg>
                ))}
            </div>
            {/* Image */}
            <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden mb-6">
                <Image
                    src={imageSrc}
                    alt={`${name}'s image`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                />
            </div>
            {/* Name and Role */}
            <h3 className="text-lg font-bold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500 mb-4">{role}</p>
            {/* Testimonial */}
            <p className="text-gray-600 italic">{testimonial}</p>
        </div>
    );
};

export default ProductHuntItem;
