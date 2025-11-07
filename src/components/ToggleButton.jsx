import { useState, useEffect } from "react";
import "./ToggleButton.css";

export default function ToggleButton({ isMuted }) {
  const [language, setLanguage] = useState("bangla");
  const [mute, setMute] = useState(isMuted); // Local mute state

  useEffect(() => {
    setMute(isMuted); // Update mute when parent changes
  }, [isMuted]);

  const videos = {
    bangla: "https://www.youtube.com/embed/YtqHyRGGc48",
    english: "https://www.youtube.com/embed/UQ5Ra_l0vNY",
  };

  return (
    <div className="video-toggle-container">
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={`${videos[language]}?autoplay=1&mute=${mute ? 1 : 0}&controls=1`}
          title={`${language} video`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="toggle-buttons">
        <button
          className={`lang-btn ${language === "bangla" ? "active" : ""}`}
          onClick={() => setLanguage("bangla")}
        >
          বাংলা
        </button>
        <button
          className={`lang-btn ${language === "english" ? "active" : ""}`}
          onClick={() => setLanguage("english")}
        >
          English
        </button>
      </div>
    </div>
  );
}
