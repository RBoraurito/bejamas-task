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
  category: string;
}

interface FeaturedProduct extends Product {
  details: {
    recomendations: Img[];
    description: string;
    size: number;
    dimentions: Dimentions;
  }
}

type Categories = Array<{name: string}>

type ProductResponse = {
  pages: number;
  data: Product[];
}

type Filters = {
  sort: string[];
  categories?: string[];
  price?: string[];
}

type IconProps = import('./icons').IconProps