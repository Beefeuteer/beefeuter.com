import BeefNavbar from "./layouts/BeefNavbar";
import BeefFooter from "./layouts/BeefFooter";
import React from "react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
      }}
    >
      <BeefNavbar />
      <BeefFooter />
    </div>
  );
}

export default App;
