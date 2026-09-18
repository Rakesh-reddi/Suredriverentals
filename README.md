# SureDrive Rentals

Responsive landing page for a Hyderabad-based self-drive car rental business. Visitors can browse the fleet, compare 12-hour and 24-hour rates, and book through WhatsApp or a phone call.

## Tech stack

- HTML5
- CSS3
- Vanilla JavaScript
- [Boxicons](https://boxicons.com/)
- [ScrollReveal](https://scrollrevealjs.org/)

## Project structure

```text
SureDriveRentals/
├── index.html                 # Landing page
├── assets/
│   ├── css/
│   │   └── styles.css         # Layout, theme, and responsive styles
│   ├── js/
│   │   └── main.js            # Mobile menu and scroll animations
│   └── images/
│       ├── brand/             # Logo and favicon
│       ├── cars/              # Fleet photos
│       ├── reviews/           # Customer avatars
│       ├── ui/                # Hero banner and WhatsApp button
│       └── archive/           # Unused design assets
├── stackbit.config.ts
└── README.md
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx --yes serve .
```

Then visit the local URL printed in the terminal (usually `http://localhost:3000`).

## Features

- Fleet cards with 12-hour and 24-hour pricing
- Click-to-call booking and a floating WhatsApp button
- Responsive header with a mobile menu
- About, reviews, and Instagram sections
