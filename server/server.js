require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)


const storeItems = new Map([
    [1, {price:100, name:"JUST BURGER"}],
    [2, {price:200, name:"BBQ BACON BURGER"}]
])


app.get('/', (req, res) => {
  res.send('Server is working!')
})

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

