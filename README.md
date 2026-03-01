# Release Radar 🎧

A React-based web application designed to track the latest music releases and manage a personalized queue of upcoming albums. Built as a dual-purpose project: satisfying academic requirements for a comprehensive React architecture while serving as a functional dashboard for tracking fresh drops for YouTube reaction content.

## Features

* **Live Spotify Data:** Fetches real-time album data using the official Spotify Web API.
* **Dynamic Routing:** Utilizes `react-router-dom` for seamless, single-page navigation between the Home dashboard, individual Album Details pages, and the Saved Drops list.
* **Global State Management:** Employs the React Context API to manage a global "Saved Drops" list, completely decoupled from individual component logic.
* **Persistent Storage:** Automatically syncs the user's saved albums to browser `localStorage` so data is never lost on refresh.
* **Responsive UI:** Custom CSS Grid implementation ensures the dashboard looks perfect on both desktop monitors and mobile devices.

## Tech Stack

* **Frontend:** React (via Vite), JavaScript (ES6+), HTML5, Custom CSS3
* **Routing:** React Router v6
* **API:** Spotify Web API (Client Credentials Flow)

## Installation & Setup

To run this project locally, you will need Node.js installed on your machine, alongside active Spotify Developer credentials.

1. **Clone the repository:**
   ```bash
   git clone [your-repo-link-here]
   cd release-radar