export interface Collection {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
}

export const luxuryCollections: Collection[] = [
  {
    id: "col-01",
    slug: "pakistani-suits",
    title: "Pakistani Suits",
    subtitle: "Ornate Traditions",
    description: "Opulent fabrics embellished with delicate craftwork, balancing old-world charm with modern wearability.",
    coverImage: "/images/collections/pakistani-suits-cover.png"
  },
  {
    id: "col-02",
    slug: "ethnic-wear",
    title: "Ethnic Wear",
    subtitle: "Timeless Silhouettes",
    description: "Classic kurtas and dresses that highlight rich draping traditions and refined handwork.",
    coverImage: "/images/collections/ethnic-wear-cover.png"
  },
  {
    id: "col-03",
    slug: "casual-wear",
    title: "Casual Wear",
    subtitle: "Everyday Sophistication",
    description: "Relaxed tailored fits crafted in organic, premium materials for effortless elegant daily styling.",
    coverImage: "/images/collections/casual-wear-cover.png"
  },
  {
    id: "col-04",
    slug: "party-wear",
    title: "Party Wear",
    subtitle: "Midnight Glamour",
    description: "Dramatic evening garments designed with rich textures and modern artistic embellishments.",
    coverImage: "/images/collections/party-wear-cover.png"
  }
];