# BookBazaar

BookBazaar is a modern bookstore-themed e-commerce frontend built with React and Vite. It lets users browse featured books, explore categories, add items to a shopping cart, and save favorites in a wishlist.

## Features

- Book catalog with trending bestsellers
- Category browsing for fiction, self-help, finance, and programming
- Add to cart with quantity controls
- Wishlist support for saving favorite books
- About page and bookstore landing experience
- Responsive layout using Bootstrap styling
- Theme support through React context

## Tech Stack

- React 19
- Vite
- React Router
- Bootstrap 5
- JavaScript

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd BookBazaar
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the local URL shown in the terminal, usually:
   ```bash
   http://localhost:5173
   ```

## Available Scripts

```bash
npm run dev
```
Starts the Vite development server.

```bash
npm run build
```
Creates a production build.

```bash
npm run preview
```
Serves the production build locally.

```bash
npm run lint
```
Runs ESLint checks on the project.

## Project Structure

```text
BookBazaar/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── css/
│   ├── data/
│   ├── images/
│   ├── pages/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
```

## Main Pages

- Home: landing page with categories and featured books
- Book: catalog page for browsing books
- Cart: shopping cart with quantity updates
- Wishlist: saved favorite items
- About: bookstore information page


## License

This project is for educational purposes and is not currently licensed for commercial distribution.
