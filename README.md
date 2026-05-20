# React + Vite
# 🌿 Urban Harvest — Admin Dashboard
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
A responsive and modern admin dashboard for **Urban Harvest**, a fictional farm-fresh food delivery platform. Built with React, Redux Toolkit, and vanilla CSS featuring a premium dark-mode UI with glassmorphism effects, micro-animations, and fully responsive layouts.
Currently, two official plugins are available:
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.x-764ABC?logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/Vanilla_CSS-Custom_Properties-1572B6?logo=css3&logoColor=white)
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)
---
## React Compiler
## 📋 Table of Contents
The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
  - [Production Build](#production-build)
- [Demo Credentials](#-demo-credentials)
- [Project Structure](#-project-structure)
- [Pages Overview](#-pages-overview)
- [State Management](#-state-management)
## Expanding the ESLint configuration
---
If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
## ✨ Features
- **🔐 Login Page** — Split-screen layout with decorative branding panel, email/password fields with validation, show/hide password toggle, "Remember Me" switch, and loading states.
- **📊 Dashboard Page** — Overview stats cards (Total Orders, Revenue, Active Users, Pending Deliveries), recent orders table with status badges, CSS-only bar chart, and top products ranking.
- **📦 Product Management** — Product grid with search and filter functionality, add new products via modal, toggle product availability, star ratings, and stock tracking.
- **🎨 Premium Dark UI** — Glassmorphism cards, staggered slide-up animations, hover effects, custom scrollbars, and a curated green + amber color palette.
- **📱 Fully Responsive** — Mobile-first design with collapsible sidebar, responsive grids, and adaptive table layouts.
- **🗂️ Redux State Management** — Centralized state with Redux Toolkit across authentication, dashboard data, and product management.
---
## 🛠️ Tech Stack
|
 Technology       
|
 Purpose                    
|
|
----------------
|
--------------------------
|
|
 React 19         
|
 UI Framework               
|
|
 Redux Toolkit    
|
 State Management           
|
|
 React Router v7  
|
 Client-side Routing        
|
|
 Vite 8           
|
 Build Tool & Dev Server    
|
|
 Vanilla CSS      
|
 Styling (Custom Properties)
|
|
 Google Fonts     
|
 Typography (Inter, Outfit) 
|
---
## 🚀 Getting Started
### Prerequisites
Make sure you have the following installed on your system:
- **Node.js** — v18.0 or higher ([Download](https://nodejs.org/))
- **npm** — v9.0 or higher (comes with Node.js)
You can verify your installation by running:
```bash
node --version
npm --version
```
### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/Gaurav68-bit/Urban-Harvest.git
   cd Urban-Harvest
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
   This will install all required packages including React, Redux Toolkit, React Router, and Vite.
### Running the App
Start the development server:
```bash
npm run dev
```
The app will be available at **http://localhost:5173/** (or the next available port). Open this URL in your browser.
### Production Build
To create an optimized production build:
```bash
npm run build
```
The output will be generated in the `dist/` folder. To preview the production build locally:
```bash
npm run preview
```
---
## 🔑 Demo Credentials
Use the following credentials to log in:
|
 Field    
|
 Value                        
|
|
--------
|
----------------------------
|
|
 Email    
|
`admin@urbanharvest.com`
|
|
 Password 
|
`password123`
|
> **Note:** The app uses mock data only. No real API calls or backend services are involved.
---
## 📁 Project Structure
```
urbanHarvest/
├── public/                          # Static assets
├── src/
│   ├── app/
│   │   └── store.js                 # Redux store configuration
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── RecentOrders.jsx     # Recent orders table
│   │   │   └── RecentOrders.css
│   │   ├── Layout/
│   │   │   ├── DashboardLayout.jsx  # Auth-guarded layout wrapper
│   │   │   ├── DashboardLayout.css
│   │   │   ├── Header.jsx           # Top header with search & profile
│   │   │   ├── Header.css
│   │   │   ├── Sidebar.jsx          # Collapsible sidebar navigation
│   │   │   └── Sidebar.css
│   │   ├── Products/
│   │   │   ├── AddProductModal.jsx  # Add product form modal
│   │   │   ├── AddProductModal.css
│   │   │   ├── ProductCard.jsx      # Product display card
│   │   │   └── ProductCard.css
│   │   └── UI/
│   │       ├── Button.jsx           # Reusable button (4 variants)
│   │       ├── Button.css
│   │       ├── StatsCard.jsx        # Dashboard statistics card
│   │       ├── StatsCard.css
│   │       ├── StatusTag.jsx        # Status badge pill
│   │       └── StatusTag.css
│   ├── data/
│   │   └── mockData.js              # All mock/dummy data
│   ├── features/
│   │   ├── auth/
│   │   │   └── authSlice.js         # Auth state (login/logout)
│   │   ├── dashboard/
│   │   │   └── dashboardSlice.js    # Dashboard stats & orders
│   │   └── products/
│   │       └── productsSlice.js     # Products CRUD & filtering
│   ├── pages/
│   │   ├── LoginPage.jsx            # Login screen
│   │   ├── LoginPage.css
│   │   ├── DashboardPage.jsx        # Dashboard screen
│   │   ├── DashboardPage.css
│   │   ├── ProductsPage.jsx         # Product management screen
│   │   └── ProductsPage.css
│   ├── App.jsx                      # Router configuration
│   ├── App.css
│   ├── index.css                    # Design system & global styles
│   └── main.jsx                     # App entry point
├── index.html                       # HTML template
├── package.json
├── vite.config.js
└── README.md
```
---
## 📄 Pages Overview
### 1. Login Page (`/`)
- Full-screen split layout with animated branding panel
- Email and password fields with inline SVG icons
- Show/hide password toggle
- Custom "Remember Me" toggle switch
- Form validation with error messages
- Simulated API call with 1.2s loading delay
### 2. Dashboard (`/dashboard`)
- Personalized welcome greeting
- 4 stats cards with trend indicators and staggered animations
- Recent orders table with color-coded status badges
- CSS-only weekly activity bar chart
- Top-selling products ranking
### 3. Products (`/products`)
- Real-time search across product names, categories, and descriptions
- Filter tabs: All / Available / Out of Stock
- Responsive product card grid (3 → 2 → 1 columns)
- Star ratings, pricing, and stock information
- Add Product modal with category-based emoji mapping
- Toggle product availability status
---
## 🗂️ State Management
The app uses **Redux Toolkit** with three feature slices:
|
 Slice        
|
 State                                         
|
 Key Actions                                    
|
|
------------
|
---------------------------------------------
|
----------------------------------------------
|
|
`auth`
|
 user, isAuthenticated, rememberMe, loading     
|
`loginUser`
, 
`logout`
, 
`setRememberMe`
|
|
`dashboard`
|
 stats, recentOrders, userProfile               
|
`updateOrderStatus`
, 
`refreshDashboard`
|
|
`products`
|
 products, searchQuery, filterStatus, modalOpen 
|
`addProduct`
, 
`toggleProductStatus`
, 
`setSearchQuery`
, 
`setFilterStatus`
|
---
## 📝 License
This project is created as a UI/UX Developer assignment for **Urban Harvest**.
---
<p align="center">
  Built with 💚 using React + Redux Toolkit
</p>
