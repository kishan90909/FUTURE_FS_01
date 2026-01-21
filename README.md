# 🚀 Personal Portfolio Website

A fully responsive, full-stack portfolio website built to showcase my projects, skills, and professional experience. This application features a React frontend, a Node.js backend, and database integration.

## 🔗 Live Demo
[**View Live Site**](https://your-site-name.netlify.app)

## ✨ Features

* **Project Showcase:** Dynamic gallery displaying projects with descriptions, tech stacks, and links.
* **Skills Section:** Visual representation of technical proficiency (Java, React, MySQL, etc.).
* **Contact Form:** Functional form integrated with the backend API.
* **Responsive Design:** Fully optimized for mobile, tablet, and desktop.
* **Print Optimization:** Custom CSS (`@media print`) ensures the resume section looks perfect when printed or saved as PDF.
* **Database Integration:** Fetches real-time data for projects and skills.

## 🛠️ Tech Stack

**Frontend:**
* React.js
* Redux (State Management)
* CSS3 (Custom Styling & Animations)

**Backend:**
* Node.js
* Express.js

**Database:**
* MySQL / MongoDB (Depending on your specific setup)

**Deployment:**
* Netlify (Frontend)
* Heroku/Render/Vercel (Backend)

## 📂 Project Structure

```bash
/
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




##  ⚙️ Installation & Run Locally
    
*    Follow these steps to set up the project locally.

* **Clone the repository**:
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name

* **Setup Frontend**: Open Bash Terminal 
    cd frontend
    npm install
    npm start

    The frontend will run on http://localhost:3000

* **Setup Backend**: Open a new terminal terminal:
    cd backend
    npm install
    node server.js

    The backend will run on http://localhost:5000 (or your configured port)




## 🔑 Environment Variables

* To run this project, you will need to add the following environment variables to your .env files.

* **In frontend/.env**: REACT_APP_API_URL=http://localhost:5000/api
* **In backend/.env:**: PORT=5000
                        DB_HOST=localhost
                        DB_USER=root
                        DB_PASS=yourpassword
                        DB_NAME=portfolio_db




## 🚀 Deployment

* **Frontend (Netlify)**:
    Push your code to GitHub.
    Log in to Netlify and select "New site from Git".
    Choose your repository.
    Build Command: npm run build
    Publish Directory: build (or dist)

* **Backend**:
    Deploy the backend folder to a service like Render, Heroku, or Railway. Update the REACT_APP_API_URL in your Netlify Environment Variables to point to your live backend URL.



## 🤝 Contributing

    Contributions, issues, and feature requests are welcome!
    Fork the Project
    Create your Feature Branch (git checkout -b feature/AmazingFeature)
    Commit your Changes (git commit -m 'Add some AmazingFeature')
    Push to the Branch (git push origin feature/AmazingFeature)
    Open a Pull Request

## 📞 Contact

Kishan Patel - kpatel.tech.mca@gmail.com
Project Link: https://github.com/your-username/your-repo-name
