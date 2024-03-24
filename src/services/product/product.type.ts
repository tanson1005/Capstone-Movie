export interface IProductApi {
    id: number;
    name: string;
    alias: string;
    price: number;
    feature: boolean;
    description: string;
    size: string[];
    shortDescription: string;
    quantity: number;
    image: string;
    categories: ICategory[];
    relatedProducts: IRelatedProduct[];
}

export interface ICategory {
    id: string;
    category: string;
}

export interface IRelatedProduct {
    id: number;
    name: string;
    alias: string;
    feature: boolean;
    price: number;
    description: string;
    shortDescription: string;
    image: string;
}
