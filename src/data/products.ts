export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  category: "pakistani-suits" | "ethnic-wear" | "casual-wear" | "party-wear";
  description: string;
  details: string[];
  images: string[]; // High-end shop displays use multiple images for hover swap animations
  inStock: boolean;
  featured?: boolean;
}

export const luxuryProducts: Product[] = [
  {
    id: "pakistani-suit-01",
    name: "Crimson Velvet Heila",
    price: 240,
    currency: "USD",
    category: "pakistani-suits",
    description: "An elegant crimson velvet canvas featuring intricate hand-crafted embroidery and matching silk trousers.",
    details: [
      "100% Premium Velvet fabric",
      "Hand-embroidered gold tilla work",
      "Silk trouser and embroidered chiffon dupatta included",
      "Dry clean only"
    ],
    images: [
      "/images/products/pakistani-suits/pakistani-suits-01.png",
      "/images/products/pakistani-suits/pakistani-suit-02.png"
    ],
    inStock: true,
    featured: true
  },
  {
    id: "ethnic-wear-01",
    name: "Classic Ivory Anarkali",
    price: 195,
    currency: "USD",
    category: "ethnic-wear",
    description: "A flowing ivory anarkali suit decorated with delicate thread-work, perfect for afternoon luxury events.",
    details: [
      "Lightweight georgette base",
      "Satin lining for maximum comfort",
      "Stitched with traditional kalis for a premium flare",
      "Sheer organza dupatta with scalloped borders"
    ],
    images: [
      "/images/products/ethnic-wear/ethnic-wear-01.png",
      "/images/products/ethnic-wear/ethnic-wear-02.jpg"
    ],
    inStock: true,
    featured: true
  },
  {
    id: "casual-wear-01",
    name: "Minimalist Linen Kurta Set",
    price: 110,
    currency: "USD",
    category: "casual-wear",
    description: "An effortless linen set featuring clean structural lines and a modern minimal silhouette.",
    details: [
      "Pure organic linen weave",
      "Breathable summer-ready weight",
      "Hidden side pockets",
      "Eco-friendly coconut shell buttons"
    ],
    images: [
      "/images/products/casual-wear/casual-wear-01.jpg",
      "/images/products/casual-wear/casual-wear-02.jpg"
    ],
    inStock: true,
    featured: false
  },
  {
    id: "party-wear-01",
    name: "Midnight Silk Chanderi",
    price: 280,
    currency: "USD",
    category: "party-wear",
    description: "An opulent deep navy Chanderi silk suit accented with metallic thread patterns and structural pants.",
    details: [
      "Authentic hand-woven Chanderi silk",
      "Detailed with metallic zari threads",
      "Fully lined with mulmul cotton",
      "Includes structured silk trousers"
    ],
    images: [
      "/images/products/party-wear/party-wear-01.png",
      "/images/products/party-wear/party-wear-02.png"
    ],
    inStock: true,
    featured: true
  }
];