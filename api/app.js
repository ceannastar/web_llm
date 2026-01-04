const express = require("express");
 
const users = [];
 
const app = express();
app.use(express.json());
app.use(express.static("public"));
  
app.get("/api/users", async(_, res) => res.send(users));
 
app.get("/api/users/:id", async(req, res) => {
           
    const id = req.params.id;
    const user = users.find(u => u.id === id );
    if(user) res.send(user);
    else res.sendStatus(404);
});
      
app.post("/api/users", async(req, res)=> {
          
    if(!req.body) return res.sendStatus(400);
          
    const userName = req.body.name;
    const userAge = req.body.age;
    const user = {id: crypto.randomUUID(), name: userName, age: userAge};
          
    users.push(user);
    res.send(user);
});
       
app.delete("/api/users/:id", async(req, res)=>{
           
    const id = req.params.id;
    // получаем индекс первого элемента с id=id
    let index = users.findIndex(u => u.id === id );
    if(index > -1){
        // удаляем пользователя из массива по индексу
        const user = users.splice(index, 1)[0];
        res.send(user);
    }
    else{
        res.status(404).send("User not found");
    }
});
      
app.put("/api/users", async(req, res)=>{
           
    if(!req.body) return res.sendStatus(400);
 
    const id = req.body.id;
    const userName = req.body.name;
    const userAge = req.body.age;
          
    const index = users.findIndex(u => u.id === id );
    if(index > -1){
        // изменяем данные у пользователя
        const user = users[index];
        user.age = userAge;
        user.name = userName;
        res.send(user);
    }
    else{
        res.status(404).send("User not found");
    }
});
 
app.listen(3000, () => console.log("Сервер ожидает подключения..."));