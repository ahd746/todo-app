const express = require('express');
const path = require('path');
const connectDB = require('./db');
const cors = require('cors')
const router = require('./router');

connectDB();

const app = express();
//Middlewares
app.use(cors())
app.use(express.json());
app.use('/api', router);
app.use(express.static('client/build'));
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))

//Set the port and listen 
PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));