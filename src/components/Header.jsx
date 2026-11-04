function Header({ title, role, roles, onRoleChange }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <div className="header-right">
        <select
          className="input role-select"
          value={role}
          onChange={(e) => onRoleChange(e.target.value)}
        >
          {roles.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        <span className="user">Shakila (Intern)</span>
      </div>
    </header>
  );
}

export default Header;
