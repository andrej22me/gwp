'use client';

import React, { useState, useEffect } from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import HeroImage from "@/components/HeroImage";
import GalleryFolders from "@/components/gallery/GalleryFolders";
import Gallery from './Gallery';
import { api } from "@/lib/api";
import { GalleryInterface } from '@/interfaces/Gallery';
import { GalleryType } from '@/interfaces/GalleryType';

interface GalleryPageProps {
    initialData: any;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ initialData }) => {
    const [data, setData] = useState(initialData);
    const [galleries, setGalleries] = useState<GalleryInterface[]>([]);
    const [selectedType, setSelectedType] = useState<GalleryType>(GalleryType.PHOTO);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGalleries = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await api.get('/galleries');
                if (Array.isArray(response)) {
                    setGalleries(response);
                } else if (Array.isArray(response)) {
                    setGalleries(response);
                } else {
                    setGalleries([]);
                }
            } catch (err) {
                setError('Failed to load galleries');
                console.error('Error fetching galleries:', err);
                setGalleries([]);
            } finally {
                setLoading(false);
            }
        };

        fetchGalleries();
    }, []);

    const handleGalleryTypeSelect = (type: GalleryType) => {
        setSelectedType(type);
    };

    const filteredGalleries = galleries.filter(gallery => gallery.type === selectedType);

    if (loading) {
        return (
            <DefaultLayout>
                <div className="container mx-auto py-8 text-center">
                    <p className="text-lg">Loading galleries...</p>
                </div>
            </DefaultLayout>
        );
    }

    if (error) {
        return (
            <DefaultLayout>
                <div className="container mx-auto py-8 text-center">
                    <p className="text-lg text-red-500">{error}</p>
                </div>
            </DefaultLayout>
        );
    }

    return (
        <DefaultLayout>
            <HeroImage 
                src={data.heroImage?.url || '/gallery.jpg'} 
                alt={data.heroImage?.alt || 'Hero image'} 
                title={data.title || 'Gallery'}
            />
            <GalleryFolders onSelectType={handleGalleryTypeSelect} />
            {filteredGalleries.length > 0 && (
               <Gallery galleries={filteredGalleries} />
            )}
        </DefaultLayout>
    );
};

export default GalleryPage;