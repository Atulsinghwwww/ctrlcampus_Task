const express = require('express')

const app = express();

let ctrl =[
    {Task : "THE LIST OF TASKS"},
    {Task : "CREAT A NEW TASK"},
    {Task : "UPDATE THE TASK OF ID "},
    {Task : "ID"},
]
// Get 
app.get('/ctrl', (req, res) => {
    res.send(ctrl)
})


// POST
app.post('/ctrl', (req, res) => {
    let Task = req.body.Task;
    let Task1 = {
        id : ctrl.length + 1,
        Task : Task
    }
    ctrl.push(Task1);
    res.send(Task1);
})


// PUT

app.put('/ctrl/:id', (req, res) => {
    let Task = req.body.Task;
    ctrl.find((e) => {
        if (e,id == +req.params.id) {
            e.Task = Task;
            res.send(e);
        }
    }) 
})

// DELETE 

app.delete('/ctrl/:id',(req, res) => {
    let index = ctrl.findIndex((e1) =>{
        if (e1.id == req.params.id){
            return true;
        
        } 
    })
    if(index < 0){
        res.status(404).send
    }
    let Task2 = ctrl[index];
    ctrl.splice(index, 1)
    res.send(student)
})




app.listen(3000, () => {
    console.log('Hello Ctrl Campus');
})