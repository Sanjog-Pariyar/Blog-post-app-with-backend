const blogs = require('../models/blog-models')
const asyncWrapper = require('../middleware/async')

const getAllBlogs = asyncWrapper( async(req, res)  => {
    const allBlogs = await blogs.find({})
    res.status(200).json({ allBlogs })
})

const getSingleBlog = asyncWrapper( async(req, res, next) => {
    const { id: blogID } = req.params
    const getSingleBlog = await blogs.findOne({ _id: blogID })

    if (!getSingleBlog) {
        return res.status(404).json({ msg: 'Id not found' })
    }
    res.status(200).json({ getSingleBlog })
} )

const createBlogs = asyncWrapper( async(req, res) => {
    const createdBlogs = await blogs.create(req.body)
    res.status(200).json({ createdBlogs })
})

const deleteBlog = asyncWrapper( async (req, res, next) => {
        const { id: blogID } = req.params
        const deleteTask = await blogs.findOneAndDelete({ _id: blogID })

        if (!deleteTask) {
            return res.status(404).json({ msg: 'Id not found' })
            
        }
        // res.status(200).json({ deleteTask })
        res.status(200).json({ blog: null, status: 'deleted'})
})

const updateTask = asyncWrapper( async (req, res, next) => {
    const { id: blogID } = req.params
    const updateTask = await blogs.findOneAndUpdate({ _id: blogID }, req.body, {
        new: true,
        runValidators: true
    })

    if (!updateTask) {
        return res.status(404).json({ msg: 'Id not found' })
    }
    res.status(200).json({ blog: req.body, status: 'updated'})
})

module.exports = {
    getAllBlogs,
    createBlogs,
    deleteBlog,
    updateTask,
    getSingleBlog
}
