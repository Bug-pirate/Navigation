import React, { useState, useEffect } from "react";
import "./Map.css";
import "./Input.css"

const cities = ["Pune", "Mumbai", "Nagpur", "Nashik", "Sambhaji-Nagar", "Delhi"];

const edges = [
  { from: "Pune", to: "Mumbai", x1: 100, y1: 100, x2: 800, y2: 100, weight: 4 },
  { from: "Pune", to: "Sambhaji-Nagar", x1: 100, y1: 100, x2: 450, y2: 250, weight: 3 },
  { from: "Nagpur", to: "Sambhaji-Nagar", x1: 100, y1: 500, x2: 450, y2: 250, weight: 4 },
  { from: "Nagpur", to: "Nashik", x1: 100, y1: 500, x2: 800, y2: 500, weight: 6 },
  { from: "Mumbai", to: "Delhi", x1: 800, y1: 100, x2: 700, y2: 300, weight: 7 },
  { from: "Nashik", to: "Delhi", x1: 800, y1: 500, x2: 700, y2: 300, weight: 5 },
  { from: "Sambhaji-Nagar", to: "Delhi", x1: 450, y1: 250, x2: 700, y2: 300, weight: 6 },
];

function Map() {
  const [src, setSrc] = useState("");
  const [dest, setDest] = useState("");
  const [highlightedEdges, setHighlightedEdges] = useState([]);

  const findShortestPath = () => {
    const graph = {};

    edges.forEach(({ from, to, weight }) => {
      if (!graph[from]) graph[from] = [];
      if (!graph[to]) graph[to] = [];
      graph[from].push({ node: to, weight });
      graph[to].push({ node: from, weight });
    });

    // Dijkstra's algorithm
    const distances = {};
    const prev = {};
    const visited = new Set();
    cities.forEach((c) => {
      distances[c] = Infinity;
      prev[c] = null;
    });
    distances[src] = 0;

    while (visited.size < cities.length) {
      let currNode = null;
      let minDist = Infinity;
      for (const node of cities) {
        if (!visited.has(node) && distances[node] < minDist) {
          minDist = distances[node];
          currNode = node;
        }
      }

      if (currNode === null) break;
      visited.add(currNode);

      for (const neighbor of graph[currNode]) {
        const alt = distances[currNode] + neighbor.weight;
        if (alt < distances[neighbor.node]) {
          distances[neighbor.node] = alt;
          prev[neighbor.node] = currNode;
        }
      }
    }

    // Reconstruct path
    const path = [];
    let u = dest;
    while (prev[u]) {
      path.unshift([prev[u], u]);
      u = prev[u];
    }

    // Find corresponding edge coordinates to highlight
    const newHighlights = edges.filter((edge) =>
      path.some(
        ([from, to]) =>
          (edge.from === from && edge.to === to) || (edge.from === to && edge.to === from)
      )
    );

    setHighlightedEdges(newHighlights);
  };

  return (
    <div className="map-container">
      <div className="" style={{ margin: "10px" }}>
        <select value={src} onChange={(e) => setSrc(e.target.value)}>
          <option value="">Select Source</option>
          {cities.map((city) => (
            <option className="input-field input" key={city} value={city}>{city}</option>
          ))}
        </select>

        <select value={dest} onChange={(e) => setDest(e.target.value)} style={{ marginLeft: "10px" }}>
          <option value="">Select Destination</option>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>

        <button onClick={findShortestPath} style={{ marginLeft: "10px" }}>
         GO
        </button>
      </div>

      {/* SVG Map */}
      <svg className="map-svg">
        {edges.map((edge, i) => {
          const isHighlighted = highlightedEdges.includes(edge);
          return (
            <g key={i}>
              <line
                x1={edge.x1}
                y1={edge.y1}
                x2={edge.x2}
                y2={edge.y2}
                stroke={isHighlighted ? "red" : "black"}
                strokeWidth="3"
              />
              <text
                x={(edge.x1 + edge.x2) / 2}
                y={(edge.y1 + edge.y2) / 2 - 10}
                fill="black"
              >
                {edge.weight} km
              </text>
            </g>
          );
        })}
      </svg>

      {/* City Labels */}
      <div className="city" style={{ top: 90, left: 80 }}>Pune</div>
      <div className="city" style={{ top: 90, left: 750 }}>Mumbai</div>
      <div className="city" style={{ top: 470, left: 80 }}>Nagpur</div>
      <div className="city" style={{ top: 460, left: 770 }}>Nashik</div>
      <div className="city" style={{ top: 230, left: 400 }}>Sambhaji-Nagar</div>
      <div className="city" style={{ top: 290, left: 650 }}>Delhi</div>
    </div>
  );
}

export default Map;
