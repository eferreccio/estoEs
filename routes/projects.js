const express = require('express');
const router = express.Router();

const projectsController = require('../controllers/projects')

router.get('/', projectsController.list);
router.get('/:id', projectsController.detail);
router.post('/create', projectsController.create);
router.delete('/:id', projectsController.remove);


module.exports = router;