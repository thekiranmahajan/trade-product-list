# Trade Product List

This is a fully responsive e-commerce application built with React.js, Vite.js, and Vanilla CSS. The project features a header with a hamburger menu, a search bar with real-time filtering, and sorting functionality. It fetches products from the Fake Store API and displays them in a grid layout. The project follows industry-standard folder structures for modularity, testability, and reusability of components and styles. The entire codebase is committed using conventional commits and deployed on Vercel.

## Features

- **Responsive Header**:

  - Mobile, tablet, and desktop-friendly.
  - Hamburger menu with transition effects for small screens.
  - Reuses `NavLink` for navigation (Home, About, Cart, Contact).

- **Custom Hook (`useProducts`)**:

  - Fetches data from [Fake Store API](https://fakestoreapi.com/products).
  - Returns products, initial filtered products, and a setter for filtered products.

- **Search Bar**:

  - Real-time search input to filter products by name.
  - Sort buttons to sort products by price, rating, and name.
  - Sort functions stored in `utils/helper.js`.

- **Conditional Rendering**:

  - Displays filtered products or shimmer loading effect based on the length of the filtered products array.
  - Shows a 404 error if no products match the search query.

- **ProductCard Component**:

  - Renders product information in a grid layout.
  - Fully responsive design.

- **SVG Usage**:
  - Various SVGs used for header logo, error messages, etc.

## Preview

## Live Demo

Check out the live demo [here](https://trade-product-list.vercel.app).

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/thekiranmahajan/trade-product-list
   ```

2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the development server
   ```sh
   npm run dev
   ```

### Folder Structure

```
TRADE-PRODUCT-LIST
├── node_modules
├── src
│   ├── assets
│   │   ├── hamburger.svg
│   │   ├── not-found.svg
│   │   ├── shopping-cart.png
│   │   └── star.svg
│   ├── components
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── NavLinks.jsx
│   │   ├── ProductCard.jsx
│   │   └── SearchBar.jsx
│   ├── hooks
│   │   └── useProducts.js
│   ├── shimmers
│   │   ├── index.js
│   │   └── ProductCardShimmer.jsx
│   ├── styles
│   │   ├── card.css
│   │   ├── footer.css
│   │   ├── header.css
│   │   ├── search.css
│   │   └── shimmer.css
│   ├── utils
│   │   ├── constant.js
│   │   └── helper.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

### Usage

- **Header Navigation**: Use the navigation links to browse different sections of the site.
- **Search Products**: Use the search bar to filter products by name in real-time.
- **Sort Products**: Use the sort buttons to sort products by price, rating, or name.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.


## Acknowledgements

- [Fake Store API](https://fakestoreapi.com)
- [Vite.js](https://vitejs.dev)
- [React.js](https://reactjs.org)

