"use strict";
import { config } from "dotenv";
config();
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { router } from './routes/router.js'
import cors from 'cors'



const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
})



app.use(express.json())
app.use(cors());
// app.use('/', router ); 
app.use('/analitic', router);






const PORT = process.env.PORT;
const start = () => {
  try {    
    app.listen(PORT, () => {  
      console.log(`server started on ${PORT}`)
    })
  } catch (e) { 
    console.error('server error started', e) 
  }
} 

start()