const express = require('express');
const router = express.Router();
const { getProjects, getSkills } = require('../controllers/projectController');

router.get('/', getProjects);
router.get('/skills', getSkills);

module.exports = router;