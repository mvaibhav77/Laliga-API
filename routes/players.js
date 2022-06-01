const url = require('url');
const express = require('express');
const router = express.Router();
const axios = require('axios');
const apicache = require('apicache');
// Init cache
let cache = apicache.middleware;

// Env vars
const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY_VALUE = process.env.API_KEY_VALUE;


router.get('/',cache('2 minutes'),async (req,res)=>{
    try {
      const options = {
        method: 'GET',
        url: 'https://api-football-beta.p.rapidapi.com/players',
        params: {
          season: '2021',
          league: '140',
          ...url.parse(req.url, true).query
        },
        headers: {
          'X-RapidAPI-Host': API_BASE_URL,
          'X-RapidAPI-Key': API_KEY_VALUE,
        }
      };
      
      const apiRes =axios.request(options)
      apiRes.then(function (RES) {
        // console.log(RES.data);
        res.status(200).json(RES.data);
      }).catch(function (error) {
        console.error(error);
        res.status(500).json({Operation : false})
      });
    } 
    catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
})

 module.exports = router;