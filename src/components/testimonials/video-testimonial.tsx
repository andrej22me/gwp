"use client";
import React from "react";
import GoldenBorder from "@/components/GoldenBorder";
import Slider from "react-slick";
import { Testimonial, TestimonialType } from "@/interfaces/TestimonialInterfaces";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * VideoTestimonial component props
 *
 * @typedef {Object} VideoTestimonialProps
 * @property {Testimonial[]} testimonials - Array of testimonials
 */
interface VideoTestimonialProps {
    testimonials: Testimonial[];
}

/**
 * VideoTestimonial component
 *
 * @description A component that displays a slider of video testimonials
 * @param {VideoTestimonialProps} props - Component props
 * @returns {JSX.Element} The VideoTestimonial component
 */
const VideoTestimonial: React.FC<VideoTestimonialProps> = ({ testimonials }) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const titleLineStyles: React.CSSProperties = {
        height: "2px",
        width: "31px",
        backgroundColor: "#10242C",
        display: "block",
        position: "absolute",
        top: "-24px",
    };

    // Custom Arrow Components
    const SampleNextArrow = (props: any) => {
        const { onClick } = props;
        return (
            <div
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#B39852] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer shadow-lg z-10"
                onClick={onClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
        );
    };

    const SamplePrevArrow = (props: any) => {
        const { onClick } = props;
        return (
            <div
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#B39852] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer shadow-lg z-10"
                onClick={onClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (oldIndex: number, newIndex: number) => {
            setCurrentSlide(newIndex);
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                },
            },
        ],
    };

    return (
        <div className="relative w-full">
            <style jsx>{`
                :global(.slick-slider) {
                    position: relative;
                    max-width: 100%;
                }
                :global(.slick-prev),
                :global(.slick-next) {
                    z-index: 1;
                    width: 40px;
                    height: 40px;
                }
                :global(.slick-prev) {
                    left: -60px;
                }
                :global(.slick-next) {
                    right: -60px;
                }
                :global(.slick-dots) {
                    bottom: -40px;
                }
                @media (max-width: 1280px) {
                    :global(.slick-prev) {
                        left: 20px;
                    }
                    :global(.slick-next) {
                        right: 20px;
                    }
                }
            `}</style>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="outline-none">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-0 md:py-8">
                            <div className="relative col-span-1 lg:col-span-5 lg:col-start-2">
                                <GoldenBorder
                                    className="w-full"
                                    imageUrl={testimonial.media.url}
                                    isVideo={testimonial.testimonialType === TestimonialType.VIDEO}
                                    isActive={index === currentSlide}
                                    borderColor="#B39852"
                                    borderWidths={{
                                        top: "36px",
                                        right: "20px",
                                        bottom: "36px",
                                        left: "20px",
                                    }}
                                    borderRadius={{
                                        topLeft: "100px",
                                        topRight: "10px",
                                        bottomRight: "100px",
                                        bottomLeft: "10px",
                                    }}
                                    aspectRatio="518 / 674"
                                />
                            </div>
                            <div className="col-span-1 lg:col-span-4 space-y-4">
                                <h3 className="text-3xl font-bold text-[#10242C] mb-6 relative">
                                    <div style={titleLineStyles}></div>
                                    {testimonial.authorName}
                                </h3>
                                <p className="text-[#10242C] font-ubuntu text-base leading-8">{testimonial.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default VideoTestimonial;
