import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import PlaceholderPage from "./pages/PlaceholderPage";
import { menuItems } from "./data/menu";

function App() {
  const [activeId, setActiveId] = useState("dashboard");
  const activeItem = menuItems.find((item) => item.id === activeId);

  return (
    <div className="layout">
      <Sidebar items={menuItems} activeId={activeId} onSelect={setActiveId} />
      <div className="main">
        <Header title={activeItem.label} />
        <div className="content">
          {activeId === "dashboard" ? (
            <Dashboard />
          ) : (
            <PlaceholderPage name={activeItem.label} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
