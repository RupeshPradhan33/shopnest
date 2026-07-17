const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SendEmail = require("../utils/sendEmail");




const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Register User
const registerUser = async (req, res) => {

    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // TODOS: Hash the password before saving to the database for security
        // const hashedPassword = await bcrypt.hash(password, 10);
        // TODOS: Implement JWT token generation for authentication after successful registration
        // TODOS: OTP Sending and verification for email confermation
        // TODOS: WELCOME MAIL

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const newUser = await User.create({ name, email, password: hashedPassword });
        if (newUser) {
            const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP  

            const message = `Welcome to ShopNest, ${name}! Thank you for registering with us. Your OTP for ShopNest registration is: ${otp}`;

            await SendEmail(email, 'Welcome to ShopNest - Your OTP for Registration', message);

            res.status(201).json({

                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                token: generateToken(newUser._id),
                message: "User registered successfully. Please check your email for the OTP."
            });

        }
        else {
            res.status(400).json({ message: "User registration failed" });
        }

    }
    catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Server error" });
    }
};


// Login User
const loginUser = async (req, res) => {
   const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id),
            });
        }
        else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }

};


const getUser = async (req, res) => {
    try {
        const user = await User.find({}).select("-password");
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};


module.exports = { registerUser, loginUser, getUser };

