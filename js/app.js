const $ = document,
  productImgElem = $.querySelector('.product-cover'),
  productTitleElem = $.querySelector('.product-page-title'),
  productDescElem = $.querySelector('.product-page_caption'),
  productPriceElem = $.querySelector('.product-price');


const products = [
  {
    id: 1,
    title: "Lenovo IdeaPad Slim 3 15IRH8 - 15.6 inch Laptop - i7 13620H 16GB 512GB SSD",
    price: 320,
    img: "./public/images/products/image01.png",
    description: "This Lenovo laptop features a powerful 13th generation i7 processor and 16GB RAM, suitable for daily and heavy tasks. The 512GB SSD storage provides fast performance."
  },
  {
    id: 2,
    title: "ASUS VivoBook R465FA - 14 inch Laptop - Core i5 1135G7 8GB 256GB SSD",
    price: 270,
    img: "./public/images/products/image02.png",
    description: "Budget-friendly ASUS laptop with 11th generation i5 processor, 8GB RAM and 256GB SSD storage, suitable for daily and light usage."
  },
  {
    id: 3,
    title: "Apple MacBook Air 2020 - 13.3 inch Laptop - M1 8GB 256GB SSD",
    price: 550,
    img: "./public/images/products/image03.png",
    description: "MacBook Air with M1 processor and 8GB RAM, ideal for professional Apple users seeking high speed and performance in a lightweight body."
  },
  {
    id: 4,
    title: "HP Envy x360 - 16 inch Convertible Laptop - Ryzen 7 5700U 16GB 512GB SSD",
    price: 470,
    img: "./public/images/products/image04.png",
    description: "HP convertible laptop with Ryzen 7 processor and 16GB RAM, suitable for graphics work and multimedia. Features a 16-inch display and excellent build quality."
  },
  {
    id: 5,
    title: "Dell G5 15 SE - 15.6 inch Gaming Laptop - Ryzen 5 4600H 8GB 512GB SSD",
    price: 360,
    img: "./public/images/products/image05.png",
    description: "Dell gaming laptop with Ryzen 5 processor and 8GB RAM, suitable for gamers and professional users seeking powerful performance."
  },
  {
    id: 6,
    title: "Acer Nitro 5 AN515-45 - 15.6 inch Gaming Laptop - Ryzen 7 5800H 16GB 1TB SSD",
    price: 540,
    img: "./public/images/products/image06.png",
    description: "A powerful gaming laptop from Acer with Ryzen 7 processor and 16GB RAM. Features 1TB SSD storage for large games and fast execution."
  },
  {
    id: 7,
    title: "Lenovo ThinkPad X1 Carbon Gen 9 - 14 inch Business Laptop - Core i7 1165G7 16GB 1TB SSD",
    price: 620,
    img: "./public/images/products/image07.png",
    description: "Professional and high-quality laptop from ThinkPad series with i7 processor and 16GB RAM. Suitable for business and professional users seeking high build quality and security."
  },
  {
    id: 8,
    title: "Dell XPS 13 - 13.3 inch Premium Laptop - Core i7 1185G7 16GB 512GB SSD",
    price: 710,
    img: "./public/images/products/image08.png",
    description: "Dell XPS laptop with beautiful design and i7 processor, 16GB RAM and high-quality display, an excellent choice for professional users and technology enthusiasts."
  },
  {
    id: 9,
    title: "ASUS ZenBook 14 - 14 inch Ultrabook - Ryzen 5 5500U 8GB 512GB SSD",
    price: 380,
    img: "./public/images/products/image09.png",
    description: "Lightweight and beautiful laptop from ZenBook series with Ryzen 5 processor and 8GB RAM. Suitable for daily and light work with strong battery life."
  },
  {
    id: 10,
    title: "MSI GF63 Thin 11SC - 15.6 inch Gaming Laptop - Core i5 11400H 16GB 512GB SSD",
    price: 460,
    img: "./public/images/products/image10.png",
    description: "Powerful MSI laptop with 11th generation i5 processor, 16GB RAM and suitable graphics card. An excellent option for gamers and professional users."
  },
  {
    id: 11,
    title: "HP Pavilion 15 - 15.6 inch Laptop - Core i5 1235U 8GB 512GB SSD",
    price: 340,
    img: "./public/images/products/image11.png",
    description: "Budget HP laptop with 12th generation i5 processor, 8GB RAM and 512GB SSD storage, suitable for daily and business use."
  },
  {
    id: 12,
    title: "Apple MacBook Pro 2021 - 16 inch Laptop - M1 Pro 16GB 1TB SSD",
    price: 850,
    img: "./public/images/products/image12.png",
    description: "MacBook Pro with M1 Pro processor and 16GB RAM, suitable for professional Apple users seeking unparalleled performance in heavy and professional work."
  }
];


const searchParams = new URLSearchParams(location.search),
  mainProductId = searchParams.get('id');

let mainProduct = products.find(mainProduct => mainProduct.id === +mainProductId);

if(mainProduct) {
  productImgElem.src = mainProduct.img;
  productTitleElem.textContent = mainProduct.title;
  productDescElem.textContent = mainProduct.description;
  productPriceElem.textContent = `$${mainProduct.price}`;
} else {
  location.href = 'http://127.0.0.1:5500/index.html?id=1';
}
