



const getAllusers = (req, res) => {

    res.status(200);
    res.json(students);
    res.send(students);
};

const createNewuser = async (req, res) => {
    let body = req.body;
    students.push(body);
    if (body == null || !body['name']) {
        res.status(400);
    }
    else {
        res.status(201);
        res.send(body);
    }
}


module.exports ={
    getAllusers,
    createNewuser
}