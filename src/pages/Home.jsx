import React from "react";
import Navbar from '../components/Navbar.jsx'

function Home() {
  return (
    <div
      className="my"
      style={{
        display: "flex",
        flexDirection:'column',
        height: "100vh",
        overflow: "hidden",
        alignItems: "center",
      }}
    >
      < Navbar />
      <h1 style={{ color: "black",  fontSize:'80px'
       }}>Welcome to Navigation</h1>
      <p style={{paddingLeft:'100px', paddingRight:'100px'}}>
        we Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
        dolores illum corporis sequi atque exercitationem quas nobis,
        perferendis nemo rerum ratione, soluta, porro molestias tempora. Eos
        maxime quis ea quibusdam. aut earum hic quae nesciunt per labore
        exercitationem non nam voluptate consequatur accusantium. Aperiam, iste
        dolore nulla minus consectetur quisquam natus corporis nemo consequuntur
        architecto error, eum, doloremque voluptate eaque suscipit.
      </p>
    </div>
  );
}

export default Home;
