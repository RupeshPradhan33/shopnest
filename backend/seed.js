const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Product = require("./model/Product");
const User = require("./model/User");

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully for seeding.");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: "Admin@123",
        role: "admin",
        verified: true,
    },
    {
        name: "Jane Doe",
        email: "jane@example.com",
        password: "User@123",
        role: "user",
        verified: true,
    },
    {
        name: "John Smith",
        email: "john@example.com",
        password: "User@123",
        role: "user",
        verified: false,
    },
];

const products = [
    {
        name: "Classic White T-Shirt",
        description: "Soft cotton tee with a relaxed fit and timeless style.",
        price: 19.99,
        category: "Clothing",
        stock: 120,
        imageUrl: "https://via.placeholder.com/400x400?text=White+T-Shirt",
        rating: 4.5,
        numReviews: 28,
    },
    {
        name: "Wireless Bluetooth Headphones",
        description: "Noise-cancelling over-ear headphones with long battery life.",
        price: 89.99,
        category: "Electronics",
        stock: 65,
        imageUrl: "https://via.placeholder.com/400x400?text=Bluetooth+Headphones",
        rating: 4.7,
        numReviews: 112,
    },
    {
        name: "Running Sneakers",
        description: "Lightweight running shoes designed for comfort and speed.",
        price: 74.0,
        category: "Footwear",
        stock: 78,
        imageUrl: "https://via.placeholder.com/400x400?text=Running+Sneakers",
        rating: 4.4,
        numReviews: 61,
    },
    {
        name: "Smartwatch Fitness Tracker",
        description: "Track workouts, sleep, and notifications in one sleek watch.",
        price: 129.99,
        category: "Electronics",
        stock: 52,
        imageUrl: "https://via.placeholder.com/400x400?text=Smartwatch",
        rating: 4.3,
        numReviews: 47,
    },
    {
        name: "Travel Backpack",
        description: "Durable backpack with multiple compartments for daily carry.",
        price: 49.95,
        category: "Accessories",
        stock: 134,
        imageUrl: "https://via.placeholder.com/400x400?text=Travel+Backpack",
        rating: 4.6,
        numReviews: 74,
    },
    {
        name: "Ceramic Coffee Mug",
        description: "18oz ceramic mug with modern design and comfortable handle.",
        price: 14.5,
        category: "Home",
        stock: 210,
        imageUrl: "https://via.placeholder.com/400x400?text=Coffee+Mug",
        rating: 4.8,
        numReviews: 99,
    },
    {
        name: "Desk Lamp",
        description: "Adjustable LED desk lamp with warm and cool light modes.",
        price: 34.99,
        category: "Home",
        stock: 87,
        imageUrl: "https://via.placeholder.com/400x400?text=Desk+Lamp",
        rating: 4.5,
        numReviews: 55,
    },
    {
        name: "Yoga Mat",
        description: "Non-slip yoga mat with cushioned support for workouts.",
        price: 25.0,
        category: "Fitness",
        stock: 98,
        imageUrl: "https://via.placeholder.com/400x400?text=Yoga+Mat",
        rating: 4.4,
        numReviews: 38,
    },
    {
        name: "Waterproof Phone Case",
        description: "Protects your phone from water, dust, and scratches.",
        price: 17.0,
        category: "Accessories",
        stock: 142,
        imageUrl: "https://via.placeholder.com/400x400?text=Phone+Case",
        rating: 4.2,
        numReviews: 24,
    },
    {
        name: "Gaming Mouse",
        description: "Ergonomic mouse with programmable buttons and RGB lighting.",
        price: 39.99,
        category: "Electronics",
        stock: 79,
        imageUrl: "https://via.placeholder.com/400x400?text=Gaming+Mouse",
        rating: 4.6,
        numReviews: 82,
    },
];

const seedData = async () => {
    await connectDB();

    try {
        await Product.deleteMany();
        await User.deleteMany();

        const hashedUsers = await Promise.all(
            users.map(async (user) => ({
                ...user,
                password: await bcrypt.hash(user.password, 10),
            }))
        );

        const createdUsers = await User.insertMany(hashedUsers);
        const createdProducts = await Product.insertMany(products);

        console.log(`Inserted ${createdUsers.length} users.`);
        console.log(`Inserted ${createdProducts.length} products.`);
        console.log("\nSeed user login credentials:");
        createdUsers.forEach((user) => {
            console.log(`- ${user.email} / ${users.find((u) => u.email === user.email).password} (${user.role})`);
        });
    } catch (error) {
        console.error("Error seeding data:", error);
        process.exit(1);
    } finally {
        await mongoose.disconnect();
        console.log("MongoDB disconnected after seeding.");
        process.exit(0);
    }
};

seedData();
