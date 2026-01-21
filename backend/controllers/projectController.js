const db = require('../config/db');

exports.getProjects = async (req, res, next) => {
    try {
        const [rows] = await db.query('SELECT * FROM projects');
        res.status(200).json(rows);
    } catch (error) {
        next(error);
    }
};

exports.getSkills = async (req, res, next) => {
    try {
        const [rows] = await db.query('SELECT * FROM skills');
        res.status(200).json(rows);
    } catch (error) {
        next(error);
    }
};