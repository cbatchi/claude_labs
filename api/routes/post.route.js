const { getPosts } = require('../controllers/post.controller');

const router = require('express').Router();

router.get('/', getPosts);

module.exports = router;