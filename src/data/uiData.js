import logo from "../../images/iteration-1-images/logo.svg";
import homeBanner from "../../images/iteration-1-images/home-banner.png";
import icon1 from "../../images/iteration-2-images/icons/1.svg";
import icon2 from "../../images/iteration-2-images/icons/2.svg";
import icon3 from "../../images/iteration-2-images/icons/3.svg";
import icon4 from "../../images/iteration-2-images/icons/4.svg";
import icon5 from "../../images/iteration-2-images/icons/5.svg";
import icon6 from "../../images/iteration-2-images/icons/6.svg";
import cta1 from "../../images/iteration-2-images/cta/kart-1.png";
import cta2 from "../../images/iteration-2-images/cta/kart-2.png";
import cta3 from "../../images/iteration-2-images/cta/kart-3.png";
import food1 from "../../images/iteration-2-images/pictures/food-1.png";
import food2 from "../../images/iteration-2-images/pictures/food-2.png";
import food3 from "../../images/iteration-2-images/pictures/food-3.png";
import footerLogo from "../../images/iteration-2-images/footer/logo-footer.svg";
import footerIcon1 from "../../images/iteration-2-images/footer/icons/icon-1.png";
import footerIcon2 from "../../images/iteration-2-images/footer/icons/icon-2.png";
import footerIcon3 from "../../images/iteration-2-images/footer/icons/icon-3.png";
import insta0 from "../../images/iteration-2-images/footer/insta/li-0.png";
import insta1 from "../../images/iteration-2-images/footer/insta/li-1.png";
import insta2 from "../../images/iteration-2-images/footer/insta/li-2.png";
import insta3 from "../../images/iteration-2-images/footer/insta/li-3.png";
import insta4 from "../../images/iteration-2-images/footer/insta/li-4.png";
import insta5 from "../../images/iteration-2-images/footer/insta/li-5.png";

export const ASSET = { logo, homeBanner, footerLogo };

export const HOME_CATEGORIES = [
  { id: "kore", label: "YENI! Kore", icon: icon1 },
  { id: "pizza", label: "Pizza", icon: icon2 },
  { id: "burger", label: "Burger", icon: icon3 },
  { id: "kizartma", label: "Kizartmalar", icon: icon4 },
  { id: "fast", label: "Fast food", icon: icon5 },
  { id: "icecek", label: "Gazli icecek", icon: icon6 },
];

export const HOME_CTA = [
  {
    id: "ozel",
    title: "Ozel Lezzetus",
    image: cta1,
    button: "SIPARIS VER",
    orderProduct: {
      name: "Position Absolute Aci Pizza",
      price: 85.5,
      rate: "4.9",
    },
  },
  {
    id: "hackathon",
    title: "Hackathlon Burger Menu",
    image: cta2,
    button: "SIPARIS VER",
    orderProduct: { name: "Terminal Pizza", price: 60, rate: "4.9" },
  },
  {
    id: "kurye",
    title: "Cooook hizli npm gibi kurye",
    image: cta3,
    button: "SIPARIS VER",
    orderProduct: { name: "useEffect Tavuklu Burger", price: 75, rate: "4.9" },
  },
];

export const HOME_MENU_FILTERS = [
  { id: "ramen", label: "Ramen" },
  { id: "pizza", label: "Pizza" },
  { id: "burger", label: "Burger" },
  { id: "fries", label: "French fries" },
  { id: "fast", label: "Fast food" },
  { id: "soft", label: "Soft drinks" },
];

export const HOME_PRODUCTS = [
  {
    id: "terminal",
    name: "Terminal Pizza",
    image: food1,
    rate: "4.9",
    price: "60₺",
    unitPrice: 60,
    filterTags: ["pizza", "fast"],
  },
  {
    id: "absolute",
    name: "Position Absolute Aci Pizza",
    image: food2,
    rate: "4.9",
    price: "85₺",
    unitPrice: 85.5,
    filterTags: ["pizza", "fast"],
  },
  {
    id: "effect",
    name: "useEffect Tavuklu Burger",
    image: food3,
    rate: "4.9",
    price: "75₺",
    unitPrice: 75,
    filterTags: ["burger", "fast"],
  },
];

export const FOOTER_INFO = {
  contact: [
    {
      id: "adres",
      icon: footerIcon1,
      text: "341 Londonderry Road, Istanbul Turkiye",
    },
    { id: "mail", icon: footerIcon2, text: "aciktim@teknolojik.com" },
    { id: "tel", icon: footerIcon3, text: "+90 216 123 45 67" },
  ],
  menu: [
    "Terminal Pizza",
    "5 Kisilik Hackathlon Pizza",
    "useEffect Tavuklu Pizza",
    "Beyaz Console Frosty",
    "Testler Gecti Mutlu Burger",
    "Position Absolute Aci Burger",
  ],
  insta: [insta0, insta1, insta2, insta3, insta4, insta5],
};
