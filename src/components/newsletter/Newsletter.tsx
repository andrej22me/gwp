'use client';

import React, { useState } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { TextArea } from "@/components/ui/textarea";
import HeroImage from "@/components/HeroImage";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { api } from "@/lib/api";
import { Gender } from "@/interfaces/Newsletter";
import { NewsletterPageData } from "@/interfaces/NewsletterComponents";

interface NewsletterProps {
    initialData?: NewsletterPageData;
}

const Newsletter: React.FC<NewsletterProps> = ({ initialData }) => {
    const [data, setData] = useState<NewsletterPageData>(initialData || {
        components: {
            formTitle: { title: "Newsletter Subscription" },
            description: { title: "Stay connected with the Global Water Polo community! Join our newsletter for exclusive updates on training programs, events, and insights from  top-level coaches." },
            subscribeButton: { buttonText: "Subscribe Now" }
        }
    });

    const [gender, setGender] = useState(Gender.Male);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        birthDate: "",
        club: "",
        gender: gender,
        highSchool: "",
        cityCountry: "",
        parentName: "",
        parentPhone: "",
        parentEmail: "",
        message: "",
    });

    // Add type definition for errors
    type FormErrors = {
        [key: string]: string;
    };

    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);

    // Handle form field changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Define Zod schemas for validation
    const nameSchema = z.string().min(1, "Name is required");
    const emailSchema = z.string().email("Invalid email address");
    const birthDateSchema = z.string().min(1, "Date of birth is required");
    const clubSchema = z.string().min(1, "Club/team is required");
    const highSchoolSchema = z.string().min(1, "High school is required");
    const messageSchema = z.string().min(10, "Message must be at least 10 characters");
    const parentNameSchema = z.string().min(1, "Parent's name is required");
    const parentPhoneSchema = z.string().min(1, "Parent's phone number is required");
    const parentEmailSchema = z.string().email("Invalid parent's email address");
    const citySchema = z.string().min(1, "City/Country is required");

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        let isValid = true;
        const newErrors = { ...errors };

        // Validate all fields using Zod
        try {
            nameSchema.parse(formData.name);
            emailSchema.parse(formData.email);
            birthDateSchema.parse(formData.birthDate);
            clubSchema.parse(formData.club);
            highSchoolSchema.parse(formData.highSchool);
            messageSchema.parse(formData.message);
            parentNameSchema.parse(formData.parentName);
            parentPhoneSchema.parse(formData.parentPhone);
            parentEmailSchema.parse(formData.parentEmail);
            citySchema.parse(formData.cityCountry);

            // If validation passes, submit the form
            const submitData = {
                ...formData,
                birthDate: formData.birthDate ? new Date(formData.birthDate).toISOString() : "",
                gender
            };

            try {
                const response = await api.post('/newsletter', submitData);
                console.log(response);
                setSubmitted(true);
                setFormData({
                    name: "",
                    email: "",
                    birthDate: "",
                    club: "",
                    gender: gender,
                    highSchool: "",
                    cityCountry: "",
                    parentName: "",
                    parentPhone: "",
                    parentEmail: "",
                    message: "",
                });
            } catch (error) {
                console.error("Error submitting form:", error);
            }

        } catch (error) {
            if (error instanceof z.ZodError) {
                error.errors.forEach((err) => {
                    const field = err.path[0] as keyof typeof newErrors;
                    newErrors[field] = err.message;
                    isValid = false;
                });
            }
            setErrors(newErrors);
        }
    };

    return (
        <DefaultLayout>
            <main className="min-h-screen">
                {data?.heroImage?.url && (
                    <HeroImage 
                        src={data.heroImage.url}
                        alt={data.heroImage.title || "Newsletter hero image"}
                        title={data.title || "Newsletter"}
                        objectPosition="top"
                    />
                )}

                <section className="mt-10 mb-10 lg:mb-24 px-4 relative">
                    <div className="max-w-5xl mx-auto">
                        {data?.description && (
                            <div className="text-center mb-12 lg:mb-52">
                                <p className="text-2xl leading-7 lg:text-[39px] lg:leading-[45px] font-montserrat font-bold mb-6">
                                    {data.description}
                                </p>
                            </div>
                        )}

                        {/* Registration Form */}
                        <div
                            className="bg-white p-10 lg:pt-24 rounded-br-[20px] rounded-tl-[20px] rounded-tr-[100px] rounded-bl-[100px] shadow-lg relative"
                        >
                            {/* Decorative Corner */}
                            <div
                                className="absolute -bottom-2 -left-2 lg:-left-12 lg:-bottom-12 w-[178px] h-[206px] bg-[#B39852] rounded-bl-[33px] rounded-br-[40px] -z-20"
                            />
                            <div
                                className="absolute -top-2 lg:-top-24 -right-2 lg:-right-2 2xl:-right-24 w-[184px] h-[188px] lg:w-[327px] lg:h-[468px] bg-[#FBE196] rounded-tl-[60px] rounded-br-[55px] -z-20"
                            />
                            {submitted ? (
                                <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                                    <h2 className="text-2xl font-bold text-center font-montserrat text-gray-800 mb-4">{data.components.submittedTitle.title}</h2>
                                    <p className="text-center text-gray-600 font-montserrat">
                                        {data.components.submittedDescription.title}
                                    </p>
                                    <div className="text-center flex justify-center">
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="bg-[#1C2A3A] mb-12 mt-6 font-ubuntu uppercase text-white px-8 py-4 rounded-[50px] w-full md:w-auto md:min-w-[341px] justify-center hover:bg-gray-800 transition flex items-center gap-2 font-medium"
                                        >
                                            {data.components.sendAnotherMessage.buttonText}
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <Input
                                            label="Athlete's Name"
                                            name="name"
                                            type="text"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                            error={errors.name}
                                            schema={nameSchema}
                                        />
                                        <Input
                                            label="Email"
                                            name="email"
                                            type="email"
                                            placeholder="johndoe@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            error={errors.email}
                                            schema={emailSchema}
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <Input
                                            label="Date of Birth"
                                            name="birthDate"
                                            type="date"
                                            value={formData.birthDate}
                                            onChange={handleChange}
                                            error={errors.birthDate}
                                            schema={birthDateSchema}
                                        />
                                        <div>
                                            <label className="block text-sm font-medium text-[#B0B2B2] uppercase mb-1">Athletes
                                                Gender</label>
                                            <select
                                                value={gender}
                                                onChange={(e) => setGender(e.target.value as Gender)}
                                                className="w-full px-4 py-2 border-b h-10 border-[#EBEEEF] bg-transparent focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
                                            >
                                                <option value={Gender.Male}>Male</option>
                                                <option value={Gender.Female}>Female</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <Input
                                            label="Club / Team"
                                            name="club"
                                            type="text"
                                            placeholder="Enter your club or team"
                                            value={formData.club}
                                            onChange={handleChange}
                                            error={errors.club}
                                            schema={clubSchema}
                                        />
                                        <Input
                                            label="High School"
                                            name="highSchool"
                                            type="text"
                                            placeholder="Enter your high school"
                                            value={formData.highSchool}
                                            onChange={handleChange}
                                            error={errors.highSchool}
                                            schema={highSchoolSchema}
                                        />
                                    </div>

                                    <div className="grid gap-6">
                                        <Input
                                            label="City, Country"
                                            name="cityCountry"
                                            type="text"
                                            placeholder="Los Angeles, USA"
                                            value={formData.cityCountry}
                                            onChange={handleChange}
                                            schema={citySchema}
                                        />
                                    </div>

                                    {/* Parent Information */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <Input
                                            label="Parent's Name"
                                            name="parentName"
                                            type="text"
                                            placeholder="John Doe"
                                            value={formData.parentName}
                                            onChange={handleChange}
                                            error={errors.parentName}
                                            schema={parentNameSchema}
                                        />
                                        <Input
                                            label="Parent's Phone Number"
                                            name="parentPhone"
                                            type="tel"
                                            placeholder="(555) 123-4567"
                                            value={formData.parentPhone}
                                            onChange={handleChange}
                                            error={errors.parentPhone}
                                            schema={parentPhoneSchema}
                                        />
                                    </div>

                                    <div className="grid gap-6">
                                        <Input
                                            label="Parent's Email"
                                            name="parentEmail"
                                            type="email"
                                            placeholder="parent@example.com"
                                            value={formData.parentEmail}
                                            onChange={handleChange}
                                            error={errors.parentEmail}
                                            schema={parentEmailSchema}
                                        />
                                    </div>

                                    <TextArea
                                        label="Message"
                                        name="message"
                                        placeholder="Any additional information or questions..."
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        error={errors.message}
                                        schema={messageSchema}
                                    />

                                    <div className="flex justify-center">
                                        <button
                                            type="submit"
                                            className="bg-[#1C2A3A] mb-12 mt-10 font-ubuntu uppercase text-white px-8 py-4 rounded-[50px] w-full md:w-auto md:min-w-[341px] justify-center hover:bg-gray-800 transition flex items-center gap-2 font-medium"
                                        >
                                            {data.components.subscribeNow.buttonText}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </DefaultLayout>
    );
};

export default Newsletter;
