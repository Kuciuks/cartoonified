require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)


const storeItems = new Map([
    [1, {priceInCents:100, name:"JUST BURGER"}],
    [2, {priceInCents:200, name:"BBQ BACON BURGER"}]
])


app.post('/checkout-session', async (req, res) =>{
  try{
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: req.body.items.map(item=>{
        const storeItem = storeItems.get(item.id)
        return{
          price_data: {
            currency: 'usd',
            product_data:{
              name: storeItem.name
            },
            unit_amount: storeItem.priceInCents
          },
          quantity: item.quantity
        }
      }),
      success_url:`${process.env.SUCCESS_URL}`,
      cancel_url: `${process.env.CANCEL_URL}`
    })
    console.log("Stripe session created:", session.url)
    res.json({url:session.url})
  }
  catch (e){
    console.error("Checkout error:", e.message)
    res.status(500).json({error: e.message})
  }
})


app.get('/', (req, res) => {
  res.send('Server is working!')
})

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

