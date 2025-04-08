import React from "react";
import Image from "next/image";
import Link from "next/link";

interface EventProps {
    imageUrl: string;
    title: string;
    startDate: string;
    location: string;
    signUpBy: string;
    description: string;
}

const ActiveEvents: React.FC = () => {
    const events: EventProps[] = [
        {
            imageUrl: "/image-1.jpg",
            title: "Then going through some small strange motions",
            startDate: "FEB 14",
            location: "KOTOR, MONTENEGRO",
            signUpBy: "JAN 1",
            description:
                "A moderate incline runs towards the foot of Maybury Hill, and down this we clattered. Once a moderate incline runs towards the foot...",
        },
        {
            imageUrl: "/image-1.jpg",
            title: "Then going through some small strange motions",
            startDate: "FEB 14",
            location: "KOTOR, MONTENEGRO",
            signUpBy: "JAN 1",
            description:
                "A moderate incline runs towards the foot of Maybury Hill, and down this we clattered. Once a moderate incline runs towards the foot...",
        },
        {
            imageUrl: "/image-1.jpg",
            title: "Then going through some small strange motions",
            startDate: "FEB 14",
            location: "KOTOR, MONTENEGRO",
            signUpBy: "JAN 1",
            description:
                "A moderate incline runs towards the foot of Maybury Hill, and down this we clattered. Once a moderate incline runs towards the foot...",
        },
    ];

    return (
        <section className="container mx-auto px-4 lg:px-0">
            <div className="grid grid-cols-12 lg:gap-x-24 gap-y-4 lg:gap-y-16">
                {events.map((event, index) => (
                    <React.Fragment key={index}>
                        {/* Event Image */}
                        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 col-start-1 relative lg:h-auto aspect-[699/307]">
                            <Image
                                className="rounded-bl-[60px] rounded-tr-[60px]"
                                src={event.imageUrl}
                                alt="Event"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        {/* Event Details */}
                        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 col-start-1 lg:flex lg:flex-col lg:justify-center">
                            <Link href={'/events/1'}>
                                <h3 className="text-xl font-ubuntu font-medium text-black">{event.title}</h3>
                            </Link>
                            <p className="mt-2 text-black font-ubuntu text-sm">
                                START: {event.startDate} | {event.location} <br />
                                SIGN UP BY: {event.signUpBy}
                            </p>
                            <p className="mt-4 font-ubuntu font-medium text-black">{event.description}</p>
                            <div>
                                <button className="w-full md:w-[311px] inline-block mt-6 px-4 py-2 bg-transparent] border-2 border-[#B39852] text-[#B39852] rounded-[50px] h-[50px]">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default ActiveEvents;
