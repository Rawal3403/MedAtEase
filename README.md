**Med@Ease** 💊
A Smart Medicine Delivery Platform

Med@Ease is a web application that connects users with nearby pharmacies, enabling easy access to medicines through a modern, user-friendly interface. It uses Neo4j for smart backend graph-based relationships and React for a responsive frontend.

**Features**

🧭 Intuitive navigation with Sidebar & Navbar

🎯 Hero section and platform highlights

🏥 Dynamic list of available pharmacies (fetched from Neo4j)

🛠️ Graph-based pharmacy data (using Neo4j AuraDB)

💡 Modern React-based UI

⚡ Smooth scrollable pharmacy slider

📱 Fully responsive

**=>Tech Stack**
  **1.Frontend**
    ReactJS (Vite)
    React Router DOM
    CSS Modules

  **2.Backend**
    Node.js with Express
    Neo4j Driver (via AuraDB)

**Code Structure**
med@ease/
├── backend/              # Express server
│   └── server.js         # API routes for Neo4j
├── src/                  # Frontend code
│   ├── components/       
│   │   ├── Sidebar/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── Features/
│   │   ├── HowItWorks/
│   │   ├── Pharmacies/   # Contains Pharmacies.jsx + Pharmacies.css
│   │   └── Auth/         # Login & Signup components
│   └── App.jsx           # Routing and layout
└── README.md

