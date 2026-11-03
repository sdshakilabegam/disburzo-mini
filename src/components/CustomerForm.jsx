import { useState } from "react";

const emptyValues = { name: "", phone: "", centre: "", status: "Active" };

function CustomerForm({ initialValues, onSave, onCancel }) {
  const [values, setValues] = useState(initialValues ?? emptyValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validate = () => {
    const errs = {};
    if (values.name.trim().length < 3)
      errs.name = "Name must be at least 3 characters";
    if (!/^[6-9]\d{9}$/.test(values.phone))
      errs.phone = "Enter a valid 10-digit mobile number";
    if (!values.centre.trim()) errs.centre = "Centre is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      onSave({
        ...values,
        name: values.name.trim(),
        centre: values.centre.trim(),
      });
    }
  };

  return (
    <form className="panel form" onSubmit={handleSubmit} noValidate>
      <h2>{initialValues ? "Edit customer" : "Add customer"}</h2>
      <div className="form-grid">
        <label>
          Name
          <input
            className="input"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <label>
          Phone
          <input
            className="input"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            maxLength={10}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </label>
        <label>
          Centre
          <input
            className="input"
            name="centre"
            value={values.centre}
            onChange={handleChange}
          />
          {errors.centre && <span className="error">{errors.centre}</span>}
        </label>
        <label>
          Status
          <select
            className="input"
            name="status"
            value={values.status}
            onChange={handleChange}
          >
            <option>Active</option>
            <option>Dropout</option>
          </select>
        </label>
      </div>
      <div className="form-actions">
        <button type="submit" className="btn">
          Save
        </button>
        <button type="button" className="btn btn-light" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default CustomerForm;
