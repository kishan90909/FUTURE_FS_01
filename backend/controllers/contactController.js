const db = require('../config/db');

exports.sendMessage = async (req, res, next) => {
    const { name, email, message } = req.body;
    try {
        // Save to DB
        await db.query(
            'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
            [name, email, message]
        );
        
        // (Optional) Add Nodemailer logic here to send real email

        res.status(201).json({ success: true, message: 'Message received!' });
    } catch (error) {
        next(error);
    }
};