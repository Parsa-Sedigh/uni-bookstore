export interface BookCardActions {
    edit?: boolean;
    delete?: boolean;
}

export interface BookCardProps {
    id: number;
    title: string;
    image: string;
    price: number;
    actions?: BookCardActions;
}