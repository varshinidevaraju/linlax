# Linlax Infotech Website Redesign

This project is a modern, responsive frontend redesign for the Linlax Infotech website. 

## Technology Stack Used

This web application was built using a robust, modern frontend ecosystem:

*   **React 19:** The core Javascript library for building the user interfaces and component structure.
*   **Vite:** A blazing-fast build tool and development server that provides lightning-quick hot module replacement (HMR).
*   **React Router DOM:** Handling the client-side routing, dynamically switching between pages (Home, Services, Products) without reloading the browser.
*   **Framer Motion:** A production-ready animation library used for the smooth dropdown menus, scrolling interactions, and initial page load reveals.
*   **Lucide React:** A clean, customizable icon library used throughout the site (hamburgers, arrows, phone icons, etc.).
*   **Vanilla CSS:** The styling is handled with pure, standard CSS (`index.css`) for maximum control, utilizing CSS variables (custom properties), flexbox, CSS grids, and "glassmorphism" aesthetic effects.

---

## How to Run the Project Locally

If you would like to run this application yourself, open a terminal instance inside the `linlax-redesign` directory folder and follow these steps.

### Step 1: Install Dependencies
If you have just downloaded the code or cloned it from GitHub, you first need to download the necessary packages listed in `package.json`. 

Run the following command:
```bash
npm install
```
*(Note: You only need to run this command once unless you add new packages in the future.)*

### Step 2: Start the Development Server
To launch the Vite development server and run the website locally, run:

```bash
npm run dev
```

### Step 3: View the Website
Once the server starts, the terminal will provide you with a local URL. 

Hold down the `Ctrl` key on your keyboard and click the link in your terminal, or manually type the following address into your web browser:

**[http://localhost:5173/](http://localhost:5173/)**

### Step 4: Stop the Server
When you are done testing the application and want to shut down the server, go back to your terminal window where the server is running and press:

`Ctrl + C` 
*(It may prompt you to terminate the batch job, press `Y` and `Enter` if it does).*
