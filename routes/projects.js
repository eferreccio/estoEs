const express = require('express');
const router = express.Router();

const projectsController = require('../controllers/projects')

router.get('/', projectsController.list);
router.get('/:id', projectsController.detail);


module.exports = router;