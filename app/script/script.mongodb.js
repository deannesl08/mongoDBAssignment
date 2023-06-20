// Select the database to use.
use("DressStore");


db.getCollection("categories").insertMany([
  {
    name: "Men"
  },{
    name: "Women"
  },{
    name: "Teens"
  }
]);


db.getCollection("products").insertMany(
  [
    {
      name: "Men's T-Shirt",
      description: "A comfortable and stylish t-shirt for men.",
      price: 19.99,
      published: true,
      category: "Men",
    },
    {
      name: "Women's Sneakers",
      description: "Trendy sneakers designed for women.",
      price: 49.99,
      published: true,
      category: "Women",
    },
    {
      name: "Teen's Backpack",
      description: "A spacious backpack for teenagers.",
      price: 34.99,
      published: false,
      category: "Teens",
    },
    {
      name: "Men's Jeans",
      description: "Classic denim jeans for men.",
      price: 59.99,
      published: true,
      category: "Men",
    },
    {
      name: "Women's Dress",
      description: "An elegant dress for women.",
      price: 79.99,
      published: true,
      category: "Women",
    },
    {
      name: "Teen's Hoodie",
      description: "A cozy hoodie perfect for teenagers.",
      price: 29.99,
      published: true,
      category: "Teens",
    },
    {
      name: "Men's Running Shoes",
      description: "High-performance running shoes for men.",
      price: 89.99,
      published: true,
      category: "Men",
    },
    {
      name: "Women's Handbag",
      description: "A fashionable handbag for women.",
      price: 69.99,
      published: true,
      category: "Women",
    },
    {
      name: "Teen's Graphic T-Shirt",
      description: "A cool graphic t-shirt for teenagers.",
      price: 14.99,
      published: false,
      category: "Teens",
    },
    {
      name: "Men's Watch",
      description: "A stylish wristwatch for men.",
      price: 129.99,
      published: true,
      category: "Men",
    },
  ],
);
