const express = require("express")
const user = require("./MOCK_DATA.json");

const app = express();

const port = 8000;

/// Routes

app.get("/api/user",(req,res) => {
    return res.json(user);
});

app.get("/user", (req, res) => {
  const html = `
    <ul>
      ${user.map(u => `<li>${u.first_name}</li>`).join("")}
    </ul>
  `;
  res.send(html);
});

app.get("/api/user/:id",(req,res)=>{
    const id = Number(req.params.id);
    const us = user.find((u)=> u.id === id);
    return res.json(us);
});


app.listen(port,()=> console.log(`Server Started at Port: ${port}`));