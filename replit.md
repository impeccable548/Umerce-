# Umerce

A food ordering web application — "Place your order 🔥🔥"

## Tech Stack

- **Runtime**: Node.js 20
- **Framework**: Express.js
- **Frontend**: Vanilla HTML/CSS/JS (served as static files from `public/`)
- **Port**: 5000

## Project Structure

```
umerce/
├── server.js         # Express server (API + static file serving)
├── public/
│   └── index.html    # Single-page frontend (menu, cart, order)
├── package.json
└── README.md
```

## Features

- Browse menu items by category (Burgers, Pizza, Salads, Drinks)
- Add/remove items from cart
- Place orders via REST API
- In-memory order storage (resets on server restart)

## API Endpoints

- `GET /api/menu` — Returns all menu items
- `POST /api/orders` — Places a new order `{ items, customerName }`
- `GET /api/orders` — Returns all placed orders

## Running the App

```bash
node server.js
```

The app runs on `0.0.0.0:5000`.

## Deployment

Configured for autoscale deployment via `node server.js`.
