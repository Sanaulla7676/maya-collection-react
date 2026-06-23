export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  videoUrl: string;
  posterUrl: string;
}

export const heroData: HeroSlide = {
  id: "hero-luxury-01",
  title: "A Study in Sophistication",
  subtitle: "Exquisite hand-crafted pieces meticulously tailored to frame your individuality.",
  ctaText: "Explore Collection",
  ctaLink: "/shop",
  videoUrl: "/videos/hero-video.mp4",
  posterUrl: "/images/hero-poster.jpeg",
};