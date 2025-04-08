import {Media} from "@/interfaces/Media";
import {GalleryType} from "@/interfaces/GalleryType";

export interface GalleryMedia {
    galleryId: number;
    media: Media;
    mediaId: number;
}

export interface GalleryInterface {
    id: number;
    title: string;
    eventYear?: number; // nullable or optional in Prisma => "number | null"; in TS, you can represent it as optional
    season?: string;
    type: GalleryType;
    createdAt: string; // or Date if you parse it
    updatedAt: string; // or Date if you parse it

    categoryId: number;
    category?: string; // can be optional if not always eager-loaded

    // If there's a relation to Event:
    eventId?: number;
    Event?: Event; // optional if not always loaded

    media?: GalleryMedia[]; // optional if not always loaded
}