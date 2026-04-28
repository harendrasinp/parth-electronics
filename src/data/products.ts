import refrigerator from "@/assets/cat-refrigerator.jpg";
import ac from "@/assets/cat-ac.jpg";
import tv from "@/assets/cat-tv.jpg";
import washer from "@/assets/cat-washer.jpg";

export const categories = [
  {
    id: "refrigerators",
    name: "Refrigerators",
    tagline: "Keep it fresh, longer",
    image: refrigerator,
    from: "Rs.96,599",
  },
  {
    id: "air-conditioners",
    name: "Air Conditioners",
    tagline: "Cool comfort, all year",
    image: ac,
    from: "Rs.85,999",
  },
  {
    id: "televisions",
    name: "Televisions",
    tagline: "Cinema at home",
    image: tv,
    from: "Rs.49,999",
  },
  {
    id: "washing-machines",
    name: "Washing Machines",
    tagline: "Powerful & gentle",
    image: washer,
    from: "Rs.34,999",
  },
];

export const offers = [
  {
    id: "tv-55",
    title: 'Smart 4K TV 55"',
    image: tv,
    discount: "-30%",
    oldPrice: "Rs.84,999",
    price: "Rs.59,999",
    category: "Televisions",
  },
  {
    id: "ac-inv",
    title: "Inverter Split AC 1.5T",
    image: ac,
    discount: "-25%",
    oldPrice: "Rs.59,999",
    price: "Rs.44,999",
    category: "Air Conditioners",
  },
  {
    id: "fridge-dd",
    title: "Double Door Refrigerator",
    image: refrigerator,
    discount: "-40%",
    oldPrice: "Rs.125,000",
    price: "Rs.69,999",
    category: "Refrigerators",
  },
  {
    id: "washer-fl",
    title: "Front Load Washer 8kg",
    image: washer,
    discount: "-20%",
    oldPrice: "Rs.68,500",
    price: "Rs.43,900",
    category: "Washing Machines",
  },
  {
    id: "tv-65",
    title: 'QLED 65" Smart TV',
    image: tv,
    discount: "-22%",
    oldPrice: "Rs.129,999",
    price: "Rs.99,999",
    category: "Televisions",
  },
  {
    id: "fridge-sxs",
    title: "Side-by-Side Fridge",
    image: refrigerator,
    discount: "-15%",
    oldPrice: "Rs.1019,000",
    price: "Rs.102,000",
    category: "Refrigerators",
  },
];