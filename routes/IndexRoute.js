import express from 'express'


import { home } from '../controllers/indexController.js';

const router = express.Router(); 


//------------- Routing Start -----------------------

router.route('/').get(home);

//------------- Routing End  -----------------------


export default router





















