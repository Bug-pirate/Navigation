import React, { useEffect, useState } from "react";
import axios from "axios";

const ShortestPath = () => {
  const [cities, setCities] = useState([]);
  const [src, setSrc] = useState("");
  const [dest, setDest] = useState("");
  const [path, setPath] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/graph")
      .then((res) => {
        console.log("Cities fetched from backend:", res.data);
        setCities(res.data);
      })
      .catch((err) => {
        console.error("Failed to load cities", err);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (src === "" || dest === "") {
      alert("Please select both source and destination.");
      return;
    }

    if (src === dest) {
      setPath([src]);
      return;
    }

    try {
      const res = await axios.get("http://localhost:3000/api/shortest-path", {
        params: { src, dest },
      });
      setPath(res.data.path);
    } catch (err) {
      console.error("Error fetching shortest path:", err);
      setPath([]);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Find Shortest Path Between Cities</h2>

      {cities.length === 0 ? (
        <p>Loading cities...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            From:
            <select value={src} onChange={(e) => setSrc(e.target.value)}>
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city._id || city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </label>

          <label style={{ marginLeft: "20px" }}>
            To:
            <select value={dest} onChange={(e) => setDest(e.target.value)}>
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city._id || city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </label>

          <button type="submit" style={{ marginLeft: "20px" }}>
            Find Path
          </button>
        </form>
      )}

      {path.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <strong>Shortest Path:</strong> {path.join(" → ")}
        </div>
      )}
    </div>
  );
};

export default ShortestPath;
