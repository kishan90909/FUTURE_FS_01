CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- 1. Projects Table
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    tech_stack VARCHAR(255),
    image_url VARCHAR(255),
    live_link VARCHAR(255),
    repo_link VARCHAR(255)
);

-- 2. Skills Table
CREATE TABLE IF NOT EXISTS skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    level INT NOT NULL, -- Percentage (0-100)
    category VARCHAR(50) -- e.g., 'Frontend', 'Backend'
);

-- 3. Contact Messages Table
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);