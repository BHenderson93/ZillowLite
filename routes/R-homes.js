const express = require('express');
const router = express.Router();
const { allHomes, addHome, editHome, deleteHome, likeHome } = require('../controllers/C-homes')

router.post('/all', allHomes)
router.post('/add', addHome)
router.post('/edit', editHome)
router.post('/delete', deleteHome)
router.post('/like', likeHome)

module.exports = router