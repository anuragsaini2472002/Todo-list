const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors');

const routes = require('./routes/route');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log(`Connected to mongoDB`)
}).catch((e)=>{
    console.log(`Error in DB: ${e}`)
})

app.use(routes)

app.listen(PORT, () => {
    console.log(`Listen on ${PORT}`)
})

