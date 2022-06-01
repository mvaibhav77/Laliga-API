
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

// app.get('/api', async (req,res)=>{
//     res.json({success : true} )
// })

// Set static folder
app.use(express.static('public'));


// Routes
app.use('/standings', require('./routes/standings'));
app.use('/matches', require('./routes/matches'));
app.use('/stats', require('./routes/stats'));
app.use('/teams', require('./routes/teams'));
app.use('/players', require('./routes/players'));



// Enable Cors
app.use(cors());

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))