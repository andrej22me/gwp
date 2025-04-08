export interface Component {
    id: number;
    title: string;
    description?: string;
    label: string;
    key: string;
    type: "IMAGE" | "BUTTON" | "TEXT" | "ICON"; // Enum based on Prisma schema
    sectionId: number;
}
