import { Media } from "./Media";

export interface FormTitle {
    title: string;
}

export interface ButtonText {
    buttonText: string;
}

export interface NewsletterComponents {
    formTitle: FormTitle;
    description: FormTitle;
    subscribeButton: ButtonText;
    // Add other component interfaces as needed
}

export interface NewsletterPageData {
    components: any;
    heroImage?: Media;
    title?: string;
    description?: string;
}
