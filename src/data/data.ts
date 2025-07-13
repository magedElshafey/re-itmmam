import about from "../assets/about-01.png";
// types
import { Nav } from "../types/Nav";
export const navLinks: Nav[] = [
  {
    name: "Welcome   Page",
    link: "/",
    id: 1,
  },
  {
    name: "About itmmam investments",
    link: "/about",
    id: 2,
  },
  {
    name: "meet our team",
    link: "/team",
    id: 3,
  },
  {
    name: "our range of services",
    link: "/services",
    id: 4,
  },
  {
    name: "declerations",
    link: "/lists",
    id: 5,
    list: [
      {
        name: "declerations",
        link: "/declerations",
        id: 51,
      },
      {
        name: "publications",
        link: "publications",
        id: 52,
      },
    ],
  },
  {
    name: "inquires",
    link: "/call-us",
    id: 4,
    list: [
      {
        name: "inquires",
        link: "/inquires",
        id: 42,
      },
      {
        name: "complaints",
        link: "/customer-complaints",
        id: 41,
      },
    ],
  },
  // {
  //   name: "Privacy and policy",
  //   link: "/privacy",
  //   id: 9
  // }
];
export const footerLinks: Nav[] = [
  {
    name: "terms and conditions",
    link: "/services",
    id: 6,
    list: [
      {
        name: "privacy and policy",
        link: "/privacy",
        id: 3,
      },
      {
        name: "terms and conditionss",
        link: "/terms",
        id: 4,
      },
      {
        name: "Disclosure policy",
        link: "/policy",
        id: 5,
      },
      {
        name: "Customer complaints",
        link: "/customer-complaints",
        id: 5,
      },
    ],
  },
];

export const aboutSuuport: { title: string; description: string }[] = [
  {
    title: "Integrated Expertise",
    description:
      "From structuring complex deals to managing multi-asset funds . we cover the entire investments",
  },
  {
    title: "Integrated Expertise",
    description:
      "From structuring complex deals to managing multi-asset funds . we cover the entire investments",
  },
  {
    title: "Integrated Expertise",
    description:
      "From structuring complex deals to managing multi-asset funds . we cover the entire investments",
  },
];
export const whyUs: { title: string; description: string }[] = [
  {
    title: "Integrated Expertise",
    description:
      "From structuring complex deals to managing multi-asset funds . we cover the entire investments",
  },
  {
    title: "Integrated Expertise",
    description:
      "From structuring complex deals to managing multi-asset funds . we cover the entire investments",
  },
  {
    title: "Integrated Expertise",
    description:
      "From structuring complex deals to managing multi-asset funds . we cover the entire investments",
  },
];
export const ourMandate: {
  image: string;
  title: string;
  description: string;
}[] = [
  {
    image: about,
    title: "Asset Management",
    description:
      "Disciplined, research investment process while being cognizant of risks for managing  portfoliosspanning multiple asset classes, all stewarded with fiduciary rigor.",
  },
  {
    image: about,
    title: "Asset Management",
    description:
      "Disciplined, research investment process while being cognizant of risks for managing  portfoliosspanning multiple asset classes, all stewarded with fiduciary rigor.",
  },
  {
    image: about,
    title: "Asset Management",
    description:
      "Disciplined, research investment process while being cognizant of risks for managing  portfoliosspanning multiple asset classes, all stewarded with fiduciary rigor.",
  },
];
export const journey = {
  title: "Your Journey with Itmam Invest",
  details: [
    "Design a bespoke portfolio built on rigorous quantitative and Sharia-compliant frameworks",
    "Design a bespoke portfolio built on rigorous quantitative and Sharia-compliant frameworks",
    "Design a bespoke portfolio built on rigorous quantitative and Sharia-compliant frameworks",
    "Design a bespoke portfolio built on rigorous quantitative and Sharia-compliant frameworks",
  ],
};
