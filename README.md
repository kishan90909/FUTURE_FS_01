# 🚀 Full-Stack Personal Portfolio

<div align="center">
<h3>
🔗 Live Demo:
<a href="https://portfolio-kishan001.netlify.app/" target="_blank">
View Live Site
</a>
</h3>
</div>

<div align="center">

</div>

---

### 📋 Table of Contents

* [🌟 Overview](https://www.google.com/search?q=%23-overview)
* [✨ Key Features](https://www.google.com/search?q=%23-key-features)
* [🛠️ Technology Stack](https://www.google.com/search?q=%23-technology-stack)
* [📂 Project Structure](https://www.google.com/search?q=%23-project-structure)
* [🚀 Installation & Setup](https://www.google.com/search?q=%23-installation--setup)
* [🔑 Environment Variables](https://www.google.com/search?q=%23-environment-variables)
* [☁️ Deployment](https://www.google.com/search?q=%23-deployment)
* [🤝 Contributing](https://www.google.com/search?q=%23-contributing)
* [📞 Contact](https://www.google.com/search?q=%23-contact)

---

## 🌟 Overview

This **Personal Portfolio Website** is a robust, full-stack application designed to professionally showcase projects, technical skills, and experience.

Moving beyond static HTML, this application utilizes a **React frontend** for a dynamic user experience and a **Node.js/Express backend** to manage real-time data fetching for projects and skills. It features a fully responsive design, print-optimized resume views, and a functional contact system.

---

## ✨ Key Features

### 🎨 **User Interface & Experience**

* **Project Showcase:** Dynamic gallery displaying projects with detailed descriptions, tech stacks, and live links.
* **Interactive Skills:** Visual representation of technical proficiency (Java, React, MySQL, etc.) fetched from the database.
* **Responsive Design:** Fully optimized layouts for mobile, tablet, and desktop viewing.
* **Print Optimization:** Custom CSS (`@media print`) ensures the resume section renders perfectly when saved as PDF.

### ⚙️ **Technical Functionality**

* **Backend Integration:** Real-time data fetching ensures the portfolio content is always up-to-date without redeploying the frontend.
* **Contact Form:** Fully functional form integrated with the backend API to handle inquiries.
* **State Management:** Utilizes Redux for efficient global state handling across components.

---

## 🛠️ Technology Stack

### 💻 **Frontend**

| Tech | Usage |
| --- | --- |
| **React.js** | Component-based UI architecture |
| **Redux** | Global state management |
| **CSS3** | Custom styling, animations, and media queries |

### 🔌 **Backend & Database**

| Tech | Usage |
| --- | --- |
| **Node.js** | Server-side runtime environment |
| **Express.js** | RESTful API framework |
| **MySQL / MongoDB** | Persistent data storage for projects and skills |

### ☁️ **Infrastructure**

| Tech | Usage |
| --- | --- |
| **Netlify** | Frontend hosting and CI/CD |
| **Heroku / Render** | Backend API hosting |

---

## 📂 Project Structure

```bash
Portfolio_Project/
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

```

---

## 🚀 Installation & Setup

Follow these steps to set up the project locally.

### 📋 Prerequisites

* **Node.js** (v14+)
* **npm** or **yarn**
* **MySQL** or **MongoDB** instance

### 🛠️ Step 1: Clone Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

```

### 🛠️ Step 2: Frontend Setup

```bash
cd frontend
npm install
npm start
# Runs on http://localhost:3000

```

### 🛠️ Step 3: Backend Setup

Open a new terminal window:

```bash
cd backend
npm install
node server.js
# Runs on http://localhost:5000 (or configured port)

```

---

## 🔑 Environment Variables

To run this project, you will need to add the following environment variables to your `.env` files.

**Frontend (`frontend/.env`):**

```env
REACT_APP_API_URL=http://localhost:5000/api

```

**Backend (`backend/.env`):**

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=portfolio_db

```

---

## ☁️ Deployment

### **Frontend (Netlify)**

1. Push code to GitHub.
2. Log in to Netlify and select **"New site from Git"**.
3. Choose your repository.
4. **Build Command:** `npm run build`
5. **Publish Directory:** `build` (or `dist`)
6. *Update Environment Variables in Netlify to point to your live backend URL.*

### **Backend (Heroku/Render)**

1. Deploy the `backend` folder to a service like Render, Heroku, or Railway.
2. Ensure database connection strings are set in the production environment variables.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork** the Project
2. Create your **Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** your Changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the Branch (`git push origin feature/AmazingFeature`)
5. Open a **Pull Request**

---

## 📞 Contact

**Kishan Patel** 📧 Email: kpatel.tech.mca@gmail.com

🔗 Project Link: [https://github.com/your-username/your-repo-name](https://github.com/your-username/your-repo-name)

---

*Built with ❤️ using React & Node.js*
