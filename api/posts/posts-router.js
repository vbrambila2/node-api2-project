// implement your posts router here
const express = require('express');
const Post = require('./posts-model');

const router = express.Router();

router.get('/', (req, res) => {
    Post.find(req.query)
        .then(posts => {
            res.json(posts);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: "The posts information could not be retrieved" })
        })
})

module.exports = router;