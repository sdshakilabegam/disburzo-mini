import { useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ items }) {
  const [open, setOpen] = useState(false);

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <h2 className="logo">Disburzo Mini</h2>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      <nav className={open ? "nav-open" : ""}>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <NavLink
                to={`/${item.id}`}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "menu-btn active" : "menu-btn"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

