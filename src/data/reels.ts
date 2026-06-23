export interface Reel {
  id: string;
  videoUrl: string;
  title: string;
  category?: string;
  productLink?: string;
  likes?: string;
}

export const luxuryReels: Reel[] = [
  {
    id: "reel-01",
    videoUrl: "/videos/reels/reel-01.mp4",
    title: "The Autumn Silk Drape",
    category: "Ethnic Wear",
    productLink: "/shop/ethnic-wear-01",
    likes: "1.2k"
  },
  {
    id: "reel-02",
    videoUrl: "/videos/reels/reel-02.mp4",
    title: "Chiffon Elegance",
    category: "Party Wear",
    productLink: "/shop/party-wear-01",
    likes: "984"
  },
  {
    id: "reel-03",
    videoUrl: "/videos/reels/reel-03.mp4",
    title: "Classic Cotton Minimalist",
    category: "Casual Wear",
    productLink: "/shop/casual-wear-01",
    likes: "2.1k"
  },
  {
    id: "reel-04",
    videoUrl: "/videos/reels/reel-04.mp4",
    title: "Modern Heritage Suit",
    category: "Pakistani Suits",
    productLink: "/shop/pakistani-suits-01",
    likes: "1.5k"
  },
  {
    id: "reel-05",
    videoUrl: "/videos/reels/reel-05.mp4",
    title: "The Velvet Evening Gown",
    category: "Party Wear",
    productLink: "/shop/party-wear-02",
    likes: "3.4k"
  }
];