const express = require('express'); 
const helmet = require('helmet'); 
const knex = require('knex');
const cors = require('cors');
const fetch = require("node-fetch");
const async = require('express-async-await');
const dbConfig = require('./knexfile'); 

const db = knex(dbConfig.development); 

const server = express(); 


server.use(express.json()); 
server.use(helmet()); 
server.use(cors()); 


server.get("/", (req, res)=> {
    res.send("API Running..."); 
})

server.get('/articles', async function(req, res, next){
    function dataFound(){
        return fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=dfe7f9ef5f1046f9aeb896d14185f753')
    };
    async function processData(){
        const data = await dataFound()
        const responseData = await data.json()
        console.log(responseData);
    }
    console.log(data)
    processData()
    res.end();
})


const port = 4000; 
server.listen(process.env.PORT||port, function(){
    console.log("\n=== WEB API LISTENING 4000 ===\n")
})