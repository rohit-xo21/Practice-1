const express = require('express');
const connectDB = require('./config/db.js'); 

const app = express();

app.use(express.json());

app.use('/api/users', require('./routes/userRoute.js'));

app.get('/', (req,res) => {
    res.send('Hello World')
})
app.listen(8000, async () => {
    try {
        await connectDB();
        console.log('Listening to port 8000');
    } catch (error) {
        console.log("Server failed to start");
    }
});

console.log('My first API is working');