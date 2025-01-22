# Restaurant App

A simple restaurant listing application built using React. This app allows users to view a list of restaurants, filter them by categories and see details of individual restaurants.

## Prerequisites

Before you begin, ensure that you have met the following requirements:
- [Node.js](https://nodejs.org/) installed (for the backend development environment).
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) for managing dependencies.

---

## Setup and Installation

Follow these steps to set up the project locally:

### 1. Clone the repository

Clone the repository to your local machine using Git:

```bash
git clone https://github.com/tafifa/FrontendDevReactjs-MuhammadTafifQairawanAssiddiqi.git
```

### 2. Install dependencies

Navigate to the project folder and run the following command to install the dependencies:

```bash
cd FrontendDevReactjs-MuhammadTafifQairawanAssiddiqi
npm install
```

or if you're using Yarn:

```bash
yarn install
```

### 3. Start the development server

Once the dependencies are installed, start the development server:

```bash
npm start
```

or with Yarn:

```bash
yarn start
```

This will start the React development server at `http://localhost:5173`. You can open the app in your browser.

---

## Folder Structure

Here’s a quick overview of the key files and folders:

- **src/**
  - **components/**: Contains all React components like `RestaurantCard`, `RestaurantList`, `RestaurantDetail`, `FilterNavigation`, and `Header`.
  - **data/**: Contains the `restaurants.json` file with the list of restaurants.
  - **App.js**: Main entry point for the app, where components are assembled.
  - **index.js**: The main file for rendering the app.

- **public/**
  - **index.html**: The HTML template file.

---

## How to Use

1. **Viewing the restaurant list**: The home page displays a list of restaurants with options to filter by status, price, or cuisine.
2. **Viewing restaurant details**: Click on a restaurant's "View Details" button to see more information including its description, rating, price, and location on a map.
3. **Interacting with filters**: Use the filter options to narrow down restaurants by open status, price range, and cuisine type.
4. **Map**: Each restaurant detail page shows a map below the description with the restaurant’s location.

---

## Customizing the Data

The data for the restaurants is stored in the `restaurants.json` file. You can customize this file with your own restaurant data. Each restaurant entry should have:

- **id**: Unique identifier for each restaurant.
- **name**: The name of the restaurant.
- **slug**: A URL-friendly version of the restaurant's name.
- **cuisine**: Type of cuisine (e.g., Italian, Japanese, etc.).
- **price**: Price range (`$, $$, $$$`).
- **status**: Current status (`open` or `closed`).
- **rating**: Rating of the restaurant (1 to 5).
- **description**: A brief description of the restaurant.

---

## Deployment

To deploy this app for production, you can build it using:

```bash
npm run build
```

This will create an optimized build in the `build/` folder. You can then deploy this folder to any static hosting service such as GitHub Pages, Netlify, or Vercel.

---