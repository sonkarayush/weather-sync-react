# WeatherSync 🌦️

A clean, responsive weather forecasting application built with **React.js** and **Material UI**. This project utilizes the OpenWeatherMap API to provide accurate, real-time weather data through a streamlined user interface.

## 🚀 Current Features
* **Real-time Weather Data:** Instantly fetches and displays Temperature, Humidity, Min/Max Temp, "Feels Like" temperature, and weather descriptions for any city.
* **Loading States:** Implements asynchronous data fetching with a Material UI `CircularProgress` indicator for smooth user experience.
* **Error Handling:** Safely manages invalid inputs (e.g., non-existent city names) and prevents application crashes.
* **Secure API Integration:** Environment variables (`.env`) are utilized via Vite to securely manage OpenWeatherMap API keys.

## 🛠️ Tech Stack
* **Frontend:** React.js, Material UI (MUI 5)
* **Build Tool:** Vite
* **API:** OpenWeatherMap API
* **Styling:** CSS Modules

## 📸 Screenshots
     (image.png)

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/weather-sync-react.git](https://github.com/your-username/weather-sync-react.git)

2. **Navigate to the project directory:**
cd weather-sync-react

3. **Install dependencies**
npm install

4. **Set up Environment Variables:**
Create a .env file in the root directory.

Add your OpenWeatherMap API key exactly like this:
VITE_WEATHER_API_KEY=your_api_key_here

5. **Start the development server:**
npm run dev

🗺️ **Future Enhancements (Coming Soon)**

    Integration of dynamic weather icons based on current conditions.

    Dynamic background visuals that change according to the weather (e.g., rain, sunny, snow).

    7-day forecast visualization.

👨‍💻 Author

AYUSH SONKAR, IIT Guwahati