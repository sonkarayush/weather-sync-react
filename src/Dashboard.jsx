import { useState } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import {
  WindIcon,
  HumidityIcon,
  VisibilityIcon,
  CloudCoverIcon,
  DefaultWeatherIcon,
  ForecastWeatherIcon,
} from "./MetricIcons";

function formatDay(unixTime, timezone) {
  return new Date((unixTime + timezone) * 1000).toLocaleDateString([], {
    weekday: "short",
  });
}

function formatVisibility(meters) {
  if (!meters) {
    return "—";
  }
  const km = meters / 1000;
  if (km >= 10) {
    return `${Math.round(km)} km`;
  }
  return `${km.toFixed(1)} km`;
}

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    color: "#fff",
    "& fieldset": { borderColor: "rgba(255, 255, 255, 0.25)" },
    "&:hover fieldset": { borderColor: "rgba(255, 255, 255, 0.4)" },
    "&.Mui-focused fieldset": { borderColor: "rgba(255, 255, 255, 0.55)" },
  },
  "& .MuiInputLabel-root": { color: "rgba(255, 255, 255, 0.9)" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#fff" },
};

const buttonSx = {
  borderRadius: "10px",
  py: 1.4,
  backgroundColor: "rgba(255, 255, 255, 0.15)",
  border: "1px solid rgba(255, 255, 255, 0.25)",
  color: "#fff",
  fontWeight: 600,
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.22)",
    boxShadow: "none",
  },
};

function SearchPanel({ city, setCity, loading, error, onSubmit }) {
  return (
    <section className="panel search-panel">
      <form onSubmit={onSubmit}>
        <Stack direction="row" spacing={1}>
          <TextField
            label="City"
            variant="outlined"
            size="small"
            fullWidth
            value={city}
            onChange={(event) => setCity(event.target.value)}
            disabled={loading}
            required
            sx={fieldSx}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{ ...buttonSx, minWidth: 88, flexShrink: 0 }}
          >
            Go
          </Button>
        </Stack>
      </form>
      {loading && (
        <CircularProgress size={20} sx={{ color: "#fff", mt: 1.5, display: "block", mx: "auto" }} />
      )}
      {error && <p className="error-text">{error}</p>}
    </section>
  );
}

function WelcomeCard() {
  return (
    <section className="panel main-card">
      <div className="welcome">
        <DefaultWeatherIcon />
        <h1>WeatherSync</h1>
        <p className="welcome-subtitle">Live conditions, perfectly synced.</p>
      </div>
    </section>
  );
}

function RecentPanel({ recentCities, weather, onSearch }) {
  return (
    <section className="panel recent-module">
      <p className="module-label">Recent Searches</p>
      <div className="chip-row">
        {recentCities.map((name) => (
          <button
            key={name}
            type="button"
            className={
              !weather.isInitial && weather.city.toLowerCase() === name.toLowerCase()
                ? "chip chip-active"
                : "chip"
            }
            onClick={() => onSearch(name)}
          >
            {name}
          </button>
        ))}
      </div>
    </section>
  );
}

export default function Dashboard({ weather, recentCities, loading, error, onSearch }) {
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const value = city.trim();
    if (!value) {
      return;
    }
    onSearch(value);
    setCity("");
  }

  if (weather.isInitial) {
    return (
      <main className="dashboard dashboard-idle">
        <div className="idle-stack">
          <SearchPanel
            city={city}
            setCity={setCity}
            loading={loading}
            error={error}
            onSubmit={handleSubmit}
          />
          <WelcomeCard />
          {recentCities.length > 0 && (
            <RecentPanel recentCities={recentCities} weather={weather} onSearch={onSearch} />
          )}
        </div>
      </main>
    );
  }

  return (
    <main className="dashboard dashboard-active">
      <Grid container spacing={2} className="dashboard-columns">
        <Grid size={{ xs: 12, md: 5 }} className="column-left">
          <Stack spacing={2}>
            <SearchPanel
              city={city}
              setCity={setCity}
              loading={loading}
              error={error}
              onSubmit={handleSubmit}
            />
            <section className="panel main-card">
              <div className="current-weather">
                <ForecastWeatherIcon icon={weather.icon} large />
                <h2>{weather.city}</h2>
                {weather.country && <p className="country">{weather.country}</p>}
                <p className="temperature">{Math.round(weather.temp)}°C</p>
                <p className="description">
                  {weather.weather.charAt(0).toUpperCase() + weather.weather.slice(1)}
                </p>
                <p className="range">
                  H {Math.round(weather.tempMax)}° · L {Math.round(weather.tempMin)}° · Feels{" "}
                  {Math.round(weather.feelsLike)}°
                </p>
              </div>
            </section>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }} className="column-right">
          <Stack spacing={2} className="right-stack">
            {recentCities.length > 0 && (
              <RecentPanel recentCities={recentCities} weather={weather} onSearch={onSearch} />
            )}

            <section className="panel">
              <p className="module-label">Details</p>
              <div className="metrics-grid">
                <div className="metric-panel">
                  <span className="metric-label">
                    <WindIcon />
                    Wind
                  </span>
                  <span className="metric-value">{weather.windSpeed.toFixed(1)} m/s</span>
                </div>
                <div className="metric-panel">
                  <span className="metric-label">
                    <HumidityIcon />
                    Humidity
                  </span>
                  <span className="metric-value">{weather.humidity}%</span>
                </div>
                <div className="metric-panel">
                  <span className="metric-label">
                    <VisibilityIcon />
                    Visibility
                  </span>
                  <span className="metric-value">{formatVisibility(weather.visibility)}</span>
                </div>
                <div className="metric-panel">
                  <span className="metric-label">
                    <CloudCoverIcon />
                    Cloud Cover
                  </span>
                  <span className="metric-value">{weather.cloudCover}%</span>
                </div>
              </div>
            </section>

            {weather.forecast.length > 0 && (
              <section className="panel forecast-panel">
                <p className="module-label">5-Day Forecast</p>
                <div className="forecast-row">
                  {weather.forecast.map((day) => (
                    <article key={day.dt} className="forecast-card">
                      <p className="forecast-day">{formatDay(day.dt, weather.timezone)}</p>
                      <ForecastWeatherIcon icon={day.icon} />
                      <p className="forecast-high">{Math.round(day.tempMax)}°</p>
                      <p className="forecast-low">{Math.round(day.tempMin)}°</p>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </Stack>
        </Grid>
      </Grid>
    </main>
  );
}
