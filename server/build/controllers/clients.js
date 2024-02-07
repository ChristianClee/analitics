import { User } from "../db/mongoDB.js";
class Analitic {
    constructor() { }
    testServer(req, res) {
        try {
            const ip = req.ip;
            res.json(ip).status(200);
        }
        catch (e) {
            console.log("error in Analitic.testServer ", e);
        }
    }
    async newClient(req, res) {
        try {
            const ip = String(req.ip);
            const date = GenerateData.getDatew();
            const newUser = new User({ ip, date });
            await newUser.save();
            res.json("sucsess response").status(200);
        }
        catch (e) {
            console.log("error in Analitic.newClient", e);
            res.json("").status(400);
        }
    }
    async getAllClients(req, res) {
        this.deleteClient(req);
        try {
            const data = await User.find({});
            res.json(data).send("ok").status(200);
        }
        catch (e) {
            console.log("error in Analitic.getAllClients", e);
        }
    }
    async deleteClient(req) {
        try {
            const ip = String(req.ip);
            await User.deleteMany({ ip });
        }
        catch (e) {
            console.log("error in Analitic.deleteClient", e);
        }
    }
}
class GenerateData {
    static getDatew() {
        const dataNow = new Date();
        const year = dataNow.getFullYear();
        const month = dataNow.getMonth();
        const day = dataNow.getDate();
        const hour = dataNow.getHours();
        const minuet = dataNow.getMinutes();
        const sec = dataNow.getSeconds();
        return {
            year,
            month,
            day,
            hour,
            minuet,
            sec,
        };
    }
}
export const analitic = new Analitic();
