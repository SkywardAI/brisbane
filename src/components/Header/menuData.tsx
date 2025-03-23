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
        title: "Waiting for release",
        path: "/",
        newTab: false,
      }
    ],
  },
  {
    id: 4,
    title: "Research",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Waiting for release",
        path: "/",
        newTab: false,
      }
    ],
  },
  {
    id: 5,
    title: "Open Source",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Waiting for release",
        path: "/",
        newTab: false,
      }
    ],
  },
  {
    id: 6,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
