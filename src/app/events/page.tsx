import React from "react";
import HeroImage from "@/components/HeroImage";
import GoldenBorder from "@/components/GoldenBorder";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Event from "@/components/events/Event";
import FaqSection from "@/components/events/FaqSection";

const Page = () => {
    return (
        <DefaultLayout>
            <main>
                <HeroImage src="/hero.jpg" alt="Hero image" title="Events" />
                {/* Jump On Section */}
                <section className="container mx-auto py-8 lg:py-16 px-4 lg:px-0">
                    <div className="grid grid-cols-12 md:grid-cols-10 lg:grid-cols-12">
                        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-start-1 lg:col-span-12s">
                            <h2 className="text-left lg:text-center text-3xl lg:text-5xl font-montserrat font-semibold text-[#405B6F] mb-6 lg:mb-10 lg:leading-[60px]">
                                Jump On And Enjoy The Ride
                            </h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Men’s", location: "Montenegro", imageUrl: "/image-1.jpg" },
                            { title: "Women’s", location: "Greece", imageUrl: "/image-1.jpg" },
                            {
                                title: "Individual",
                                location: "Montenegro",
                                imageUrl: "/image-1.jpg",
                            },
                            { title: "Team trip", location: "Montenegro", imageUrl: "/image-1.jpg" },
                        ].map((category, index) => (
                            <div key={index} className={`md:col-span-5 lg:col-span-1 text-center ${index%2===0 ? 'md:col-start-2': 'md:col-start-7'}`}>
                                <GoldenBorder
                                    imageUrl={category.imageUrl}
                                    borderColor="#B39852"
                                    borderWidths={{
                                        top: "16px",
                                        right: "16px",
                                        bottom: "16px",
                                        left: "16px",
                                    }}
                                    borderRadius={{
                                        topLeft: "0",
                                        topRight: "0",
                                        bottomRight: "0",
                                        bottomLeft: "160px",
                                    }}
                                    aspectRatio="4 / 5"
                                />
                                <h3 className="text-3xl text-[#405B6F] font-montserrat font-semibold mt-4 lg:mt-9 mb-4 lg:mb-6">{category.title}</h3>
                                <p className="text-2xl font-montserrat font-semibold text-[#B39852]">{category.location}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Active Events Section */}
                <div className="container grid-cols-12 md:grid-cols-10 lg:grid-cols-12 mx-auto px-4 lg:px-0 grid ">
                    <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-start-1 lg:col-span-12">
                        <h2 className="text-3xl font-bold text-[#405B6F] mb-8 md:mb-12">
                            Active Events
                        </h2>
                    </div>
                </div>
                <Event />

                {/* Training Programs Section */}
                <section className="container mx-auto py-8 lg:py-16 px-4 lg:px-0 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 lg:gap-12 items-center mb-8">
                        <GoldenBorder
                            className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6"
                            imageUrl="/events-category-men.jpg"
                            borderColor="#B39852"
                            borderWidths={{
                                top: "42px",
                                right: "27px",
                                bottom: "42px",
                                left: "27px",
                            }}
                            borderRadius={{
                                topLeft: "160px",
                                topRight: "0",
                                bottomRight: "0",
                                bottomLeft: "0px",
                            }}
                            aspectRatio="764 / 666"
                        />
                        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-5 lg:col-start-8">
                            <h3 className="text-3xl text-[#405B6F] font-montserrat font-semibold mt-4 lg:mt-9 mb-4 lg:mb-6">
                                Men’s Training Programs
                            </h3>
                            <p className="mt-4 text-[#333333]">
                                Our men’s training programs are tailored for athletes seeking to push their boundaries and achieve excellence in water polo. These sessions are led by elite coaches, including Olympians and professionals with extensive experience in the sport. The programs focus on advanced skill development, strength and conditioning, tactical gameplay, and mental preparation.
                                Each training is designed to challenge participants while fostering growth, discipline, and teamwork. Whether you are an experienced player or aspiring to take your performance to the next level, our comprehensive programs offer a structured pathway to success, both in the pool and beyond.                            </p>
                        </div>
                    </div>
                </section>

                <Event />

                <div className="container mx-auto lg:py-16 px-4 lg:px-0 mb-8 mt-8 lg:mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 lg:gap-12 items-center lg:mt-16 mb-8">
                        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-4">
                            <h2 className="text-3xl font-bold text-[#405B6F]">
                                Women’s Training Programs
                            </h2>
                            <p className="mt-4 font-montserrat text-[#333333]">
                                Empower your potential with our women’s training programs, crafted to inspire, educate, and elevate female athletes in the world of water polo. Under the guidance of expert coaches, participants will receive training tailored to their unique needs, focusing on technical skills, strategic thinking, and physical fitness.
                                In addition to building individual strengths, our programs promote team spirit and collaboration, creating an environment where female athletes can thrive. Whether preparing for competition or simply aiming to improve your game, these sessions will leave you stronger, smarter, and ready to lead in and out of the water.
                            </p>
                        </div>
                        <GoldenBorder
                            className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-7 mt-8 lg:mt-0"
                            imageUrl="/events-category-women.jpg"
                            borderColor="#B39852"
                            borderWidths={{
                                top: "16px",
                                right: "16px",
                                bottom: "16px",
                                left: "16px",
                            }}
                            borderRadius={{
                                topLeft: "0",
                                topRight: "0",
                                bottomRight: "0",
                                bottomLeft: "160px",
                            }}
                            aspectRatio="4 / 5"
                        />
                    </div>
                </div>

                <Event />

                <div className="container mx-auto lg:py-16 px-4 lg:px-0 mb-8">

                    <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 lg:gap-12 items-center mt-8 lg:mt-16 mb-8">
                        <GoldenBorder
                            className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6"
                            imageUrl="/events-category-individual.jpg"
                            borderColor="#B39852"
                            borderWidths={{
                                top: "42px",
                                right: "27px",
                                bottom: "42px",
                                left: "27px",
                            }}
                            borderRadius={{
                                topLeft: "160px",
                                topRight: "0",
                                bottomRight: "0",
                                bottomLeft: "0px",
                            }}
                            aspectRatio="764 / 666"
                        />
                        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-5 lg:col-start-8">
                            <h2 className="text-3xl text-[#405B6F] font-montserrat font-semibold mt-4 lg:mt-9 mb-4 lg:mb-6">
                                Individual Training Sessions
                            </h2>
                            <p className="mt-4 text-[#333333]">
                                For athletes seeking a personalized approach, our individual training sessions provide a unique opportunity to work closely with our experienced coaches. These one-on-one sessions are customized to address your specific goals, whether it’s perfecting your shooting technique, improving stamina, or enhancing your understanding of gameplay.
                                With focused attention and tailored feedback, these sessions are ideal for players who want to accelerate their development and achieve noticeable results. Our coaches are committed to unlocking your full potential, providing the guidance and support needed to reach new heights in your water polo journey.
                            </p>
                        </div>
                    </div>
                </div>

                <Event />

                {/* Ready to Elevate Section */}
                <FaqSection />
            </main>
        </DefaultLayout>
    );
}

export default Page;