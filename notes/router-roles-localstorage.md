Router, Roles and localStorage (Thursday)
What I built
A role switch in the header: Admin, Area Manager, Branch Manager, Employee.
A menu that shows only the pages the chosen role can see.
A separate URL for each page (/dashboard, /customers, /loans).
Add, Edit and Delete buttons on the Customers screen that show only for allowed roles.
The chosen role and the customers list are saved, so they stay after a refresh.
React Router
BrowserRouter wraps the whole app in main.jsx.
Routes and Route connect a URL to a page.
NavLink is a menu link. It knows when it is the current page, so I can style it as active.
Navigate sends the user to another page (for example / goes to /dashboard).
Role-based menu
src/data/roles.js keeps two lists: which menu items each role can see (menuAccess) and which actions each role can do (customerPermissions).
canSee(role, id) says whether a menu item is allowed for a role.
App.jsx filters the menu with canSee and sends only the allowed items to the sidebar.
Permissions on a screen
can(role, 'add'), can(role, 'edit') and can(role, 'delete') return true or false.
The Customers screen shows a button only when can(...) is true.
If a role opens a URL it is not allowed to, the page shows "You do not have access to this page."
localStorage
It keeps small data in the browser, even after a refresh.
Read once at the start: useState(() => localStorage.getItem(...)).
Save on every change: useEffect(() => { localStorage.setItem(...) }, [value]).
Objects and lists must be saved as text with JSON.stringify and read back with JSON.parse.
To clear the saved data: localStorage.clear() in the browser console.
Important

This only hides things on the screen. A real app must also check permissions on the server, because a user can change what the browser shows.

What I tested
Employee sees only 3 menu items.
Employee has no Add button and no Actions column.
Admin sees Add, Edit and Delete.
Employee opening /admin sees "You do not have access".
The role stays after a refresh.
A new customer stays after a refresh.
The URL changes when I click menu items.
