import React from 'react';

const Resume = () => {
    return (
        <div className="resume-section">
            {/* Header Section */}
            <div className="resume-header">
                <h3>PATEL KISHAN</h3>
                <p>MCA Student & Web Developer</p>
                
                {/* Contact Info Bar */}
                <div className="contact-info">
                    <span>📞 9313440726</span>
                    <span>✉️ kpatel.tech.mca@gmail.com</span>
                    <span className="links">
                        <a href="#">LinkedIn</a> • <a href="#">GitHub</a> • <a href="#">Leetcode</a>
                    </span>
                </div>

                <div className="summary">
                    <small>
                        MCA student with skills in Java, JavaScript, and Python, experienced in building responsive web applications using HTML, CSS, and React.js. 
                        Familiar with MySQL, DSA, GitHub, Power BI, and Excel, and eager to apply skills in real-world projects.
                    </small>
                </div>
            </div>

            {/* Education Section */}
            <div className="resume-block">
                <h4>Education</h4>
                
                <div className="school">
                    <h5>Parul University</h5>
                    <small>2024 – 2026</small>
                    <p>M.C.A. | CGPA: 7.96/10</p>
                </div>

                <div className="school">
                    <h5>Shri V R Patel Collage of Commerce, Mehsana</h5>
                    <small>2022 – 2024</small>
                    <p>Bachelor of Commerce | CGPA: 7.34/10</p>
                </div>

                <div className="school">
                    <h5>Sheth MRS High School, Unjha</h5>
                    <small>2021</small>
                    <p>12th (GSHSEB) | Percentage: 61.71%</p>
                </div>

                <div className="school">
                    <h5>Patel M.H. High School, Aithor</h5>
                    <small>2019</small>
                    <p>10th (GSHSEB) | Percentage: 67.67%</p>
                </div>
            </div>

            {/* Skills Section */}
            <div className="resume-block">
                <h4>Technical Skills</h4>
                <div className="job">
                    <p><strong>Programming:</strong> Java, JavaScript, Python, OOPs</p>
                    <p><strong>Web Development:</strong> HTML, CSS, React.js</p>
                    <p><strong>Databases:</strong> MySQL</p>
                    <p><strong>Other:</strong> Data Structures & Algorithms, GitHub, Power BI, Excel</p>
                </div>
            </div>

            {/* Projects Section */}
            <div className="resume-block">
                <h4>Projects</h4>

                <div className="job">
                    <h5>Portfolio Website</h5>
                    <small>Tech: HTML, CSS</small>
                    <ul>
                        <li>Developed a responsive personal portfolio website using HTML, CSS.</li>
                        <li>Showcases projects, skills, certifications, and contact information.</li>
                        <li>Integrated GitHub links and deployed the website for public access.</li>
                    </ul>
                </div>

                <div className="job">
                    <h5>Online Vehicle Service Booking System</h5>
                    <small>Tech: Python (Flask), HTML, CSS, JavaScript, MySQL</small>
                    <ul>
                        <li>Web-based Online Vehicle Service System developed using Python, HTML, CSS, JavaScript.</li>
                        <li>Allows users to book vehicle services, manage appointments, and track service status online.</li>
                        <li>Implemented secure user authentication and real-time data management.</li>
                    </ul>
                </div>

                <div className="job">
                    <h5>Online GYM Booking System</h5>
                    <small>Tech: HTML, CSS, JavaScript</small>
                    <ul>
                        <li>Developed a responsive Gym Website using HTML, CSS, and JavaScript.</li>
                        <li>Showcases gym services, workout plans, trainers, and membership details.</li>
                        <li>Designed a clean, user-friendly interface with responsive layout for all devices.</li>
                    </ul>
                </div>
            </div>

            {/* Certificates Section */}
            <div className="resume-block">
                <h4>Certificates</h4>
                <div className="school">
                    <ul>
                        <li>Java, Python</li>
                        <li>Computer Network</li>
                        <li>Data Science Using Python, Exploratory Data Analysis</li>
                    </ul>
                </div>
            </div>

            {/* Download Button */}
            <button className="btn primary" onClick={() => window.print()}>Download PDF</button>
        </div>
    );
};

export default Resume;