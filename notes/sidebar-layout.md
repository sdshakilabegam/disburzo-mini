# Sidebar layout and dashboard (Week 5, Monday)

## What I built

A Disburzo-inspired mini project with a sidebar menu, a header and a dashboard with summary cards.

## Key ideas

- The menu is stored as data (`src/data/menu.js`) and rendered with `map()`, so adding a menu item means adding one object.
- `App` holds the state `activeId`. Clicking a menu button calls `onSelect`, which updates `activeId`.
- `Sidebar` receives `items`, `activeId` and `onSelect` as props. It does not own any state.
- The header title and the page shown change by conditional rendering: Dashboard if `activeId` is 'dashboard', otherwise a placeholder page.
- The layout uses flexbox: sidebar fixed width, main area `flex: 1`.
- All colours are CSS variables in `:root`, so changing the theme means editing one block.

## Next

Thursday I will replace the `activeId` state with React Router and add role-based menus.
