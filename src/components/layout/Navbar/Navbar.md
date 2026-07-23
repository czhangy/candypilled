# Navbar

The site-wide navigation bar. Shows a link back to the home page on the
left (hidden while already on the home page) and a menu toggle on the
right that animates between a hamburger and a close icon. The Hall of
Fame link is only shown once at least one Hall of Fame entry exists.

## State

| State    | Type      | Initial value | Description                      |
| -------- | --------- | ------------- | -------------------------------- |
| `isOpen` | `boolean` | `false`       | Whether the nav menu is expanded |

## Effects

- **On `isOpen` change** — while the menu is open, listens for clicks
  outside the navbar and closes the menu when one occurs
