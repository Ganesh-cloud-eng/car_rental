import express from "express";
import * as path from 'path';
import * as url from 'url';
import cookie from 'cookie-parser';

import dotenv from 'dotenv' 
import connection from './config.js'

import http from 'http';




import IndexRouter from './routes/IndexRoute.js';
import GaneshadminRouter from './routes/superadminRoute.js'


dotenv.config({path:"./config.env"});

//---------------Import Section Finish ----------------

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();
const server = http.createServer(app);

const port = 3078;

//----------------------  global  Middleware start ----------------
app.use(express.json({ limit: '50mb' })); 
app.use(express.urlencoded({limit: '50mb', extended: true })); 
app.use(express.static(path.join(__dirname,"public")));
app.use(cookie());


app.use("/",IndexRouter);
app.use("/superadmin",GaneshadminRouter)

//------------------   Middleware Section  End ---------------


//--------- View Engine for Express Framwork ------
app.set("view engine","ejs");

app.set("views", [
		path.join(__dirname,"./views"),
    path.join(__dirname,"./views/superadmin/")				
	]  );




server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
