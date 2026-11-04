import { NavLink } from "react-router-dom";

function Sidebar({ items }) {
  return (
    <aside className="sidebar">
      <h2 className="logo">Disburzo Mini</h2>
      <nav>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <NavLink
                to={`/${item.id}`}
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
