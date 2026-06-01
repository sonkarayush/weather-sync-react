export function WindIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#e2e8f0" strokeWidth="2">
      <path d="M4 12h10a3 3 0 1 0 0-6" strokeLinecap="round" />
      <path d="M6 17h11a2.5 2.5 0 1 1 0 5H6" strokeLinecap="round" />
    </svg>
  );
}

export function HumidityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#e2e8f0" strokeWidth="2">
      <path d="M12 3c3.5 5.5 6 9 6 12a6 6 0 1 1-12 0c0-3 2.5-6.5 6-12Z" />
    </svg>
  );
}

export function VisibilityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#e2e8f0" strokeWidth="2">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function CloudCoverIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#e2e8f0" strokeWidth="2">
      <path
        d="M18 10h-1.26A8 8 0 1 0 9 18h9a3 3 0 0 0 0-6Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DefaultWeatherIcon() {
  return (
    <svg
      viewBox="0 0 120 80"
      className="default-weather-svg"
      aria-hidden="true"
      style={{ color: "unset" }}
    >
      <circle cx="78" cy="28" r="18" fill="#FFB02E" />
      <ellipse cx="48" cy="48" rx="34" ry="20" fill="#FFFFFF" />
      <ellipse cx="32" cy="52" rx="22" ry="16" fill="#E8F4FC" />
    </svg>
  );
}

export function ForecastWeatherIcon({ icon, large }) {
  const code = (icon || "01d").slice(0, 2);
  const className = large ? "forecast-icon forecast-icon-lg" : "forecast-icon";
  const svgStyle = { color: "unset", display: "block" };

  if (code === "01") {
    return (
      <svg viewBox="0 0 64 64" className={className} style={svgStyle} aria-hidden="true">
        <circle cx="32" cy="32" r="16" fill="#FFB02E" stroke="none" />
      </svg>
    );
  }

  if (code === "02" || code === "03" || code === "04") {
    return (
      <svg viewBox="0 0 64 64" className={className} style={svgStyle} aria-hidden="true">
        <ellipse cx="28" cy="36" rx="18" ry="12" fill="#FFFFFF" stroke="none" />
        <ellipse cx="40" cy="32" rx="14" ry="10" fill="#F1F5F9" stroke="none" />
      </svg>
    );
  }

  if (code === "09" || code === "10") {
    return (
      <svg viewBox="0 0 64 64" className={className} style={svgStyle} aria-hidden="true">
        <ellipse cx="30" cy="30" rx="16" ry="10" fill="#FFFFFF" stroke="none" />
        <ellipse cx="42" cy="28" rx="12" ry="8" fill="#F1F5F9" stroke="none" />
        <path
          d="M24 44v6M32 42v8M40 44v6"
          stroke="#4EA8DE"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    );
  }

  if (code === "11") {
    return (
      <svg viewBox="0 0 64 64" className={className} style={svgStyle} aria-hidden="true">
        <ellipse cx="32" cy="28" rx="18" ry="11" fill="#94A3B8" stroke="none" />
        <path d="M32 38 L26 52 L30 52 L28 58 L38 46 L34 46 L36 38 Z" fill="#FFB02E" stroke="none" />
      </svg>
    );
  }

  if (code === "13") {
    return (
      <svg viewBox="0 0 64 64" className={className} style={svgStyle} aria-hidden="true">
        <ellipse cx="32" cy="28" rx="16" ry="10" fill="#FFFFFF" stroke="none" />
        <circle cx="26" cy="44" r="2.5" fill="#E2E8F0" stroke="none" />
        <circle cx="32" cy="50" r="2.5" fill="#E2E8F0" stroke="none" />
        <circle cx="38" cy="44" r="2.5" fill="#E2E8F0" stroke="none" />
      </svg>
    );
  }

  if (code === "50") {
    return (
      <svg viewBox="0 0 64 64" className={className} style={svgStyle} aria-hidden="true">
        <ellipse cx="32" cy="32" rx="20" ry="12" fill="#CBD5E1" stroke="none" />
        <path
          d="M14 40h36"
          stroke="#94A3B8"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" className={className} style={svgStyle} aria-hidden="true">
      <circle cx="32" cy="32" r="16" fill="#FFB02E" stroke="none" />
    </svg>
  );
}
