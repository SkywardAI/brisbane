import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Products",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Local Intelligence",
        path: "/local-intellegence",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Solutions",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Private Cloud",
        path: "/private-cloud",
        newTab: false,
      }
    ],
  },
  {
    id: 4,
    title: "Research+",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Papers",
        path: "/academic-publish",
        newTab: false,
      },
      {
        id: 42,
        title: "Principles",
        path: "/principles",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
