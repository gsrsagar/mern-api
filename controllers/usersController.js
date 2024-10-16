const Post = require("../models/posts")


const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).send(posts);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const createUser = async (req, res) => {
    let body = req.body;
    const users = new Post({
        name: body.name,
        age: body.age,
        gender: body.gender,
        rollNo: body.rollNo,
        mobileNo: body.mobileNo
    });
    try {
        await users.save();
        res.status(201).json({
            name: body.name,
            age: body.age,
            gender: body.gender,
            rollNo: body.rollNo,
            mobileNo: body.mobileNo
        })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    let id = req.params.id;
    let body = req.body;
    try {
        const updated = await Post.findByIdAndUpdate(id, body,
            { new: true, runValidators: true });
        res.status(202).json(updated);
    } catch (err) {
        let obj = { message: err.message }
        res.status(400).json(obj)
    }
}


const deleteUser = async (req, res) => {
    let id = req.params.id;
    try {
        if (id == null) {
            res.send(404).json({ message: `Not found with id :${id}` })
        }
        else {
            await Post.findByIdAndDelete(id);
            res.send(`Deleted Record with id:${id}`).status(204)
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }


}


const getById = async(req,res)=>{
    let id = req.params.id;
    try{
        if(id==null){
            res.status(404).json({message:`Not found with id : ${id}`})
        } else {
            let post = await Post.findById(id);
            res.json(post).status(200)
        }
    }catch(err){
        res.status(500).json({ message:err.message})
    }
}


module.exports = {
    getAllPosts,
    createUser,
    updateUser,
    deleteUser,
    getById
}