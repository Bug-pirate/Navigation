import React from 'react'; 
import './Map.css';

function Map() {
  return (
    <div className="map-container">
      {/* SVG Edges */}
      <svg className="map-svg">
        <line x1="100" y1="100" x2="800" y2="100" stroke="black" strokeWidth="2" /> {/* Pune - Mumbai */}
        <line x1="100" y1="100" x2="450" y2="250" stroke="black" strokeWidth="2" /> {/* Pune - Aurangabad */}
        <line x1="100" y1="500" x2="450" y2="250" stroke="black" strokeWidth="2" /> {/* Nagpur - Aurangabad */}
        
        <line x1="100" y1="500" x2="800" y2="500" stroke="black" strokeWidth="2" /> {/* Nagpur - Nashik */}
        <line x1="800" y1="100" x2="700" y2="300" stroke="black" strokeWidth="2" /> {/* Mumbai - Delhi */}
<line x1="800" y1="500" x2="700" y2="300" stroke="black" strokeWidth="2" /> {/* Nashik - Delhi */}
<line x1="450" y1="250" x2="700" y2="300" stroke="black" strokeWidth="2" /> {/* Aurangabad - Delhi */}

      </svg>

      {/* Cities */}
      <div className="city" style={{ top: 70, left: 80 }}>Pune</div>
      <div className="city" style={{ top: 70, left: 750 }}>Mumbai</div>
      <div className="city" style={{ top: 450, left: 70 }}>Nagpur</div>
      <div className="city" style={{ top: 460, left: 770 }}>Nashik</div>

      {/* Centered Aurangabad & Delhi */}
      <div className="city" style={{ top: 210, left: 400 }}>Sambhaji-Nagar</div>
      <div className="city" style={{ top: 250, left: 680 }}>Delhi</div>
    </div>
  );
}

export default Map;
