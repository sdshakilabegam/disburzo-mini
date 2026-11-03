import { useState } from "react";
import DataTable from "../components/DataTable";
import StatusBadge from "../components/StatusBadge";
import { loans } from "../data/loans";
import { money } from "../utils/format";

function Loans() {
  const [status, setStatus] = useState("All");

  const filtered =
    status === "All" ? loans : loans.filter((l) => l.status === status);

  const columns = [
    { key: "id", label: "Loan ID" },
    { key: "customer", label: "Customer" },
    { key: "amount", label: "Amount", render: (row) => money(row.amount) },
    {
      key: "outstanding",
      label: "Outstanding",
      render: (row) => money(row.outstanding),
    },
    {
      key: "status",
      label: "Status",
      render: (row) => <StatusBadge status={row.status} />,
    },
  ];

  return (
    <div className="panel">
      <div className="toolbar">
        <select
          className="input"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>All</option>
          <option>Draft</option>
          <option>Approved</option>
          <option>Active</option>
          <option>Closed</option>
        </select>
        <span className="count">{filtered.length} loans</span>
      </div>
      <DataTable columns={columns} rows={filtered} emptyText="No loans found" />
    </div>
  );
}

export default Loans;
