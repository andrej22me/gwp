'use client';
import React, { useState } from "react";
import GoldenBorder from "@/components/GoldenBorder";
import Modal from "@/components/Modal";
import Image from "next/image";

interface Player {
    name: string;
    lastName: string;
    imageUrl: string;
}

interface CoachingStaffProps {
    players: Player[];
}

const CoachingStaff: React.FC<CoachingStaffProps> = ({ players }) => {

    const firstRowPlayers = players.slice(0, 3); // First row: 3 players
    const secondRowPlayers = players.slice(3);

    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const openModal = (player: any) => {
        setSelectedPlayer(player);
    };

    const closeModal = () => {
        setSelectedPlayer(null);
    };
    return (
        <>
            <div className="container mx-auto px-4 md:px-0 my-8 lg:my-14">
                {/* First Row: 3 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[28px] mb-[28px]">
                    {firstRowPlayers.map((player, index) => (
                        <div
                            key={index}
                            onClick={() => openModal(player)}
                            className="cursor-pointer"
                        >
                            <div className="relative">
                                <GoldenBorder
                                    imageUrl={player.imageUrl} // Player image
                                    borderColor="#B39852" // Golden border color
                                    borderWidths={{
                                        top: "26px",
                                        right: "12px",
                                        bottom: "26px",
                                        left: "12px",
                                    }} // Border width for each side
                                    borderRadius={{
                                        topLeft: "0",
                                        topRight: "0",
                                        bottomRight: "0",
                                        bottomLeft: "160px",
                                    }} // Border radius for each corner
                                />
                                <Image src={'/waterpolo-ball-1.png'} style={{filter: 'brightness(0) invert(0)'}} alt={'Water Polo Ball'} width={81} height={85} className="absolute bottom-0 left-0 -z-10" />
                            </div>
                            <div className="text-center py-4">
                                <h2 className="font-semibold text-[#405B6F] font-montserrat uppercase text-2xl">{player.name}</h2>
                                <p className="font-semibold text-[#B39852] text-xl uppercase font-montserrat">{player.lastName}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second Row: 4 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[28px]">
                    {secondRowPlayers.map((player, index) => (
                        <div
                            key={index}
                            onClick={() => openModal(player)}
                            className="cursor-pointer"
                        >
                            <div className="relative">
                                <GoldenBorder
                                    imageUrl={player.imageUrl} // Player image
                                    borderColor="#B39852" // Golden border color
                                    borderWidths={{
                                        top: "26px",
                                        right: "12px",
                                        bottom: "26px",
                                        left: "12px",
                                    }} // Border width for each side
                                    borderRadius={{
                                        topLeft: "0",
                                        topRight: "0",
                                        bottomRight: "0",
                                        bottomLeft: "160px",
                                    }} // Border radius for each corner
                                    aspectRatio="292 / 400"
                                />
                                <Image src={'/waterpolo-ball-1.png'} style={{filter: 'brightness(0) invert(0)'}} alt={'Water Polo Ball'} width={81} height={85} className="absolute bottom-0 left-0 -z-10" />
                            </div>
                            <div className="text-center mt-2">
                                <h2 className="font-semibold text-[#405B6F] font-montserrat uppercase text-2xl">{player.name}</h2>
                                <p className="font-semibold text-[#B39852] text-xl uppercase font-montserrat">{player.lastName}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal
                isOpen={!!selectedPlayer}
                onClose={closeModal}
                player={selectedPlayer}
            />
        </>
    );
};

export default CoachingStaff;