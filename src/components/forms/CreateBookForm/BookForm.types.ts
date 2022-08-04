export interface BookFormDefaultValues {
    title: string;
    authors: string;
    image: string;
    price: string;
}

export interface BookFormProps {
    shouldUpdate?: boolean;
    book?: BookFormDefaultValues;
    classes?: {root?: string;};
}