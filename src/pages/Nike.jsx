import './Nike.css';
import { assets } from '../assets/assets';

function Nike() {
  return (
    <div className="Nike-box">
      <div className="nike-container">
        
        {/* Top Nav Bar */}
        <div className="nav-bar">
          <div className="nav-left">
            <img src={assets.setting} alt="Gear" className="gear-icon" />
          </div>
          <div className="nav-right">
            <div className="currency-item green">
              <img src={assets.GREEN_ICON} alt="Green" />
              <span>500</span>
            </div>
            <div className="currency-item yellow">
              <img src={assets.YELLOW_ICON} alt="Yellow" />
              <span>150</span>
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <div className="hero-text">
          <h1>NIKE GEAR<br />@ 30% OFF</h1>
          <p>EXCLUSIVELY ON GTROI</p>
        </div>

        {/* Bottom Menu */}
        <div className="menu-bar">
          <button className="menu-button">
            <img src={assets.CHALLENGE} alt="Challenges" />
            <span>CHALLENGES</span>
          </button>
          <button className="menu-button">
            <img src={assets.REGIMES} alt="Regimes" />
            <span>REGIMES</span>
          </button>
          <button className="menu-button">
            <img src={assets.GOALS} alt="Goals" />
            <span>GOALS</span>
          </button>
          <button className="menu-button">
            <img src={assets.PROGRESS} alt="Progress" />
            <span>PROGRESS</span>
          </button>
          <button className="menu-button active">
            <img src={assets.STORE} alt="Store" />
            <span>STORE</span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default Nike;

