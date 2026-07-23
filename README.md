# ShopNest 🛒

A full-stack e-commerce platform built with modern web technologies. ShopNest provides a complete shopping experience with secure authentication, intuitive product browsing, cart management, and seamless payment processing.

## 🌟 Features

- **User Authentication**: Secure JWT-based authentication system
- **Product Management**: Browse and search products with detailed information
- **Shopping Cart**: Redux-based cart management for smooth state handling
- **Admin Dashboard**: Comprehensive dashboard for managing products, orders, and users
- **Image Uploads**: Cloudinary integration for efficient image hosting and optimization
- **Payment Integration**: Razorpay payment gateway for secure transactions
- **Email Notifications**: Automated email notifications for order confirmations and updates
- **One-Click Deployment**: Ready for deployment on Render with minimal configuration
- **Responsive Design**: Mobile-friendly interface for all devices

## 🛠️ Technology Stack

### Frontend
- **React** - UI library for building interactive user interfaces
- **Redux** - State management for predictable cart and app state
- **CSS** - Styling and responsive design

### Backend
- **Node.js** - JavaScript runtime for server-side development
- **Express** - Web framework for building APIs
- **MongoDB** - NoSQL database for storing products, users, and orders

### Services & APIs
- **Cloudinary** - Image storage and optimization
- **Razorpay** - Payment processing
- **Email Service** - Transactional email notifications

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn package manager
- MongoDB (local or Atlas cloud)
- Git

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/RupeshPradhan33/shopnest.git
cd shopnest
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file and add your environment variables
cp .env.example .env
```

### 3. Environment Variables (.env)
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
SMTP_EMAIL=your_email@gmail.com
SMTP_PASSWORD=your_email_password
```

### 4. Frontend Setup
```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Create .env file for frontend
cp .env.example .env
```

### 5. Start Development Servers

**Backend** (from backend directory):
```bash
npm start
# or
npm run dev
```

**Frontend** (from frontend directory):
```bash
npm start
```

## 📦 Project Structure

```
shopnest/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── redux/           # Redux store configuration
│   │   └── App.js           # Main App component
│   └── package.json
├── backend/                 # Express backend API
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── controllers/        # Route handlers
│   ├── middleware/         # Custom middleware
│   └── server.js           # Express server entry point
└── README.md
```

## 🔐 Authentication

ShopNest uses JWT (JSON Web Tokens) for secure user authentication:
- Users can register with email and password
- Login generates JWT tokens stored in cookies/localStorage
- Protected routes verify JWT before granting access
- Automatic token refresh for seamless user experience

## 🛍️ Shopping Features

### Product Browsing
- View all products with filters and search
- Product details with images and specifications
- User reviews and ratings

### Cart Management
- Add/remove items from cart
- Quantity adjustment
- Real-time cart total calculation
- Redux state persistence

### Checkout Process
- Secure checkout flow
- Razorpay payment integration
- Order confirmation and email notification

## 👨‍💼 Admin Dashboard

- Product management (add, edit, delete)
- Order management and tracking
- User management
- Sales analytics and reports
- Inventory tracking

## 📧 Email Notifications

Automated emails sent for:
- Account registration confirmation
- Order confirmation
- Order status updates
- Password reset requests

## 🚀 Deployment

### Deploy on Render

1. Push code to GitHub
2. Connect repository to Render dashboard
3. Configure environment variables in Render
4. Deploy with one click

**Frontend**: Deploy as Static Site
**Backend**: Deploy as Web Service

For detailed deployment guide: [Render Deployment Documentation](https://render.com/docs)

## 📊 Language Composition

- **JavaScript**: 82.9%
- **CSS**: 16.3%
- **HTML**: 0.8%

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💬 Support

For support, please open an issue on the GitHub repository or contact the maintainers.

## 👨‍💻 Author

**Rupesh Pradhan**
- GitHub: [@RupeshPradhan33](https://github.com/RupeshPradhan33)

## 🎯 Roadmap

- [ ] Add product reviews and ratings system
- [ ] Implement wishlist feature
- [ ] Add order tracking with real-time updates
- [ ] Integrate multiple payment methods
- [ ] Implement user profiles and order history
- [ ] Add inventory management alerts
- [ ] Mobile app development

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Express Documentation](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Redux Documentation](https://redux.js.org)
- [Razorpay API Documentation](https://razorpay.com/docs/api/)
- [Cloudinary Documentation](https://cloudinary.com/documentation)

---

Made with ❤️ by Rupesh Pradhan
