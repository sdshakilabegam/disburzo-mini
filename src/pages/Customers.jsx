import { useState } from "react";
import DataTable from "../components/DataTable";
import StatusBadge from "../components/StatusBadge";
import { initialCustomers } from "../data/customers";

function Customers() {
  const [search, setSearch] = useState("");

  const filtered = initialCustomers.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );

  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "phone", label: "Phone" },
    { key: "centre", label: "Centre" },
    {
      key: "status",
      label: "Status",
      render: (row) => <StatusBadge status={row.status} />,
    },
  ];

  return (
    <div className="panel">
      <div className="toolbar">
        <input
          className="input"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="count">{filtered.length} customers</span>
      </div>
      <DataTable
        columns={columns}
        rows={filtered}
        emptyText="No customers found"
      />
    </div>
  );
}

export default Customers;
