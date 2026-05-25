# Blogify API

A professional RESTful API for a modern blogging platform built with Node.js, Express, MongoDB, JWT authentication, Cloudinary image uploads, and Stripe payment integration.

---

## Features

- User Authentication with JWT
- Secure Protected Routes
- Blog Post CRUD Operations
- Cursor Pagination for Posts
- Cloudinary Image Uploads
- Stripe Payment Integration
- Order Management System
- MongoDB Atlas Cloud Database
- Environment Variable Configuration
- Error Handling Middleware
- RESTful API Architecture

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **File Uploads:** Cloudinary
- **Payments:** Stripe
- **Cloud Database:** MongoDB Atlas

---

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- MongoDB Atlas account
- Cloudinary account
- Stripe account

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/blogify-api.git
cd blogify-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Variables

Create a `.env` file in the root directory.

```env
# Server
PORT=3000

# Database
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/blogify

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe
STRIPE_SECRET_KEY=sk_test_xxxxx
STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
```

---

## Running the Project

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

---

## API Endpoints

## Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | User login | No |

---

## Posts

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/posts` | Get all posts | No |
| GET | `/api/posts/:id` | Get single post | No |
| POST | `/api/posts` | Create post | Yes |
| PUT | `/api/posts/:id` | Update post | Yes |
| DELETE | `/api/posts/:id` | Delete post | Yes |

---

## Uploads

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/upload` | Upload image to Cloudinary | Yes |

---

## Payments

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/payments/create-payment-intent` | Create Stripe payment intent | Yes |
| POST | `/api/payments/confirm-payment` | Confirm Stripe payment | Yes |

---

## Orders

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/orders` | Create order | Yes |
| GET | `/api/orders/my-orders` | Get logged-in user orders | Yes |
| GET | `/api/orders/:id` | Get order details | Yes |

---

## Example API Request

### Login Request

```javascript
fetch("http://localhost:3000/api/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "alice",
    password: "password123",
  }),
});
```

---

## Project Structure

```bash
blogify-api/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── config/
├── utils/
├── uploads/
├── .env
├── package.json
├── server.js
└── README.md
```

---

## Authentication

This API uses JWT authentication.

Protected routes require a valid JWT token in the request headers or secure HttpOnly cookies depending on implementation.

Example Authorization Header:

```bash
Authorization: Bearer your_jwt_token
```

---

## Error Handling

The API includes centralized error handling for:

- Invalid authentication
- Unauthorized access
- Missing resources
- Validation errors
- Payment failures
- Server errors

---

## Contributing

Contributions are welcome.

### Steps

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to your branch
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---

## Author

Developed by Surya Kamal

GitHub: https://github.com/yourusername
