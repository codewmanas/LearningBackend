import express from "express";

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
     res.send("Hello From Manas")
})
app.get("/bye", (req, res) => {
     res.send("Bye From Manas")
})
app.get("/login", (req, res) => {
     res.send("Login Page")
})
app.get("/user", (req, res) => {
     res.send("Manas Kolaskar")
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})