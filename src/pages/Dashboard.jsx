import DataTable from "../components/DataTable";
import StatusBadge from "../components/StatusBadge";
import { loans } from "../data/loans";
import { money } from "../utils/format";

function Dashboard() {
  const stats = [
    { id: 1, label: "Today's Collection", value: money(48200) },
    { id: 2, label: "Outstanding", value: "12.4L" },
    { id: 3, label: "Active Loans", value: 186 },
    { id: 4, label: "Approved, Ready to Disburse", value: 2 },
  ];

  const columns = [
    { key: "id", label: "Loan ID" },
    { key: "customer", label: "Customer" },
    { key: "amount", label: "Amount", render: (row) => money(row.amount) },
    {
      key: "status",
      label: "Status",
      render: (row) => <StatusBadge status={row.status} />,
    },
  ];

  return (
    <div>
      <div className="cards">
        {stats.map((stat) => (
          <div className="card" key={stat.id}>
            <p className="card-label">{stat.label}</p>
            <p className="card-value">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="panel section-gap">
        <h2>Recent loans</h2>
        <DataTable columns={columns} rows={loans.slice(0, 3)} />
      </div>
    </div>
  );
}

export default Dashboard;
