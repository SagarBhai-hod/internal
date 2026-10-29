const express = require('express');
const cors = require('cors');
let Student=[]
const app = express();
app.use(express.json())
app.use(cors())
app.get('/users/:id', (req, res) => {
    const uid = req.params.id;
    let status=Student.find((i) => i.id === uid);
    if(!status){
        res.status(404).send("User not found")
    }
    return res.status(200).json({ message: "User found", data: status })
})
app.post('/users', (req, res) => {
    const { id, name, email } = req.body;
    if(!id || !name || !email){
        return res.status(400).json({ message: "All fields are required" });
    }
    return res.status(201).json({ message: "User created successfully", data: { id, name, email } })
})
app.put('/users/:id', (req, res) => {
    const uid = req.params.id;
    const { name, email } = req.body;
    let status=Student.find((i) => i.id === uid);
    if(!status){
        res.status(404).send("User not found")
    }
    return res.status(200).json({ message: "User updated successfully", data: { ...status, name, email } })
})
app.delete('/users/:id', (req, res) => {
    const uid = req.params.id;
    let status=Student.find((i) => i.id === uid);
    if(!status){
        res.status(404).send("User not found")
    }
    return res.status(200).json({ message: "User deleted successfully", data: status })
})
let port = 5000;
app.listen(port, () => {
    console.log('Server is running on port 3000');
})
