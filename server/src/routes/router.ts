import  express, {Router}  from 'express'
import { analitic } from "../controllers/clients.js";


export const router: Router = express.Router(); 
  
router.get("/newClient", (req, res) => { analitic.newClient(req, res) });
router.get("/getSortedClient", (req, res) => {analitic.getSortedClient(req, res);});
router.get("/allClients", (req, res) => { analitic.getAllClients(req, res) });
router.get("/testServer", (req, res) => { analitic.testServer(req, res) });
