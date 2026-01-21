/* ===========================
  Data From Backend
=========================== */

// const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// // --- Fetch Projects ---
// export const fetchProjects = async () => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/projects`);
        
//         if (!response.ok) {
//             throw new Error('Failed to fetch projects');
//         }
        
//         // The backend should return the array of projects directly or inside an object
//         const data = await response.json();
//         return { data }; // Keeping your existing structure: { data: [...] }
//     } catch (error) {
//         console.error("API Error:", error);
//         return { data: [] }; // Return empty array on failure so app doesn't crash
//     }
// };

// // --- Fetch Skills ---
// export const fetchSkills = async () => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/skills`);
        
//         if (!response.ok) {
//             throw new Error('Failed to fetch skills');
//         }

//         const data = await response.json();
//         return { data };
//     } catch (error) {
//         console.error("API Error:", error);
//         return { data: [] };
//     }
// };

// // --- Send Contact Form ---
// export const sendContact = async (userData) => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/contact`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(userData),
//         });

//         if (!response.ok) {
//             throw new Error('Failed to send message');
//         }

//         return await response.json();
//     } catch (error) {
//         console.error("API Error:", error);
//         return { success: false, message: error.message };
//     }
// };



/* ===========================
   NOt Need DataBase
=========================== */


// We are faking the API so we don't need a Backend Server
export const fetchProjects = () => {
    return Promise.resolve({
        data: [
            {
                id: 1,
                title: 'Portfolio Website', 
                description: 'The website you are currently looking at.', 
                tech_stack: 'React.js, HTML, CSS, Node.js, MySQL', 
                image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', 
                live_link: '#', 
                repo_link: '#'
            },
            {
                id: 2,
                title: 'Online Vehicle Service Booking System ', 
                description: 'Allows users to book vehicle services, manage appointments, track service status online and user authentication.', 
                tech_stack: 'Python (Flask framework),  HTML, CSS, JavaScript, MySQL ', 
                image_url: require('../src/assets/images/profile.jpg'),
                live_link: '#', 
                repo_link: 'https://github.com/kishan90909/Autocare'
            },
            {
                id: 3,
                title: 'E-Commerce Platform', 
                description: 'A full-featured shopping cart with payment gateway integration.', 
                tech_stack: 'React.js, Tailwind CSS, Node.js, MySQL', 
                image_url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80', 
                live_link: '#', 
                repo_link: '#'
            }
        ]
    });
};

export const fetchSkills = () => {
    return Promise.resolve({
        data: [
            { id: 1, name: 'JAVA', level: 90 },
            { id: 2, name: 'React.js', level: 90 },
            { id: 3, name: 'JavaScript', level: 80 },
            { id: 4, name: 'HTML/CSS', level: 85 },
            { id: 5, name: 'Node.js', level: 80 },
            { id: 6, name: 'MySQL', level: 75 },
            { id: 7, name: 'Python', level: 85 },
            { id: 8, name: 'GitHub', level: 75 }
        ]
    });
};

// We will use Netlify's built-in form handler instead of our backend
export const sendContact = (data) => {
    return Promise.resolve({ success: true });
};