import React from 'react'; 
import './Map.css';

function Map() {
  return (
    <div className="map-container">
      {/* SVG Edges with weights */}
      <svg className="map-svg">
        {/* Pune - Mumbai */}
        <line x1="100" y1="100" x2="800" y2="100" stroke="black" strokeWidth="2" />
        <text x={(100 + 800) / 2} y={(100 + 100) / 2 - 10} fill="black">4 km</text>

        {/* Pune - Aurangabad */}
        <line x1="100" y1="100" x2="450" y2="250" stroke="black" strokeWidth="2" />
        <text x={(100 + 450) / 2} y={(100 + 250) / 2 - 10} fill="black">3 km</text>

        {/* Nagpur - Aurangabad */}
        <line x1="100" y1="500" x2="450" y2="250" stroke="black" strokeWidth="2" />
        <text x={(100 + 450) / 2} y={(500 + 250) / 2 - 10} fill="black">4 km</text>

        {/* Nagpur - Nashik */}
        <line x1="100" y1="500" x2="800" y2="500" stroke="black" strokeWidth="2" />
        <text x={(100 + 800) / 2} y={(500 + 500) / 2 - 10} fill="black">6 km</text>

        {/* Mumbai - Delhi */}
        <line x1="800" y1="100" x2="700" y2="300" stroke="black" strokeWidth="2" />
        <text x={(800 + 700) / 2} y={(100 + 300) / 2 - 10} fill="black">7 km</text>

        {/* Nashik - Delhi */}
        <line x1="800" y1="500" x2="700" y2="300" stroke="black" strokeWidth="2" />
        <text x={(800 + 700) / 2} y={(500 + 300) / 2 - 10} fill="black">5 km</text>

        {/* Aurangabad - Delhi */}
        <line x1="450" y1="250" x2="700" y2="300" stroke="black" strokeWidth="2" />
        <text x={(450 + 700) / 2} y={(250 + 300) / 2 - 10} fill="black">6 km</text>
      </svg>

      {/* Cities */}
      <div className="city" style={{ top: 70, left: 80 }}>Pune</div>
      <div className="city" style={{ top: 70, left: 750 }}>Mumbai</div>
      <div className="city" style={{ top: 450, left: 70 }}>Nagpur</div>
      <div className="city" style={{ top: 460, left: 770 }}>Nashik</div>
      <div className="city" style={{ top: 210, left: 400 }}>Sambhaji-Nagar</div>
      <div className="city" style={{ top: 250, left: 680 }}>Delhi</div>
    </div>
  );
}

export default Map;
