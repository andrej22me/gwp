import { Media } from "./Media";

export interface FormTitle {
    title: string;
}

export interface ContactPageComponents {
    formTitle: FormTitle;
    // Add other component interfaces as needed
}

export interface ContactPageData {
    components: ContactPageComponents;
    heroImage?: Media;
    // You can include other page data here if needed
}
