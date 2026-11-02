function Sidebar({ items, activeId, onSelect }) {
  return (
    <aside className="sidebar">
      <h2 className="logo">Disburzo Mini</h2>
      <nav>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <button
                className={
                  item.id === activeId ? "menu-btn active" : "menu-btn"
                }
                onClick={() => onSelect(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
