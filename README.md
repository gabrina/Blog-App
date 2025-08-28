# Blog-App

**A practice project using GraphQL, GraphCMS, and Material UI, bootstrapped with Create React App**

---

## Table of Contents

- [Overview](#overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [Available Scripts](#available-scripts)  
- [Deployment](#deployment)  
- [Environment Variables](#environment-variables)  
- [Contributing](#contributing) 
- [License](#license) 

---

## Overview

A blog application built with React (via Create React App), leveraging GraphQL for data querying, GraphCMS as a headless CMS, and Material UI for styling and layout.

This project helps demonstrate proficiency in front-end development, CMS integration, API consumption, and UI theming.

---

## Features

- Fetches and displays blog data using **GraphQL** queries.
- **GraphCMS** handles content creation and serves as backend content provider.
- Utilizes **Material UI** for a sleek, responsive user interface.
- Client-side routing to browse posts by slug.
- Responsive design suitable for desktop and mobile use.

---


## Tech Stack

- **Frontend**: React (Create React App)
- **Data Layer**: GraphQL (Apollo Client or react-apollo)
- **CMS**: GraphCMS (Headless CMS)
- **UI**: Material UI  
- **Routing**: React Router

---

## Getting Started

1. **Clone the repository**
    ```bash
    git clone https://github.com/gabrina/Blog-App.git
    cd Blog-App
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Set up environment variables**
    - Duplicate `.env.example` (or create `.env`) with:
      ```
      REACT_APP_GRAPHCMS_ENDPOINT=your_graphcms_endpoint
      ```
    - Replace `your_graphcms_endpoint` with your GraphCMS API endpoint.

4. **Run the development server**
    ```bash
    npm start
    ```
    The app will launch at [http://localhost:3000](http://localhost:3000).

5. **Build for production**
    ```bash
    npm run build
    ```
    Bundled files will be generated in the `build/` folder for deployment.


## Available Scripts

In development mode:
| Command         | Description                                                              |
|-----------------|--------------------------------------------------------------------------|
| `npm start`     | Starts the development server on [http://localhost:3000].                |
| `npm test`      | Launches the test runner in interactive watch mode .     |
| `npm run build` | Builds the app for production deployment in the `build/` directory. |
| `npm run eject` | Exposes underlying configurations; use with caution .    |

---

## Deployment

To deploy to services like **Netlify**, **Vercel**, or **GitHub Pages**:
1. Push the `build/` folder to your chosen hosting.
2. Ensure environment variables (e.g., GraphCMS API endpoint) are properly configured on the hosting dashboard.

---

## Environment Variables

| Variable                        | Description                          |
|---------------------------------|--------------------------------------|
| `REACT_APP_GRAPHCMS_ENDPOINT`  | URL used by Apollo or GraphQL client to fetch post data |

---

## Contributing


- Fork the repository  
- Create a feature branch (`git checkout -b feature/YourFeature`)  
- Commit your changes (`git commit -m 'Add YourFeature'`)  
- Push to the branch (`git push origin feature/YourFeature`)  
- Open a Pull Request

---

## License

MIT

---  
