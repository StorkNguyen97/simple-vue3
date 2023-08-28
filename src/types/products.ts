export type Variant = {
    id: string;
    title: string;
    sku: string;
    quantity: number;
}

export type Product = {
    id: string;
    title: string;
    description: string;
    images: string[];
    category: string;
    variants: Variant[];
    price: number;
    tags: string[];
}
