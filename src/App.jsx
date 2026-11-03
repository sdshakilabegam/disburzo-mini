import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Loans from "./pages/Loans";
import PlaceholderPage from "./pages/PlaceholderPage";
import { menuItems } from "./data/menu";

function App() {
  const [activeId, setActiveId] = useState("dashboard");
  const activeItem = menuItems.find((item) => item.id === activeId);

  const pages = {
    dashboard: <Dashboard />,
    customers: <Customers />,
    loans: <Loans />,
  };

  return (
    <div className="layout">
      <Sidebar items={menuItems} activeId={activeId} onSelect={setActiveId} />
      <div className="main">
        <Header title={activeItem.label} />
        <div className="content">
          {pages[activeId] ?? <PlaceholderPage name={activeItem.label} />}
        </div>
      </div>
    </div>
  );
}

export default App;
