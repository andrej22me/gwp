import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import GoldenBorder from "@/components/GoldenBorder";

type BlogPostInterface = {
    id: string;
    title: string;
    categories: string;
    timeframe: string;
    status: string;
    capacity: string;
    location: string;
    price: string;
    ageRestrictions: string;
}

async function Page() {

    const apiExample: BlogPostInterface = {
        id: "/path-to-your-image.jpg",
        title: "Men's Training Programs",
        categories: "Man",
        timeframe: "Start",
        status: "Upcoming",
        capacity: "30",
        location: "Kotor, Montenegro",
        price: "300$",
        ageRestrictions: "18+",
    };

    return (
        <DefaultLayout>
            <div className="container mx-auto pt-20 md:pt-32 xl:pt-[248px] grid gap-y-10 px-4 lg:px-20">
                {/* First Row with Two Columns */}
                <div className="grid grid-cols-9 gap-8 md:gap-5">
                    <GoldenBorder
                        className="col-span-12 md:col-span-6 xl:col-span-5 text-white order-2 md:order-1"
                        imageUrl={'/image-1.jpg'}
                        borderColor="#B39852"
                        borderWidths={{
                            top: "33px",
                            right: "40px",
                            bottom: "37px",
                            left: "46px",
                        }}
                        borderRadius={{
                            topLeft: "100px",
                            topRight: "10px",
                            bottomRight: "100px",
                            bottomLeft: "10px",
                        }}
                        aspectRatio="781 / 731"
                    />
                    <div
                        className="col-span-12 md:col-span-3 xl:col-span-4 text-white items-center justify-center lg:pl-6 lg:pr-12 mt-4 xl:mt-[90px] order-1 md:order-2">
                        <h1 className="text-blogPostTitle font-semibold text-3xl xl:text-5xl block mb-[20px]">&quot;Men&apos;s Training Programs&quot;</h1>
                        <ul className="colspantext-gray-700 space-y-3 xl:space-y-[20px]">
                            <li className="text-base xl:text-xl leading-4 text-[#333333]">
                                <span className="font-extrabold text-base xl:text-xl">Categories:</span> {apiExample.categories}
                            </li>
                            <li className="text-base xl:text-xl leading-4 text-[#333333]">
                                <span className="font-extrabold text-base xl:text-xl">Timeframe:</span> {apiExample.timeframe}
                            </li>
                            <li className="text-base xl:text-xl leading-4 text-[#333333]">
                                <span className="font-extrabold text-base xl:text-xl">Status:</span> {apiExample.status}
                            </li>
                            <li className="text-base xl:text-xl leading-4 text-[#333333]">
                                <span className="font-extrabold text-base xl:text-xl">Capacity Limitations:</span> {apiExample.capacity}
                            </li>
                            <li className="text-base xl:text-xl leading-4 text-[#333333]">
                                <span className="font-extrabold text-base xl:text-xl">Location Details:</span> {apiExample.location}
                            </li>
                            <li className="text-base xl:text-xl leading-4 text-[#333333]">
                                <span className="font-extrabold text-base xl:text-xl">Price:</span> {apiExample.price}
                            </li>
                            <li className="text-base xl:text-xl leading-4 text-[#333333]">
                                <span className="font-extrabold text-base lg:text-xl">Age Restrictions:</span> {apiExample.ageRestrictions}
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Second Row with One Column */}
                <div className="text-[#10242C] mb-6">
                    <h1 className="text-2xl xl:text-4xl font-medium mb-4 xl:mb-10">Then going through some small strange motions</h1>
                    <p className="mb-2 xl:mb-6 text-base xl:text-2xl">I believe I have broken a finger here against his cursed jaw ain’t those mincing knives down in
                        the forecastle there, men? look to those handspikes, my hearties. Captain, by God, look to
                        yourself say the word don’t be a fool; forget it all; we are ready to turn to treat us decently,
                        and we’re your men; but we won’t be flogged.</p>
                    <p className="mb-2 xl:mb-6 text-base xl:text-2xl">I and my wife stood amazed. Then I realised that the crest of Maybury Hill must be within range
                        of the Martians’ Heat-Ray now that the college was cleared out of the way. At that I gripped my
                        wife’s arm, and without ceremony ran her out into the road. Then I fetched out the servant,
                        telling her I would go upstairs myself for the box she</p>
                    <p className="mb-2 xl:mb-6 text-base xl:text-2xl">We can’t possibly stay here, I said; and as I spoke the firing reopened for a moment upon the
                        common. “But where are we to go?” said my wife in terror. I thought perplexed. Then I remembered
                        her cousins at Leatherhead.</p>
                    <p className="mb-2 xl:mb-6 text-base xl:text-2xl">Leatherhead! I shouted above the sudden noise. She looked away from me downhill. The people were
                        coming out of their houses, astonished. “How are we to get to Leatherhead?” she said.
                        Stop here,” said</p>
                    <p className="mb-2 xl:mb-6 text-base xl:text-2xl">I believe I have broken a finger here against his cursed jaw ain’t those mincing knives down in
                        the forecastle there, men? look to those handspikes, my hearties. Captain, by God, look to
                        yourself say the word don’t be a fool; forget it all; we are ready to turn to treat us decently,
                        and we’re your men; but we won’t be flogged.</p>
                    <p className="mb-2 xl:mb-6 text-base xl:text-2xl">I and my wife stood amazed. Then I realised that the crest of Maybury Hill must be within range
                        of the Martians’ Heat-Ray now that the college was cleared out of the way. At that I gripped my
                        wife’s arm, and without ceremony ran her out into the road. Then I fetched out the servant,
                        telling her I would go upstairs myself for the box she</p>
                    <p className="mb-2 xl:mb-6 text-base xl:text-2xl">We can’t possibly stay here, I said; and as I spoke the firing reopened for a moment upon the
                        common. “But where are we to go?” said my wife in terror. I thought perplexed. Then I remembered
                        her cousins at Leatherhead.</p>
                    <p className="mb-2 xl:mb-6 text-base xl:text-2xl">Leatherhead! I shouted above the sudden noise. She looked away from me downhill. The people were
                        coming out of their houses, astonished. “How are we to get to Leatherhead?” she said.
                        Stop here,” said</p>
                    <p className="mb-2 xl:mb-6 text-base xl:text-2xl">I believe I have broken a finger here against his cursed jaw ain’t those mincing knives down in
                        the forecastle there, men? look to those handspikes, my hearties. Captain, by God, look to
                        yourself say the word don’t be a fool; forget it all; we are ready to turn to treat us decently,
                        and we’re your men; but we won’t be flogged.</p>
                    <p className="mb-2 xl:mb-6 text-base xl:text-2xl">I and my wife stood amazed. Then I realised that the crest of Maybury Hill must be within range
                        of the Martians’ Heat-Ray now that the college was cleared out of the way. At that I gripped my
                        wife’s arm, and without ceremony ran her out into the road. Then I fetched out the servant,
                        telling her I would go upstairs myself for the box she</p>
                    <p className="mb-2 xl:mb-6 text-base xl:text-2xl">We can’t possibly stay here, I said; and as I spoke the firing reopened for a moment upon the
                        common. “But where are we to go?” said my wife in terror. I thought perplexed. Then I remembered
                        her cousins at Leatherhead.</p>
                    <p className="mb-2 xl:mb-6 text-base xl:text-2xl">Leatherhead! I shouted above the sudden noise. She looked away from me downhill. The people were
                        coming out of their houses, astonished. “How are we to get to Leatherhead?” she said.
                        Stop here,” said</p>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Page;
