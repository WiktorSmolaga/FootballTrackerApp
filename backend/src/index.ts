import dotenv from 'dotenv';
import express from 'express';
import { error } from 'node:console';
import test from 'node:test';
dotenv.config();



const API_FOOTBALL_KEY = process.env.API_FOOTBALL_KEY;
if(!API_FOOTBALL_KEY){
    throw new Error('API_FOOTBALL_KEY is missing')
}
const app = express();

const PORT = 3000;

app.get('/', function(request, response){
    response.send('FootballTracker API works')
});


app.get('/matches', async function(request,response){
    const date = request.query.date;
    
    if(!date){
        response.status(400).json({
            message:'Date parameter is required'
        });   
    }else if(typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date)){
        response.status(400).json({
            message: 'Invalid date format'
        })
    }else{
        const apiUrl = `https://v3.football.api-sports.io/fixtures?date=${date}`;
        
    response.json({
        message: 'Matches enpoint works',
        date: date,
        matches: []
    })
}
});

app.listen(PORT, 
    function(){
        console.log('it works on port 3000')
});


