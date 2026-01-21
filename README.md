🚀 Full-Stack Personal Portfolio<div align="center"><h3>🔗 Live Demo:<a href="https://your-portfolio-link.com" target="_blank">View Live Site</a></h3></div><div align="center"></div>📋 Table of Contents🌟 Overview✨ Key Features🛠️ Technology Stack📂 Project Structure🚀 Installation & Setup🔑 Environment Variables☁️ Deployment🤝 Contributing📞 Contact🌟 OverviewThis Personal Portfolio Website is a robust, full-stack application designed to professionally showcase projects, technical skills, and experience.Moving beyond static HTML, this application utilizes a React frontend for a dynamic user experience and a Node.js/Express backend to manage real-time data fetching for projects and skills. It features a fully responsive design, print-optimized resume views, and a functional contact system.✨ Key Features🎨 User Interface & ExperienceProject Showcase: Dynamic gallery displaying projects with detailed descriptions, tech stacks, and live links.Interactive Skills: Visual representation of technical proficiency (Java, React, MySQL, etc.) fetched from the database.Responsive Design: Fully optimized layouts for mobile, tablet, and desktop viewing.Print Optimization: Custom CSS (@media print) ensures the resume section renders perfectly when saved as PDF.⚙️ Technical FunctionalityBackend Integration: Real-time data fetching ensures the portfolio content is always up-to-date without redeploying the frontend.Contact Form: Fully functional form integrated with the backend API to handle inquiries.State Management: Utilizes Redux for efficient global state handling across components.🛠️ Technology Stack💻 FrontendTechUsageReact.jsComponent-based UI architectureReduxGlobal state managementCSS3Custom styling, animations, and media queries🔌 Backend & DatabaseTechUsageNode.jsServer-side runtime environmentExpress.jsRESTful API frameworkMySQL / MongoDBPersistent data storage for projects and skills☁️ InfrastructureTechUsageNetlifyFrontend hosting and CI/CDHeroku / RenderBackend API hosting📂 Project StructureBashPortfolio_Project/
├── frontend/          # React Client Application
│   ├── public/        # Static assets
│   ├── src/
│   │   ├── assets/    # Images and styles
│   │   ├── components/# Reusable UI components
│   │   ├── services/  # API fetch logic (api.js)
│   │   └── App.js
│   └── package.json
│
├── backend/           # Node.js API Server
│   ├── config/        # Database configuration
│   ├── routes/        # API endpoints
│   ├── server.js      # Entry point
│   └── package.json
│
└── README.md
🚀 Installation & SetupFollow these steps to set up the project locally.📋 PrerequisitesNode.js (v14+)npm or yarnMySQL or MongoDB instance🛠️ Step 1: Clone RepositoryBashgit clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
🛠️ Step 2: Frontend SetupBashcd frontend
npm install
npm start
# Runs on http://localhost:3000
🛠️ Step 3: Backend SetupOpen a new terminal window:Bashcd backend
npm install
node server.js
# Runs on http://localhost:5000 (or configured port)
🔑 Environment VariablesTo run this project, you will need to add the following environment variables to your .env files.Frontend (frontend/.env):Code snippetREACT_APP_API_URL=http://localhost:5000/api
Backend (backend/.env):Code snippetPORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=portfolio_db
☁️ DeploymentFrontend (Netlify)Push code to GitHub.Log in to Netlify and select "New site from Git".Choose your repository.Build Command: npm run buildPublish Directory: build (or dist)Update Environment Variables in Netlify to point to your live backend URL.Backend (Heroku/Render)Deploy the backend folder to a service like Render, Heroku, or Railway.Ensure database connection strings are set in the production environment variables.🤝 ContributingContributions, issues, and feature requests are welcome!Fork the ProjectCreate your Feature Branch (git checkout -b feature/AmazingFeature)Commit your Changes (git commit -m 'Add some AmazingFeature')Push to the Branch (git push origin feature/AmazingFeature)Open a Pull Request📞 ContactKishan Patel 📧 Email: kpatel.tech.mca@gmail.com🔗 Project Link: https://github.com/your-username/your-repo-nameBuilt with ❤️ using React & Node.js
