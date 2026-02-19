const express = require("express")
const user = require("./MOCK_DATA.json");

const app = express();

const port = 8000;

/// middleware
app.use(express.urlencoded({extended:false}));

/// Routes

// app.get("/api/user",(req,res) => {
//     return res.json(user);
// });

// app.get("/user", (req, res) => {
//   const html = `
//     <ul>
//       ${user.map(u => `<li>${u.first_name}</li>`).join("")}
//     </ul>
//   `;
//   res.send(html);
// });

// app.get("/api/user/:id",(req,res)=>{
//     const id = Number(req.params.id);
//     const us = user.find((u)=> u.id === id);
//     return res.json(us);
// });

// app.post("/api/user",(req,res)=>{
//     return res.json({status: "pending"});
// })

// app.patch("/api/user/:id",(req,res)=>{
//     return res.json({status : "Pending"})
// })

// Routes
app.route("/api/user/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const us = user.find((u) => u.id === id);
    return res.json(us);
  })
  .put((req, res) => {
    return res.json({ status: "Pending" });
  })
  .delete((req, res) => {
    return res.json({ status: "Pending" });
  });

// Separate POST route (not inside app.route)
app.post("/api/user", (req, res) => {
  const body = req.body;
  console.log(body);
  return res.json({ status: "Pending" });
});


app.listen(port, () => console.log(`Server Started at Port: ${port}`));