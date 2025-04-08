'use client';
import {z} from "zod";
import {Input} from "@/components/ui/input";
import {TextArea} from "@/components/ui/textarea";
import {api} from "@/lib/api";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import HeroImage from "@/components/HeroImage";
import React, {useEffect, useState} from "react";
import {PageInterface} from "@/interfaces/PageInterface";
import {Media} from "@/interfaces/Media";
import { ContactPageData } from "@/interfaces/ContactPageComponents";

interface ContactFormProps {
    initialData?: ContactPageData;
}

const ContactForm: React.FC<ContactFormProps> = ({initialData}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
    });

    const [showThankYou, setShowThankYou] = useState(false);
    const [data, setData] = useState<any>(initialData || { components: { formTitle: { title: "SEND US A MESSAGE" } } });

    useEffect(() => {
        if (initialData) {
            setData(initialData);
        }
    }, [initialData]);


    // Define Zod schemas for validation
    const nameSchema = z.string().min(1, "Name is required");
    const emailSchema = z.string().email("Invalid email address");
    const subjectSchema = z.string().min(1, "Subject is required");
    const messageSchema = z.string().min(10, "Message must be at least 10 characters");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Validate each field using Zod
            nameSchema.parse(formData.name);
            emailSchema.parse(formData.email);
            subjectSchema.parse(formData.subject);
            messageSchema.parse(formData.message);

            // Clear errors if validation passes
            setErrors({
                name: "",
                email: "",
                subject: "",
                phone: "",
                message: ""
            });
            submitData();
        } catch (err: any) {
            // Update errors based on validation failure
            const newErrors = {
                name: "",
                email: "",
                subject: "",
                phone: "",
                message: ""
            };
            err.errors.forEach((error: { path: string[]; message: string }) => {
                // @ts-expect-error neki error
                newErrors[error.path[0]] = error.message;
            });
            setErrors(newErrors); // Update error state with messages
        }
    };

    const submitData = async () => {
        try {
            const response = await api.post('/contact', formData);
            if (response) {
                setShowThankYou(true);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    const nameIcon = () => (
        <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6.0004" cy="4.18399" r="3.60001" fill="#10242C"/>
            <path
                d="M12 13.784C12 15.584 9.60002 14.984 5.99999 14.984C2.39996 14.984 0 15.584 0 13.784C0 11.984 2.39996 9.58398 5.99999 9.58398C9.60002 9.58398 12 11.984 12 13.784Z"
                fill="#10242C"/>
        </svg>
    );
    const emailIcon = () => (
        <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13.4413 0H1.05875C0.474017 0 0 0.474017 0 1.05875C0 1.44679 0.212284 1.80375 0.553243 1.98902L5.72215 4.79776L5.72216 4.79776C6.28037 5.10109 6.55948 5.25275 6.85442 5.31226C7.11551 5.36494 7.38449 5.36494 7.64558 5.31226C7.94053 5.25275 8.21964 5.10109 8.77785 4.79776L13.9468 1.98902C14.2877 1.80375 14.5 1.44679 14.5 1.05875C14.5 0.474017 14.026 0 13.4413 0Z"
                fill="#10242C"/>
            <path
                d="M3.2 9.00489H11.3C12.4201 9.00489 12.9802 9.00489 13.408 8.7869C13.7843 8.59515 14.0903 8.28919 14.282 7.91287C14.5 7.48504 14.5 6.92499 14.5 5.80489V2.53271L9.54178 5.22697C8.70445 5.68196 8.28579 5.90946 7.84337 5.99873C7.45174 6.07775 7.04826 6.07775 6.65663 5.99873C6.21421 5.90946 5.79555 5.68196 4.95822 5.22697L0 2.53271V5.80489C0 6.92499 0 7.48504 0.217987 7.91287C0.409734 8.28919 0.715695 8.59515 1.09202 8.7869C1.51984 9.00489 2.0799 9.00489 3.2 9.00489Z"
                fill="#10242C"/>
        </svg>
    );
    const phoneIcon = () => (
        <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6.0004" cy="4.18399" r="3.60001" fill="#10242C"/>
            <path
                d="M12 13.784C12 15.584 9.60002 14.984 5.99999 14.984C2.39996 14.984 0 15.584 0 13.784C0 11.984 2.39996 9.58398 5.99999 9.58398C9.60002 9.58398 12 11.984 12 13.784Z"
                fill="#10242C"/>
        </svg>
    );
    const messageIcon = () => (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 21.9123C0 21.9123 7.1384 -0.90769 22 0.0280083C22 0.0280083 20.1569 3.01301 15.5049 3.97764C15.5049 3.97764 17.6705 4.24173 19.4256 3.6563C19.4256 3.6563 18.3723 7.05129 12.6387 7.51791C12.6387 7.51791 15.7985 8.33726 17.2027 7.86879C17.2027 7.86879 16.8216 10.3995 10.984 11.6571C10.638 11.731 8.30802 12.314 10.18 12.5485C10.18 12.5485 12.8708 13.0182 13.5744 12.7831C13.5744 12.7831 11.2696 16.2347 5.61604 15.9423C5.06016 15.9133 4.79607 15.9423 4.79607 15.9423L0 21.9123Z"
                fill="#10242C"/>
        </svg>
    );

    return (
        <DefaultLayout>
            {
                (
                    <main>
                        {
                            data?.heroImage?.url && (
                                <HeroImage src={data?.heroImage?.url} alt="Coaching staff" title={data.title}/>
                            )
                        }
                        <div className="container mx-auto grid px-4">
                            <section className="py-10 lg:py-24 md:px-6 relative">
                                <div className="absolute left-0 top-24 w-24 h-24 opacity-10">
                                    <div className="grid grid-cols-3 gap-2">
                                        {[...Array(9)].map((_, i) => (
                                            <div key={i} className="w-2 h-2 bg-[#C5A572] rounded-full"/>
                                        ))}
                                    </div>
                                </div>

                                <div className="max-w-7xl mx-auto">
                                    <div className="grid lg:grid-cols-2 gap-11">
                                        <div
                                            className="bg-white px-12 pt-12 pb-20 rounded-br-[20px] rounded-tl-[20px] rounded-tr-[100px] rounded-bl-[100px] shadow-contractForm relative">
                                            <div
                                                className="absolute bottom-8 -left-2 lg:-left-12  w-24 h-[84px] bg-[#B39852] rounded-bl-[40px] -z-20"/>
                                            <div
                                                className="absolute -top-4 lg:-top-9 -right-2 lg:-right-10  w-[184px] h-[188px] bg-[#FBE196] rounded-tl-[60px] rounded-br-[55px] -z-20"/>

                                            {showThankYou ? (
                                                <div className="text-center py-8">
                                                    <h2 className="text-3xl font-ubuntu font-bold mb-4">{data.components.submittedTitle.title}</h2>
                                                    <p className="text-lg text-gray-700 mb-4">{data.components.submittedDescription.title}</p>
                                                    <p className="text-gray-600">{data.components.submittedSmall.title}</p>
                                                    <button 
                                                        onClick={() => {
                                                            setShowThankYou(false);
                                                            setFormData({
                                                                name: "",
                                                                email: "",
                                                                subject: "",
                                                                phone: "",
                                                                message: "",
                                                            });
                                                        }}
                                                        className="bg-[#B39852] text-white min-w-[200px] mt-6 px-6 py-4 rounded-[50px] hover:bg-[#B39461] transition font-ubuntu font-medium"
                                                    >
                                                        {data.components.sendAgain.buttonText}
                                                    </button>
                                                </div>
                                            ) : (
                                                <>
                                                    {
                                                        data.components.formTitle && (
                                                            <h2 className="text-3xl font-ubuntu font-bold mb-8">{data.components.formTitle.title}</h2>
                                                        )
                                                    }

                                                    <form onSubmit={handleSubmit} className="space-y-6">
                                                        <div className="grid md:grid-cols-2 gap-6">
                                                            <Input
                                                                label="Name"
                                                                name="name"
                                                                type="text"
                                                                schema={nameSchema}
                                                                placeholder="John Doe"
                                                                value={formData.name}
                                                                onChange={handleChange}
                                                                icon={nameIcon()}
                                                                error={errors.name}
                                                            />
                                                            <Input
                                                                label="Email"
                                                                name="email"
                                                                type="email"
                                                                schema={emailSchema}
                                                                placeholder="johndoe@example.com"
                                                                value={formData.email}
                                                                onChange={handleChange}
                                                                error={errors.email}
                                                                icon={emailIcon()}
                                                            />
                                                        </div>

                                                        <div className="grid md:grid-cols-2 gap-6">
                                                            <Input
                                                                label="Subject"
                                                                name="subject"
                                                                type="text"
                                                                schema={subjectSchema}
                                                                placeholder="Type here"
                                                                value={formData.subject}
                                                                onChange={handleChange}
                                                                error={errors.subject}
                                                            />
                                                            <Input
                                                                label="Phone"
                                                                name="phone"
                                                                type="tel"
                                                                placeholder="(08) 7480 2593"
                                                                value={formData.phone}
                                                                onChange={handleChange}
                                                                error={errors.phone}
                                                                icon={phoneIcon()}
                                                            />
                                                        </div>

                                                        <div>
                                                            <TextArea
                                                                label="Message"
                                                                name="message"
                                                                placeholder="Your message goes here..."
                                                                rows={3}
                                                                schema={messageSchema}
                                                                value={formData.message}
                                                                onChange={handleChange}
                                                                error={errors.message}
                                                                icon={messageIcon()}
                                                            />
                                                        </div>

                                                        <div className="flex justify-center">
                                                            <button
                                                                className="bg-[#1C2A3A] font-ubuntu text-white px-8 py-4 rounded-[50px] min-w-[200px] justify-center mt-6 hover:bg-gray-800 transition flex items-center gap-2 font-medium">
                                                                {data.components.sendMessage.buttonText}
                                                            </button>
                                                        </div>
                                                    </form>
                                                </>
                                            )}
                                        </div>

                                        <div className="space-y-8 lg:ml-16 flex flex-col justify-center">
                                            <h2 className="text-3xl font-ubuntu font-medium text-black">{data.components.title.title}</h2>

                                            <div className="space-y-6">
                                                <div className="flex items-start gap-4">
                                                    <svg width="26" height="22" viewBox="0 0 26 22" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                              d="M13 21.5094C20.1797 21.5094 26 16.7653 26 10.9133C26 5.06119 20.1797 0.317139 13 0.317139C5.8203 0.317139 0 5.06119 0 10.9133C0 16.7653 5.8203 21.5094 13 21.5094ZM13.9 5.08539C13.9 4.58833 13.4971 4.18539 13 4.18539C12.5029 4.18539 12.1 4.58833 12.1 5.08539V10.9133C12.1 11.1838 12.2217 11.44 12.4314 11.6109L16.3314 14.7897C16.7167 15.1037 17.2836 15.046 17.5976 14.6607C17.9117 14.2754 17.8539 13.7085 17.4686 13.3945L13.9 10.4857V5.08539Z"
                                                              fill="#10242C"/>
                                                    </svg>
                                                    <p className="text-gray-600">{data.components.workingTime.title}</p>
                                                </div>

                                                <div className="flex items-start gap-4">
                                                    <svg width="27" height="17" viewBox="0 0 27 17" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M24.3332 0.407227H1.91669C0.858131 0.407227 0 1.26536 0 2.32392C0 3.02641 0.384306 3.67262 1.00156 4.00803L11.5971 9.76555C12.1553 10.0689 12.4344 10.2205 12.7294 10.2801C12.9905 10.3327 13.2594 10.3327 13.5205 10.2801C13.8155 10.2205 14.0946 10.0689 14.6528 9.76555L25.2484 4.00803C25.8656 3.67262 26.2499 3.02641 26.2499 2.32392C26.2499 1.26536 25.3918 0.407227 24.3332 0.407227Z"
                                                            fill="#10242C"/>
                                                        <path
                                                            d="M3.2 16.709H23.0499C24.17 16.709 24.7301 16.709 25.1579 16.491C25.5342 16.2993 25.8402 15.9933 26.0319 15.617C26.2499 15.1892 26.2499 14.6291 26.2499 13.509V4.99219L15.4167 10.8788C14.5794 11.3338 14.1607 11.5613 13.7183 11.6506C13.3267 11.7296 12.9232 11.7296 12.5316 11.6506C12.0892 11.5613 11.6705 11.3338 10.8332 10.8788L0 4.99219V13.509C0 14.6291 0 15.1892 0.217987 15.617C0.409734 15.9933 0.715695 16.2993 1.09202 16.491C1.51984 16.709 2.07989 16.709 3.2 16.709Z"
                                                            fill="#10242C"/>
                                                    </svg>
                                                    <p className="text-gray-600">{data.components.email.title}</p>
                                                </div>

                                                <div className="flex items-start gap-4">
                                            <span>
                                                <svg width="25" height="23" viewBox="0 0 25 23" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M22.9939 15.1981C21.4634 15.1981 19.9605 14.9853 18.5363 14.5668C17.9867 14.4001 17.3377 14.4851 16.8787 14.7189C16.6459 14.8375 16.4458 15.0114 16.2288 15.157C14.688 16.1913 12.6739 16.399 11.1386 15.3567C10.1078 14.6569 9.22898 13.8798 8.44212 12.972C7.30615 11.6615 7.51155 9.72672 8.63173 8.40268C8.75632 8.25541 8.89717 8.12205 9.02017 7.97345C9.3988 7.51601 9.51421 6.92257 9.31593 6.36099C8.84327 5.088 8.60317 3.75231 8.60317 2.39074C8.60323 1.40714 7.7033 0.606934 6.59718 0.606934H2.00605C0.899933 0.606934 0 1.40714 0 2.39069C0 13.6647 10.3149 22.8365 22.9939 22.8365C24.1001 22.8365 25 22.0363 25 21.0528V16.9818C24.9999 15.9983 24.1 15.1981 22.9939 15.1981Z"
                                                        fill="#10242C"/>
                                                </svg>
                                            </span>
                                                    <p className="text-gray-600">{data.components.phoneNumber.title}</p>
                                                </div>
                                            </div>

                                            <p className="text-black font-ubuntu text-base mt-8">
                                                {data.components.description.title}
                                            </p>

                                            <div className="flex flex-col md:flex-row gap-4 mt-8">
                                                <a
                                                    href={`mailto:${data.components.email.title}`}
                                                    className="bg-[#B39852] text-center text-white min-w-[200px] px-6 py-4 rounded-[50px] hover:bg-[#B39461] transition font-ubuntu font-medium"
                                                >
                                                    {data.components.scheduleMeeting.buttonText}
                                                </a>
                                                <a
                                                    href={`tel:${data.components.phoneNumber.title}`}
                                                    className="bg-[#1C2A3A] text-center text-white min-w-[200px] px-6 py-4 rounded-[50px] hover:bg-gray-800 transition font-ubuntu font-medium"
                                                >
                                                    {data.components.ctaCall.buttonText}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </main>

                )
            }
        </DefaultLayout>
    );
}

export default ContactForm;
