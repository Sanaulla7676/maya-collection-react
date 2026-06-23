export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "shipping" | "sizing" | "orders" | "care";
}

export const luxuryFAQs: FAQItem[] = [
  {
    id: "faq-01",
    category: "sizing",
    question: "Do you offer bespoke custom tailoring?",
    answer: "Yes. Many of our Pakistani Suits and ethnic silhouettes are crafted to allow custom modifications. You can submit your exact body measurements by choosing 'Custom Sizing' on the product detail page, or by contacting our design concierge via email immediately after placing your order."
  },
  {
    id: "faq-02",
    category: "shipping",
    question: "What are your delivery timelines and luxury packaging?",
    answer: "Every order is packaged inside our signature linen storage boxes. Standard domestic shipping takes 3-5 business days. International express shipping takes 5-9 business days. Customized or custom-stitched garments require an additional 14-21 days for meticulous artisan crafting."
  },
  {
    id: "faq-03",
    category: "care",
    question: "How do I preserve the quality of silk, velvet, and hand-embroidered items?",
    answer: "Because we use pure, premium organic threads, hand-embroidery, and raw silk/velvet, we recommend dry cleaning only. Store your garments in a dry environment inside our provided breathable garment bags, and avoid spraying perfume directly on tilla or gold threadwork."
  },
  {
    id: "faq-04",
    category: "orders",
    question: "What is your return and exchange policy?",
    answer: "We offer complimentary 14-day returns on all ready-to-wear pieces in their original, unaltered condition with luxury tags intact. Please note that custom-stitched garments, customized bridal suits, and bespoke orders are tailored specifically to your dimensions and cannot be returned or exchanged."
  }
];