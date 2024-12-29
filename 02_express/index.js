import express from "express";

const app = express()
const PORT = 3000
app.use(express.json())

let data = []
let nextid = 1

// Add a new data
app.post('/hello' ,(req, res) => {
     const {name , price } = req.body
     const newdata = {id: nextid++, name, price}
     data.push(newdata)
     res.status(201).send(newdata) 
})

// Get all data
app.get('/hello' ,(req, res) => {
  res.status(200).send(data)
})

// Get a specific data
app.get('/hello/:id' ,(req, res) => {
 const storeid = data.find(d => d.id === parseInt(req.params.id))
 if(!storeid){
   return res.status(404).send('Data Not Found')
 }
  res.status(200).send(storeid)
})

// Update a data
app.put('/hello/:id' ,(req, res) => {
  const storeid = data.find(d => d.id === parseInt(req.params.id))
  if(!storeid){
    return res.status(404).send('Data Not Found')
  }

  storeid.name = req.body.name
  storeid.price = req.body.price
  res.status(200).send(storeid)
})

// Delete a data
app.delete('/hello/:id' ,(req, res) => {
  const storeid = data.find(d => d.id === parseInt(req.params.id))
  if(!storeid){
    return res.status(404).send('Data Not Found')
  }

  const index = data.indexOf(storeid)
  data.splice(index, 1)
  res.status(204).send()
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})