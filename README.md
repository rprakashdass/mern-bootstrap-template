# MERN Bootstrap Template

This is a template repository for a MERN (MongoDB, Express.js, React.js, Node.js) stack application with Bootstrap integrated for the frontend styling. This template aims to simplify the process of getting started with full-stack development by providing a boilerplate setup.

## Features

- **Backend**: Node.js, Express.js, MongoDB (Mongoose)
- **Frontend**: React.js (with Vite for build tools) and Bootstrap 5
- **Development Tools**: Nodemon for auto-restarting the server, Vite for a fast frontend build tool.

## Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (>= 14.x)
- **npm** (comes with Node.js)
- **MongoDB** (Ensure MongoDB is installed and running on your local machine)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/rprakashdass/mern-bootstrap-template.git
cd mern-bootstrap-template
```

### 2. Install Dependencies

Both the backend and frontend have their own dependencies, which you need to install.

#### Backend Dependencies

1. Navigate to the `backend` directory:
   
   ```bash
   cd backend
   ```

2. Install the required packages:

   ```bash
   npm install
   ```

#### Frontend Dependencies

1. Navigate to the `frontend` directory:
   
   ```bash
   cd ../frontend
   ```

2. Install the required packages:

   ```bash
   npm install
   ```

### 3. Setup Environment Variables

Create a `.env` file in the `backend` directory with the following fields:

```plaintext
PORT=5000
MONGO_URI=your_mongo_database_uri
```

### 4. Running the Development Servers

You will need to run both the backend and frontend servers during development.

#### Backend (Server)

1. Ensure you're in the `backend` directory:
   
   ```bash
   cd backend
   ```

2. Start the server using Nodemon (watches for file changes):

   ```bash
   npm run dev
   ```

> This command will start the server on `http://localhost:5000` and auto-reload on changes.

#### Frontend (Client)

1. Navigate to the `frontend` directory:

   ```bash
   cd ../frontend
   ```

2. Start the frontend development server with Vite:

   ```bash
   npm run dev
   ```

> This will start the Vite development server on `http://localhost:3000`.

### 5. Build for Production

To build the frontend for production, run:

```bash
npm run build
```

This will output the build files to the `dist/` folder, which can then be deployed.

### Project Structure

```
mern-bootstrap-template/
│
├── backend/               # Express.js server and API logic
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── controllers/       # Route handlers
│   ├── server.js          # Main server file
│   └── .env.example       # environment file for backend
│
├── frontend/              # React app (Bootstrap + Vite)
│   ├── public/            # Static assets
│   ├── src/               # React components and pages
│   └── vite.config.js     # Vite configuration file
│
├── .gitignore             # Git ignore file
└── README.md              # Project documentation
```

### Available Scripts

#### Backend

- `npm run dev`: Start the backend server with Nodemon
- `npm start`: Start the backend server in production mode

#### Frontend

- `npm run dev`: Start the Vite development server
- `npm run build`: Build the frontend for production
- `npm run preview`: Preview the production build

### Technologies Used

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: React.js, Bootstrap 5, Vite
- **Tools**: Nodemon, Vite

## License

This project is licensed under the MIT License.
