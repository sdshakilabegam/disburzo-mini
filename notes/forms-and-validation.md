# Add/Edit form with validation (Week 5, Wednesday)

- The form uses controlled inputs: each field's value is stored in state.
- One `handleChange` function updates any field using the input's `name`.
- `validate()` returns an object of error messages. If it is empty, the form is saved.
- The same `CustomerForm` is used for Add and Edit. Edit passes `initialValues`.
- `key` on the form resets its state when switching between customers.
- The customers list is held in state and updated with `map()` (edit) and spread (add).
- A media query makes the layout work on small screens.
