export interface NavItem {
  label: string;
  href: string;
  featured?: boolean;
  children?: { label: string; href: string }[];
}

export const navigationLinks: NavItem[] = [
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "All Products", href: "/shop" },
      { label: "Pakistani Suits", href: "/shop?category=pakistani-suits" },
      { label: "Ethnic Wear", href: "/shop?category=ethnic-wear" },
      { label: "Casual Wear", href: "/shop?category=casual-wear" },
      { label: "Party Wear", href: "/shop?category=party-wear" },
    ],
  },
  {
    label: "Collections",
    href: "/collections",
  },
  {
    label: "Our Story",
    href: "/about",
  },
  {
    label: "Faq",
    href: "/faq",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];