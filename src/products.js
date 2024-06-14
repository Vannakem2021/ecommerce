// airpods
import airpod1 from "./assets/airpod/AirPods (2nd generation).png";
import airpod2 from "./assets/airpod/AirPods (3rd generation).png";
import airpod3 from "./assets/airpod/AIRPODS MAX.png";
import airpod4 from "./assets/airpod/AirPods Pro (2nd generation).png";
import airpod5 from "./assets/airpod/AirPods Pro.png";
// headphones
import headphone1 from "./assets/headphone/1.JBL_TUNE_710BT_Product Image_Hero_Blush.png";
import headphone2 from "./assets/headphone/600BTNC_Hero_Black-1605x1605px.png";
import headphone3 from "./assets/headphone/JBL_CLUB_700BT_Product Photo_HERO.png";
import headphone4 from "./assets/headphone/JBL_Everest_710_Silver_Hero-1605x1605px.png";
import headphone5 from "./assets/headphone/JBL_LIVE400BT_Product-Photo_Hero_Black-1605x1605px.png";

// macbooks
import macbook1 from "./assets/macbook/MacBook Air with M2.png";
import macbook2 from "./assets/macbook/MacBook Air.png";
import macbook3 from "./assets/macbook/MacBook Pro 14 inch M2.png";
import macbook4 from "./assets/macbook/MacBook Pro 14 inch M3.png";
import macbook5 from "./assets/macbook/macbook air with m3.png";

// smartphones
import iphone1 from "./assets/smartphone/iphone 11 ione cambodia 1.png";
import iphone2 from "./assets/smartphone/iphone 13.png";
import iphone3 from "./assets/smartphone/iphone 15 pro.png";
import iphone4 from "./assets/smartphone/iphone 15.png";

// watches
import watch1 from "./assets/watches/apple-watch-se-4.png";
import watch2 from "./assets/watches/apple-watch-se.png";
import watch3 from "./assets/watches/apple-watch-series-8.png";
import watch4 from "./assets/watches/apple-watch-series-9-3.png";
import watch5 from "./assets/watches/apple-watch-ultra-2-3.png";

const productsArray = [
  {
    id: 15,
    image: headphone5,
    title: "JBL LIVE400BT",
    price: 379,
    description: "Experience true wireless freedom with JBL LIVE400BT.",
    category: "Headphones",
  },
  {
    id: 5,
    image: watch1,
    title: "Apple Watch series 4",
    price: 299,
    description:
      "Stay connected and track your fitness with Apple Watch Series 4.",
    category: "Watches",
  },
  {
    id: 18,
    image: headphone2,
    title: "600BTNC Hero Black",
    price: 199,
    description:
      "Immerse yourself in music with the noise-cancelling 600BTNC Hero Black.",
    category: "Headphones",
  },
  {
    id: 22,
    image: airpod3,
    title: "AIRPODS MAX",
    price: 699.99,
    description: "Luxurious sound and design with AIRPODS MAX.",
    category: "Airpods",
  },
  {
    id: 8,
    image: iphone2,
    title: "Iphone 13",
    price: 699,
    description: "Capture every moment with the advanced camera of iPhone 13.",
    category: "Smartphones",
  },
  {
    id: 13,
    image: macbook2,
    title: "MacBook Air",
    price: 899,
    description:
      "Lightweight and powerful, the MacBook Air is perfect for on-the-go.",
    category: "Macbooks",
  },
  {
    id: 1,
    image: watch5,
    title: "Apple Watch Ultra",
    price: 759,
    description: "Ultimate performance with the rugged Apple Watch Ultra.",
    category: "Watches",
  },
  {
    id: 20,
    image: airpod5,
    title: "AirPods Pro",
    price: 149,
    description:
      "Active noise cancellation and superior sound with AirPods Pro.",
    category: "Airpods",
  },
  {
    id: 9,
    image: iphone1,
    title: "Iphone 11",
    price: 519,
    description:
      "The iPhone 11 offers incredible value with a dual-camera system.",
    category: "Smartphones",
  },
  {
    id: 7,
    image: iphone3,
    title: "Iphone 15 pro",
    price: 1199,
    description:
      "The iPhone 15 Pro features cutting-edge technology and design.",
    category: "Smartphones",
  },
  {
    id: 19,
    image: headphone1,
    title: "JBL TUNE 710BT",
    price: 299,
    description:
      "Enjoy wireless music with deep bass and comfort with JBL TUNE 710BT.",
    category: "Headphones",
  },
  {
    id: 10,
    image: macbook5,
    title: "Macbook Air M3",
    price: 1299,
    description: "Efficiency and power with the new Macbook Air M3.",
    category: "Macbooks",
  },
  {
    id: 14,
    image: macbook1,
    title: "MacBook Air with M2",
    price: 1299,
    description: "Incredible performance with the MacBook Air M2 chip.",
    category: "Macbooks",
  },
  {
    id: 3,
    image: watch3,
    title: "Apple Watch series 8",
    price: 389,
    description: "Stay active and connected with Apple Watch Series 8.",
    category: "Watches",
  },
  {
    id: 24,
    image: airpod1,
    title: "AirPods (2nd generation)",
    price: 299,
    description: "Seamless wireless experience with AirPods (2nd generation).",
    category: "Airpods",
  },
  {
    id: 16,
    image: headphone4,
    title: "JBL Everest 710",
    price: 469,
    description: "Experience superior sound with JBL Everest 710.",
    category: "Headphones",
  },
  {
    id: 21,
    image: airpod4,
    title: "AirPods Pro (2nd generation)",
    price: 249,
    description: "Next-level sound with AirPods Pro (2nd generation).",
    category: "Airpods",
  },
  {
    id: 2,
    image: watch4,
    title: "Apple Watch series 9",
    price: 479,
    description:
      "Advanced health features and connectivity with Apple Watch Series 9.",
    category: "Watches",
  },
  {
    id: 6,
    image: iphone4,
    title: "Iphone 15",
    price: 899,
    description: "Sleek design and powerful features with iPhone 15.",
    category: "Smartphones",
  },
  {
    id: 4,
    image: watch2,
    title: "Apple Watch series",
    price: 329,
    description:
      "Versatile and stylish, the Apple Watch Series fits any lifestyle.",
    category: "Watches",
  },
  {
    id: 17,
    image: headphone3,
    title: "JBL CLUB 700BT",
    price: 399,
    description: "High-performance sound and comfort with JBL CLUB 700BT.",
    category: "Headphones",
  },
  {
    id: 23,
    image: airpod2,
    title: "AirPods (3rd generation)",
    price: 209,
    description:
      "Enhanced sound and longer battery life with AirPods (3rd generation).",
    category: "Airpods",
  },
  {
    id: 11,
    image: macbook4,
    title: "Macbook Pro M3",
    price: 2899,
    description: "Top-tier performance with the MacBook Pro M3 chip.",
    category: "Macbooks",
  },
  {
    id: 12,
    image: macbook3,
    title: "Macbook Pro M2",
    price: 2599,
    description: "Power and efficiency with the MacBook Pro M2 chip.",
    category: "Macbooks",
  },
];

const bestProducts = [
  {
    id: 2,
    image: watch4,
    title: "Apple Watch series 9",
    price: 479,
    description:
      "Advanced health features and connectivity with Apple Watch Series 9.",
    category: "Watches",
  },
  {
    id: 4,
    image: watch2,
    title: "Apple Watch series",
    price: 329,
    description:
      "Versatile and stylish, the Apple Watch Series fits any lifestyle.",
    category: "Watches",
  },
  {
    id: 6,
    image: iphone4,
    title: "Iphone 15",
    price: 899,
    description: "Sleek design and powerful features with iPhone 15.",
    category: "Smartphones",
  },
  {
    id: 23,
    image: airpod2,
    title: "AirPods (3rd generation)",
    price: 209,
    description:
      "Enhanced sound and longer battery life with AirPods (3rd generation).",
    category: "Airpods",
  },
  {
    id: 12,
    image: macbook3,
    title: "Macbook Pro M2",
    price: 2599,
    description: "Power and efficiency with the MacBook Pro M2 chip.",
    category: "Macbooks",
  },
  {
    id: 19,
    image: headphone1,
    title: "JBL TUNE 710BT",
    price: 299,
    description:
      "Enjoy wireless music with deep bass and comfort with JBL TUNE 710BT.",
    category: "Headphones",
  },
];

export { productsArray, bestProducts };
