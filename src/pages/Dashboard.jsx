function Dashboard() {
  const stats = [
    { id: 1, label: "Today's Collection", value: "48,200" },
    { id: 2, label: "Outstanding", value: "12.4L" },
    { id: 3, label: "Active Loans", value: 186 },
    { id: 4, label: "Approved, Ready to Disburse", value: 2 },
  ];

  return (
    <div className="cards">
      {stats.map((stat) => (
        <div className="card" key={stat.id}>
          <p className="card-label">{stat.label}</p>
          <p className="card-value">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
