import { type } from 'os';

type FirebaseError = {
  type: string,
  message: unknown
}

type Img = {
  src: string;
  alt: string;
}

type Dimentions = {
  height: number;
  width: number
}

interface Product {
  name: string;
  price: number;
  currency: string;
  bestseller: boolean;
  featured: boolean;
  image: Img;
}

interface FeaturedProduct extends Product {
  details: {
    recomendations: Img[];
    description: string;
    size: number;
    dimentions: Dimentions;
  }
}

type IconProps = import('./icons').IconProps