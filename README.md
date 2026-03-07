# Release Radar

Release Radar is a modern, responsive React web application designed for discovering and curating the latest music drops. Built with a mobile-first approach and a dark-mode UI inspired by premium streaming platforms, it allows users to browse new releases, view comprehensive album details, and manage a personalized collection of saved drops behind a secure authentication layer.

---

## ✨ Core Features

* **Dynamic Data Fetching:** Integrates with the Spotify API to retrieve and display high-resolution album art, artist data, and track metrics.
* **Protected Routing Flow:** Implements robust React Router DOM logic. Unauthenticated users can browse the public catalog, but are intercepted and redirected to the login screen when attempting to save an album.
* **Global State Management:** Utilizes the React Context API to manage user authentication sessions and synchronize the user's "Saved Drops" array across disparate components without prop-drilling.
* **Form Validation & Authentication:** Features a custom frontend login/registration flow with strict state-driven input validation and error handling.
* **Responsive Architecture:** Built with native CSS Grid and Flexbox variables to ensure a seamless, fluid layout from 320px mobile screens up to 4K desktop monitors.

---

## 🛠 Technical Stack

* **Frontend Framework:** React 18 (Vite)
* **Routing:** React Router v6
* **State Management:** Context API (`AuthContext`, `SavedDropsContext`)
* **Styling:** Custom Vanilla CSS with CSS Variables for theme consistency
* **Testing:** Vitest, jsdom, React Testing Library
* **API:** Spotify Web API (REST)

---

## 🚀 Local Development Setup

To run this application locally, ensure you have Node.js installed, then follow these steps:

1. **Clone the repository:**
   git clone <YOUR_GITHUB_REPO_URL_HERE>
   cd ReleaseRadar

2. **Install dependencies:**
   npm install

3. **Configure Environment Variables:**
   Create a .env file in the root directory and add your API credentials:
   VITE_SPOTIFY_CLIENT_ID=your_client_id_here
   VITE_SPOTIFY_CLIENT_SECRET=your_client_secret_here

4. **Start the development server:**
   npm run dev
   *(The application will boot at http://localhost:5173/)*

---

## 📂 Component Architecture

## 📂 Component Architecture

```
src/
├── components/        # Reusable UI widgets
│   ├── AlbumCard      # Modular card displaying individual release data
│   ├── Button         # Reusable styled button component
│   ├── Header & Nav   # Persistent global navigation
│   └── ProtectedRoute # Higher-Order Component (HOC) guarding private routes
│
├── contexts/          # Global State
│   ├── AuthContext    # Manages session state and user identity
│   └── SavedDropsContext # Manages the array of user-saved albums
│
├── pages/             # Top-level route views
│   ├── Home           # Public landing page and release grid
│   ├── Login          # Authentication forms and validation logic
│   ├── AlbumDetailsPage # Dynamic route (/album/:id)
│   └── SavedDrops     # Protected dashboard for curated collections
│
└── utils/
    └── spotifyAPI.js  # Abstracted fetch logic and token management
```

---

## 🧪 Testing Suite

This project includes an automated unit testing suite utilizing **Vitest** and **React Testing Library** to ensure component stability and secure authentication flows. 

Tests verify critical edge cases, including DOM rendering and strict password-length validation during user registration.

To execute the test suite:
npx vitest run

---

**Author:** Jesse Kooyenga  
*Developed as a capstone demonstration of advanced React architecture, routing, and state management.*