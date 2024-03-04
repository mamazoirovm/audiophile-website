export interface Product {
    id: number;
    slug: string;
    name: string;
    image: ImageEntity;
    category: string;
    categoryImage: ImageEntity;
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes?: IncludesEntity[] | null;
    gallery: Gallery;
    others?: OthersEntity[] | null;
  }
  
  export interface ImageEntity {
    mobile: string;
    tablet: string;
    desktop: string;
  }
  
  export interface IncludesEntity {
    quantity: number;
    item: string;
  }
  
  export interface Gallery {
    first: ImageEntity;
    second: ImageEntity;
    third: ImageEntity;
  }
  export interface OthersEntity {
    slug: string;
    name: string;
    image: ImageEntity;
  }