// add
// remove
// update

// let fruits = ["apple", "banana", "orange", "mango", "grape"];
// console.log(fruits);

// // Add Immutability
// const arr1 = [...fruits, "pineapple"];
// console.log(arr1);

// // Remove - Filter (Immutability)
// const arr2 = fruits.filter((fruit) => fruit !== "apple");
// console.log(arr2);

// // Update
// const arr3 = fruits.map((fruit) => fruit === "apple" ? "pineapple" : fruit);
// console.log(arr3);

// const macbook = {
//   brand: "Apple",
//   model: "MacBook Pro",
//   screenSize: 14, // in inches
//   batteryLife: "18 hours",
//   ports: ["USB-C", "Thunderbolt 4", "HDMI", "SDXC card slot", "MagSafe 3"],
//   hasTouchID: true,
//   operatingSystem: "macOS Sonoma",
//   priceUSD: 1999
// };

// console.log(macbook);

// // Mutability Way
// macbook.color = "Space Gray";
// console.log(macbook);

// // Add (Immutability)
// const obj1 = {...macbook, color: "Space Gray"};
// console.log(obj1);
// console.log(macbook);

// // Remove (Immutability)
// const {ports, ...obj2} = macbook; // Destructure
// console.log(obj2);
// console.log(macbook);

// // Update (Immutability)
// const obj2 = {...macbook, priceUSD: 2000};
// console.log(obj2);
// console.log(macbook);

const products = [
  {
    id: 1,
    name: 'MacBook Pro 14"',
    price: 1999.99,
    stock: 12,
    rating: 4.8,
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: 1099.0,
    stock: 25,
    rating: 4.6,
  },
  {
    id: 3,
    name: "iPad Air",
    price: 599.0,
    stock: 30,
    rating: 4.5,
  },
  {
    id: 4,
    name: "Apple Watch Series 9",
    price: 399.0,
    stock: 18,
    rating: 4.4,
  },
  {
    id: 5,
    name: "AirPods Pro (2nd Gen)",
    price: 249.0,
    stock: 40,
    rating: 4.7,
  },
];

// // Add (Immutability)
// const newProduct = {
//   id: 6,
//   name: "MacBook Pro 16\"",
//   price: 2399.99,
//   stock: 10,
//   rating: 4.9
// }

// const arr = [...products, newProduct];
// console.table(arr);

// Remove (Immutability)
// const arr = products.filter((product) => product.id !== 3);
// console.table(arr);

// // Update - specific (Immutability)
// const arr = products.map((product) => {
//   if(product.id == 3){
//     return { ...product, stock: product.stock + 50 }
//   }
//   return product;
// });

// console.table(arr);

// // Update - all (Immutability)
// const arr = products.map((product) => {
//   return { ...product, price: product.price + 100 };
// });
// console.table(arr);
// console.table(products);
