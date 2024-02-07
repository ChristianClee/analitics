import express from 'express';
import { analitic } from "../controllers/clients.js";
export const router = express.Router();
router.get("/newClient", (req, res) => { analitic.newClient(req, res); });
router.get("/allClients", (req, res) => { analitic.getAllClients(req, res); });
router.get("/testServer", (req, res) => { analitic.testServer(req, res); });
