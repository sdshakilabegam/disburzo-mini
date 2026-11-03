import { useState } from "react";
import DataTable from "../components/DataTable";
import StatusBadge from "../components/StatusBadge";
import CustomerForm from "../components/CustomerForm";
import { initialCustomers } from "../data/customers";

function Customers() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);

  const filtered = customers.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );

  const openAdd = () => {
    setEditingCustomer(null);
    setShowForm(true);
  };

  const openEdit = (customer) => {
    setEditingCustomer(customer);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingCustomer(null);
  };

  const handleSave = (values) => {
    if (editingCustomer) {
      setCustomers(
        customers.map((c) =>
          c.id === editingCustomer.id ? { ...c, ...values } : c,
        ),
      );
    } else {
      const nextId = Math.max(0, ...customers.map((c) => c.id)) + 1;
      setCustomers([...customers, { ...values, id: nextId }]);
    }
    closeForm();
  };

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
    {
      key: "actions",
      label: "Actions",
      render: (row) => (
        <button className="btn btn-small" onClick={() => openEdit(row)}>
          Edit
        </button>
      ),
    },
  ];

  return (
    <div>
      {showForm && (
        <CustomerForm
          key={editingCustomer ? editingCustomer.id : "new"}
          initialValues={editingCustomer}
          onSave={handleSave}
          onCancel={closeForm}
        />
      )}
      <div className="panel section-gap">
        <div className="toolbar">
          <input
            className="input"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="count">{filtered.length} customers</span>
          <button className="btn" onClick={openAdd}>
            + Add customer
          </button>
        </div>
        <DataTable
          columns={columns}
          rows={filtered}
          emptyText="No customers found"
        />
      </div>
    </div>
  );
}

export default Customers;
