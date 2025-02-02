# Bookstore Website (MERN Stack)

## Overview
This is a full-stack bookstore website built using the MERN stack (MongoDB, Express, React, Node.js) with Tailwind CSS for styling. The application allows users to browse books, add them to a cart, and make purchases.

## Features
### Frontend
- Built with React and Tailwind CSS
- Responsive design
- User authentication (login/register)
- Book listing with search functionality
- Shopping cart feature
- Checkout process

### Backend
- Built with Node.js and Express
- Uses MongoDB for database storage
- User authentication with JWT
- CRUD operations for books
- Order processing
- Secure API endpoints

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB (local or Atlas)

### Clone the repository
```sh
git clone https://github.com/meerhaasham1/BookStore.git
cd bookstore
```

## Backend Setup
```sh
cd backend
npm install
```

### Environment Variables
Create a `.env` file in the `backend` directory and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run the Backend
```sh
npm start
```

## Frontend Setup
```sh
cd frontend
npm install
```

### Run the Frontend
```sh
npm start
```

## API Endpoints
| Method | Endpoint         | Description              |
|--------|----------------|--------------------------|
| GET    | /api/books     | Get all books            |
| POST   | /api/books     | Add a new book           |
| GET    | /api/orders    | Get user orders          |
| POST   | /api/auth/login | User login               |
| POST   | /api/auth/register | User registration  |

## Technologies Used
- **Frontend**: React, Tailwind CSS, Axios
- **Backend**: Node.js, Express, MongoDB, JWT, bcrypt.js

## Contributing
Pull requests are welcome. For major changes, please open an issue first.

## License
This project is open-source.
