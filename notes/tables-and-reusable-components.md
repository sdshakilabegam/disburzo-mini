# Tables and reusable components (Week 5, Tuesday)

- `DataTable` is one reusable table. Each page passes `columns` and `rows` as props.
- A column can have a `render` function to show custom content, such as a status badge.
- `StatusBadge` turns a status text into a coloured label using one CSS class per status.
- Sample data lives in `src/data`, so pages stay clean.
- Search and filter use state plus `filter()`. The table shows the filtered rows.
- An empty list shows a message instead of a blank table.
