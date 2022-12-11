const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        const Collection = client.db("").collection("");
        
        // rest coad goes here
        
    }
    finally{

    }
}
run().catch(err => err)


app.get('/', (req, res) => {
    res.send('HomePage of server')
});

app.listen(port, () => {
    console.log('This is Success Model school server ', 'port:', port)})