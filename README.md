# WeatherSync 🌦️
> **Live conditions, perfectly synced.**

**Live Demo:**(https://weather-sync-react.vercel.app/)

WeatherSync is a premium, responsive weather forecasting dashboard built with React.js. Utilizing the OpenWeatherMap API, it delivers real-time weather data and an upcoming 5-day forecast through a modern, glassmorphic user interface. The application features dynamic visual themes that adapt instantly to current weather conditions, providing an immersive and intuitive user experience.

---

## ✨ Key Features

* **Dynamic Weather Backgrounds:** The application automatically updates its high-resolution background landscape imagery to match the real-time weather condition (e.g., Clear, Clouds, Rain, Mist/Haze).
* **Modern Glassmorphism UI:** A clean, centered, side-by-side desktop dashboard layout utilizing semi-transparent panels, backdrop blurs, and high-contrast typography for a premium look.
* **Streamlined Metric Grid:** Instantly fetches and displays stable, accurate data points including Wind Speed, Humidity, Visibility (converted to km), and Cloud Cover percentage, eliminating timezone conversion bugs.
* **5-Day Forecast Strip:** Vibrant, custom-styled forecast modules displaying upcoming temperatures and conditions with explicit, color-forced weather icons that stay vibrant against the background.
* **Session-Only Search History:** Smart tracking of recent city searches during the active session. History is kept in local React state and is deliberately wiped clean upon page refresh for a clutter-free experience.
* **Robust UX Engineering:** Features clean asynchronous data-fetching lifecycles, smooth loading animations, and robust error-handling for non-existent city queries.

---

## 🛠️ Tech Stack

* **Frontend Framework:** React.js (Functional components with standard `useState` and `useEffect` hooks)
* **Build Tool:** Vite (Optimized for lightning-fast HMR and build performance)
* **API Integration:** OpenWeatherMap API (Current Weather & 5-Day Forecast Endpoints)
* **Styling & Layout:** CSS Flexbox/Grid, Glassmorphic design principles, Material UI (MUI 5) base elements

---

## 📸 Screenshots

(./image.png)

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

1. **Clone the repository:**
   git clone: (https://github.com/sonkarayush/weather-sync-react.git)
2. **Navigate to the project directory:**
   cd weather-sync-react
3. **Install dependencies:**
   npm install
4. **Set up Environment Variables:**
   * Create a `.env` file in the root directory of the project.
   * Add your free OpenWeatherMap API key exactly like this:
     VITE_WEATHER_API_KEY=your_api_key_here
5. **Start the development server:**
    npm run dev
   
## 👨‍💻 Author
**Ayush Sonkar**  
*Undergraduate Student, Indian Institute of Technology (IIT) Guwahati*   
* Email: a.sonkar@iitg.ac.in
