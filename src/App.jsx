import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="min-h-screen bg-[url(./assets/background.svg)] bg-cover">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
