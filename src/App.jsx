import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Loans from "./pages/Loans";
import PlaceholderPage from "./pages/PlaceholderPage";
import { menuItems } from "./data/menu";
import { roles, canSee } from "./data/roles";

function App() {
  const [role, setRole] = useState(
    () => localStorage.getItem("role") ?? "Admin",
  );

  useEffect(() => {
    localStorage.setItem("role", role);
  }, [role]);

  const location = useLocation();
  const current = menuItems.find((item) => location.pathname === `/${item.id}`);
  const title = current ? current.label : "Dashboard";

  const allowedItems = menuItems.filter((item) => canSee(role, item.id));

  const pages = {
    dashboard: <Dashboard />,
    customers: <Customers role={role} />,
    loans: <Loans />,
  };

  return (
    <div className="layout">
      <Sidebar items={allowedItems} />
      <div className="main">
        <Header
          title={title}
          role={role}
          roles={roles}
          onRoleChange={setRole}
        />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            {menuItems.map((item) => (
              <Route
                key={item.id}
                path={`/${item.id}`}
                element={
                  canSee(role, item.id) ? (
                    (pages[item.id] ?? <PlaceholderPage name={item.label} />)
                  ) : (
                    <div className="panel">
                      <p>You do not have access to this page.</p>
                    </div>
                  )
                }
              />
            ))}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
