import React from "react";
import GoldenBorder from "@/components/GoldenBorder";
import Image from "next/image";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    player: {
        name: string;
        lastName: string;
        imageUrl: string;
        bio: string;
    } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, player }) => {
    if (!isOpen || !player) return null;

    return (
        <div className="fixed inset-0 items-start lg:items-center z-50 flex justify-center overflow-auto">
            <div className="fixed inset-0 bg-black bg-opacity-50 items-center" onClick={onClose}></div>
            <div
                style={{boxShadow: '-10px 10px 20px 0px #00000012'}}
                className="bg-white lg:rounded-[190px] xl:max-w-6xl w-full lg:pl-24 lg:pr-32 pt-12 lg:pt-24 pb-16 relative z-20">
                <div className="bg-gold absolute top-0 right-0 -z-10 p-5 rounded-full hidden lg:flex items-center justify-center">
                    <Image src={'/waterpolo-ball.png'} style={{filter: 'brightness(0) invert(1)'}} alt={'Water Polo Ball'} width={81} height={85} className="" />
                </div>
                <div className="bg-gold absolute bottom-0 left-0 -z-10 p-5 rounded-full hidden lg:flex items-center justify-center">
                    <Image src={'/waterpolo-ball.png'} style={{filter: 'brightness(0) invert(1)'}} alt={'Water Polo Ball'} width={81} height={85} className="" />
                </div>
                <div className="grid grid-cols-12 px-8 lg:px-0">
                    <button
                        onClick={onClose}
                        className="lg:hidden text-[#333333] text-3xl focus:outline-none absolute right-2 top-2"
                    >✖</button>
                    <div className="col-span-12 md:col-span-4 lg:col-span-4">
                        <GoldenBorder
                            imageUrl={player.imageUrl}
                            borderColor="#B39852"
                            borderWidths={{
                                top: "26px",
                                right: "12px",
                                bottom: "26px",
                                left: "12px",
                            }}
                            borderRadius={{
                                topLeft: "0",
                                topRight: "0",
                                bottomRight: "0",
                                bottomLeft: "160px",
                            }}
                            aspectRatio="292 / 400"
                        />
                        <div className="text-center py-4 hidden md:block">
                            <h2 className="font-semibold text-[#405B6F] font-montserrat uppercase text-2xl">{player.name}</h2>
                            <p className="font-semibold text-[#B39852] text-xl uppercase font-montserrat">{player.lastName}</p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-5 md:col-start-6 lg:col-span-5 lg:col-start-7 mt-4 lg:mt-0">
                        <h2 className="text-4xl font-montserrat font-semibold uppercase text-[#405B6F] mb-5">
                            {player.name} {player.lastName}
                        </h2>
                        <p className="mt-2 text-[#333333] font-montserrat font-medium text-base">{player.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
