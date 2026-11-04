export const roles = ["Admin", "Area Manager", "Branch Manager", "Employee"];

// which menu items each role can see
export const menuAccess = {
  Admin: [
    "dashboard",
    "customers",
    "loans",
    "collections",
    "finance",
    "reports",
    "hr",
    "master",
    "admin",
  ],
  "Area Manager": [
    "dashboard",
    "customers",
    "loans",
    "collections",
    "finance",
    "reports",
    "hr",
  ],
  "Branch Manager": [
    "dashboard",
    "customers",
    "loans",
    "collections",
    "finance",
    "reports",
  ],
  Employee: ["dashboard", "customers", "collections"],
};

// View / Add / Edit / Delete on the Customers screen
export const customerPermissions = {
  Admin: { view: true, add: true, edit: true, delete: true },
  "Area Manager": { view: true, add: true, edit: true, delete: false },
  "Branch Manager": { view: true, add: true, edit: true, delete: false },
  Employee: { view: true, add: false, edit: false, delete: false },
};

export const canSee = (role, id) => menuAccess[role].includes(id);
export const can = (role, action) => customerPermissions[role][action];
