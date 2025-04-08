import { Media } from "./Media";
import { Section } from "./Section";

export interface PageInterface {
    id: number;
    slug: string;
    title: string;
    description?: string;
    heroImageId?: number;
    heroImage?: Media; // Assuming Media is another model
    createdAt: string; // ISO string format (Date)
    updatedAt: string;
    seoTitle: string;
    seoDescription: string;
    sections: Section[];
}
