# Generative Con 2026 Ticket Generator

A sleek, modern web application built with React, Vite, and Tailwind CSS to generate stylized, beautiful tickets for **Generative Con 2026**.

## 🚀 Features

- **Interactive Registration Form**: Users can enter their full name, email, and GitHub handle.
- **Drag-and-Drop Avatar Upload**: Seamless image uploading for the ticket avatar.
- **Dynamic Ticket Generation**: Automatically generates a gorgeous, glassmorphism-styled ticket customized with user details, including a realistic perforated stub and QR-like layout elements.
- **Modern UI/UX**: Features dark mode aesthetics, smooth gradients, blur effects, and animations for an engaging, premium user experience.
- **Client-Side Routing**: Powered by React Router DOM for smooth transitions between the registration and ticket pages.

## 🛠️ Built With

- **[React 19](https://react.dev/)**: Powerful UI library for building the interface.
- **[Vite](https://vitejs.dev/)**: Blazing fast front-end tooling and development server.
- **[Tailwind CSS (v4)](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI styling and advanced visual effects.
- **[React Router DOM](https://reactrouter.com/)**: Handles client-side routing and layout management.

## 🏁 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your system.

### Installation

1. Navigate to your project directory:
   ```bash
   cd vite-project
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the URL provided in the terminal (usually `http://localhost:5173`).

## 📂 Project Structure

- `src/App.jsx`: Main routing configuration and state management for ticket generation.
- `src/pages/Registerpage.jsx`: The registration form combining drag-and-drop file upload and form inputs.
- `src/pages/TicketPage.jsx`: Renders the final, styled ticket display with user details.
- `src/components/DragNDrop.jsx`: Reusable component for handling avatar uploads.
- `src/components/FormInput.jsx`: Component handling the text input fields.

## 🎨 Design Aesthetics

This project emphasizes a high-quality, premium look and feel by leveraging Tailwind CSS to deliver intricate shadows, gradient text, backdrop-blurs, and custom layout effects to create a highly realistic, yet futuristic "glassmorphism" event ticket.

## 📝 Available Scripts

- `npm run dev`: Starts the local development server.
- `npm run build`: Bundles the app for production.
- `npm run lint`: Lints the codebase using ESLint.
- `npm run preview`: Previews the generated production build locally.
