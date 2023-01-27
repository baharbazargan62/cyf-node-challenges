const express = require("express");
const app = express();
const port=9090
app.use(express.json())
let people = [
    {
      name: "staff",
      members: ["talea@techtonica.org", "michelle@techtonica.org"],
    },
    {
      name: "students",
      members: ["chris@techtonica.org", "hamid@techtonica.org"],
    },
  ];

  app.get("/lists",(req,res)=>{
   res.send(people)
  })
  app.get("/lists/:name",(req,res)=>{
    
    const person=people.find(el=>el.name===req.params.name)
     if (person) {
       res.send(person) 
     } else{
        res.status(404).send("Error")
     }

   })
  app.delete('/lists/:name',function(req,res){
     let name=req.params.name
     let index=people.findIndex(item=>item.name===name)
   
    if (index) {
       const arr=people.splice(index,1)
        res.send(arr) 
      } else{
         res.status(404).send("Error")
      }
});
app.put('/list/:name',(req,res)=>{
  let name=req.params.name
  let body=req.body;
  let finditem=people.find(item=>item.name===name)
  if(finditem!==undefined){finditem.name=body.name
                         res.status(200).send(people)}
                         else{
                            let obj={...req.body}
                            people.push(obj)
                            res.status(201).send(people)
                         }
})


  app.listen(port,(req,res)=>{
    console.log("server is listening on 9091");
  })