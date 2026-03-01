# Linlax Infotech Website Redesign

This project is a modern, responsive full-stack application for the Linlax Infotech website. It has been properly structured into separate `client` and `server` directories for maintainability.

## Technology Stack Used

### Frontend (Client)
*   **React 19:** Building the user interfaces and component structure.
*   **Vite:** A blazing-fast build tool and development server.
*   **React Router DOM:** Handling client-side routing and smooth scrolling.
*   **Framer Motion:** A production-ready animation library used for interactive UI elements.
*   **Lucide React:** A clean, customizable icon library.
*   **Vanilla CSS:** Styling with pure standard CSS, utilizing CSS variables for "glassmorphism" aesthetic effects.

### Backend (Server)
*   **Node.js & Express:** Lightweight standard framework for handling API requests.
*   **CORS:** Middleware for enabling cross-origin requests between the React frontend and Node backend.

---

## Folder Structure
```
linlax-redesign/
├── client/        # The React + Vite frontend code
├── server/        # The Node.js + Express backend code
└── run_project.md # You are here
```

---

## How to Run the Project Locally

To run this application, you must run both the backend server and the frontend client in two separate terminal windows.

### Step 1: Start the Backend (Server)
1. Open a terminal and navigate into the server directory:
   ```bash
   cd server
   ```
2. Install the backend dependencies (first time only):
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```
   *The server should now be listening at http://localhost:5000*

### Step 2: Start the Frontend (Client)
1. Open a **new, separate** terminal and navigate into the client directory:
   ```bash
   cd client
   ```
2. Install the frontend dependencies (first time only):
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Step 3: View the Website
Once the client server starts, hold down the `Ctrl` key on your keyboard and click the link in your terminal, or manually type the following address into your web browser:

**[http://localhost:5173/](http://localhost:5173/)**
