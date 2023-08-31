const express = require('express')
const router = express.Router()
const {
    getAllBlogs,
    createBlogs,
    deleteBlog,
    updateTask,
    getSingleBlog
} = require('../controller/blog-controller')

router.route('/').get(getAllBlogs).post(createBlogs)
router.route('/:id').delete(deleteBlog).patch(updateTask).get(getSingleBlog)

module.exports = router