import express from 'express';
import mongoose from 'mongoose';
import route from './routes/route.js'
import * as dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (err) => console.log("an error occured", err));
db.on('open', () => console.log("sucessfully connected to the database"));

app.use(cors());
app.use(express.json());
app.use('/product', route);

app.listen(process.env.DEV_PORT, (err) => {
    if (err) console.log(err)
    console.log('server running on port', process.env.DEV_PORT)
})

dotenv.config()
console.log(process.env.MONGO_URI)