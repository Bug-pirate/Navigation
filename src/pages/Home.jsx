import React from "react";
import Navbar from '../components/Navbar.jsx';
import './Home.css';
import Map from "../components/Map.jsx";

function Home() {
  return (
    <div className="gradient home-page">
      <Navbar />
      <h1>Welcome to Navigation</h1>
      <p>
      Discover the fastest route between any two points with our intelligent pathfinding system. Powered by Dijkstra’s Algorithm, our platform calculates the most efficient and accurate path for your journey in real-time. Whether you're planning a trip or exploring new routes, our system ensures you reach your destination with ease.
      </p>
    </div>
  );
}

export default Home;
