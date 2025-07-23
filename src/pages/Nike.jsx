import './Nike.css';

function Nike() {
  return (
    <div className="Nike-box">
      <div className="nike-container">
        <div className="top-bar">
          <div className="gear-icon" />
          <div className="currency">
            <span className="green">🟩 14</span>
            <span className="yellow">🟨 150</span>
          </div>
        </div>

        <div className="hero-text">
          <h1>NIKE GEAR<br />@ 30% OFF</h1>
          <p>EXCLUSIVELY ON GTROI</p>
        </div>

        <div className="menu-bar">
          <button>CHALLENGES</button>
          <button>REGIMES</button>
          <button>GOALS</button>
          <button>PROGRESS</button>
          <button className="active">STORE</button>
        </div>
      </div>
    </div>
  );
}



export default Nike;

