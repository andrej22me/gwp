'use client';
import React, { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import HeroImage from "@/components/HeroImage";
import CoachingStaff from "@/components/coaching-staff/CoachingStaff"; // Import the Modal component

const players = [
    {
        name: "Mladen",
        lastName: "Klikovac",
        imageUrl: "/image-1.jpg",
        bio: `Mladen Klikovac je istaknuti stručnjak u svijetu vaterpola, poznat po svojoj posvećenosti unapređenju ovog sporta i plivanja, posebno u Crnoj Gori. Bio je predsjednik Stručnog savjeta za plivanje i selektor, gdje je imao značajnu ulogu u razvoju plivanja i vaterpola, uprkos izazovima kao što su nedostatak adekvatnih objekata i finansijskih sredstava. Njegova vizija uključuje stvaranje boljih uslova za mlade sportiste i podršku kroz sistemski pristup, uključujući i stipendije za usavršavanje u inostranstvu​
Vaterpolo i plivački Savez Crne Gore \n Klikovac je takođe aktivan na međunarodnoj sceni. Radio je sa muškima reprezentacijama Crne Gore tokom osvajanja srebra na Evropskom prvenstvu 2016. u Beogradu. Kao predavač, često drži seminare širom svijeta, dijeleći svoje znanje o tehnici i strategiji u vaterpolu, sa posebnim fokusom na obuku golmana​
Swiss Water Polo
.`,
    },
    {
        name: "Zoran",
        lastName: "Maslovar",
        imageUrl: "/image-1.jpg",
        bio: `Mladen Klikovac je istaknuti stručnjak u svijetu vaterpola, poznat po svojoj posvećenosti unapređenju ovog sporta i plivanja, posebno u Crnoj Gori. Bio je predsjednik Stručnog savjeta za plivanje i selektor, gdje je imao značajnu ulogu u razvoju plivanja i vaterpola, uprkos izazovima kao što su nedostatak adekvatnih objekata i finansijskih sredstava. Njegova vizija uključuje stvaranje boljih uslova za mlade sportiste i podršku kroz sistemski pristup, uključujući i stipendije za usavršavanje u inostranstvu​`,
    },
    {
        name: "Nicolas",
        lastName: "Savejljic",
        imageUrl: "/image-1.jpg",
        bio: `Mladen Klikovac je istaknuti stručnjak u svijetu vaterpola, poznat po svojoj posvećenosti unapređenju ovog sporta i plivanja, posebno u Crnoj Gori. Bio je predsjednik Stručnog savjeta za plivanje i selektor, gdje je imao značajnu ulogu u razvoju plivanja i vaterpola, uprkos izazovima kao što su nedostatak adekvatnih objekata i finansijskih sredstava. Njegova vizija uključuje stvaranje boljih uslova za mlade sportiste i podršku kroz sistemski pristup, uključujući i stipendije za usavršavanje u inostranstvu​`,
    },
    {
        name: "Andrija",
        lastName: "Prlainovic",
        imageUrl: "/image-1.jpg",
        bio: `Mladen Klikovac je istaknuti stručnjak u svijetu vaterpola, poznat po svojoj posvećenosti unapređenju ovog sporta i plivanja, posebno u Crnoj Gori. Bio je predsjednik Stručnog savjeta za plivanje i selektor, gdje je imao značajnu ulogu u razvoju plivanja i vaterpola, uprkos izazovima kao što su nedostatak adekvatnih objekata i finansijskih sredstava. Njegova vizija uključuje stvaranje boljih uslova za mlade sportiste i podršku kroz sistemski pristup, uključujući i stipendije za usavršavanje u inostranstvu​`,
    },
    {
        name: "Mladen",
        lastName: "Klikovac",
        imageUrl: "/image-1.jpg",
        bio: `Mladen Klikovac je istaknuti stručnjak u svijetu vaterpola, poznat po svojoj posvećenosti unapređenju ovog sporta i plivanja, posebno u Crnoj Gori. Bio je predsjednik Stručnog savjeta za plivanje i selektor, gdje je imao značajnu ulogu u razvoju plivanja i vaterpola, uprkos izazovima kao što su nedostatak adekvatnih objekata i finansijskih sredstava. Njegova vizija uključuje stvaranje boljih uslova za mlade sportiste i podršku kroz sistemski pristup, uključujući i stipendije za usavršavanje u inostranstvu​`,
    },
    {
        name: "Zoran",
        lastName: "Maslovar",
        imageUrl: "/image-1.jpg",
        bio: `Mladen Klikovac je istaknuti stručnjak u svijetu vaterpola, poznat po svojoj posvećenosti unapređenju ovog sporta i plivanja, posebno u Crnoj Gori. Bio je predsjednik Stručnog savjeta za plivanje i selektor, gdje je imao značajnu ulogu u razvoju plivanja i vaterpola, uprkos izazovima kao što su nedostatak adekvatnih objekata i finansijskih sredstava. Njegova vizija uključuje stvaranje boljih uslova za mlade sportiste i podršku kroz sistemski pristup, uključujući i stipendije za usavršavanje u inostranstvu​`,
    },
    {
        name: "Nicolas",
        lastName: "Savejljic",
        imageUrl: "/image-1.jpg",
        bio: `Mladen Klikovac je istaknuti stručnjak u svijetu vaterpola, poznat po svojoj posvećenosti unapređenju ovog sporta i plivanja, posebno u Crnoj Gori. Bio je predsjednik Stručnog savjeta za plivanje i selektor, gdje je imao značajnu ulogu u razvoju plivanja i vaterpola, uprkos izazovima kao što su nedostatak adekvatnih objekata i finansijskih sredstava. Njegova vizija uključuje stvaranje boljih uslova za mlade sportiste i podršku kroz sistemski pristup, uključujući i stipendije za usavršavanje u inostranstvu​`,
    },
    {
        name: "Andrija",
        lastName: "Prlainovic",
        imageUrl: "/image-1.jpg",
        bio: `Mladen Klikovac je istaknuti stručnjak u svijetu vaterpola, poznat po svojoj posvećenosti unapređenju ovog sporta i plivanja, posebno u Crnoj Gori. Bio je predsjednik Stručnog savjeta za plivanje i selektor, gdje je imao značajnu ulogu u razvoju plivanja i vaterpola, uprkos izazovima kao što su nedostatak adekvatnih objekata i finansijskih sredstava. Njegova vizija uključuje stvaranje boljih uslova za mlade sportiste i podršku kroz sistemski pristup, uključujući i stipendije za usavršavanje u inostranstvu​`,
    },
];

interface PageProps {
    initialData: any;
}

const Coaching = ({initialData}: PageProps) => {

    const [data, setData] = useState(initialData);
    console.log(data);

    return (
        <DefaultLayout>
            <main>
                <HeroImage src={data.heroImage.url} alt={data.title} title={data.title} />
                <div className="container mx-auto flex justify-center mt-10">
                    <div className="max-w-[736px] px-4 lg:px-0 text-center">
                        <h2 className="font-montserrat text-2xl md:text-4xl lg:text-5xl font-semibold leading-7 lg:leading-[60px] text-[#405B6F] mb-2">
                            {data.components.masterClassTitle.title}
                        </h2>
                        <p className="font-montserrat text-base leading-6 font-medium text-[#333333]">
                            {data.components.masterClassDescription.description}
                        </p>
                    </div>
                </div>
                <CoachingStaff players={players}  />
            </main>
        </DefaultLayout>
    );
};

export default Coaching;
