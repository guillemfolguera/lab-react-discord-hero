// src/App.jsx
import "./App.css";
import discordLogo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";
import discordBackground from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <nav>
        <img className="nav-logo" src={discordLogo} alt="Discord logo" />
        <img className="menu-icon" src={menuIcon} alt="Menu Icon" />
      </nav>
      <h1>Imagine a place...</h1>
      <div className="hero-text">
        …where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.
      </div>
      <div className="buttons">
        <button className="download-button">Download for Mac</button>
        <button className="browser-button">Open Discord in your browser</button>
      </div>
      <img className="background" src={discordBackground} alt="Background" />
    </div>
  );
}

export default App;
