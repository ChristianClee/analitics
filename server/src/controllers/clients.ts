import { Request, Response } from "express";
import { User } from "../db/mongoDB.js";
import mongoose, { Document } from "mongoose";


class Analitic {
  constructor() {}

  public testServer(req: Request, res: Response) {
    try {
      const ip = req.ip;
      res.json(ip).status(200);
    } catch (e) {
      console.log("error in Analitic.testServer ", e);
    }
  }

  public async newClient(req: Request, res: Response) {
    try {
      const ip: string = String(req.ip);
      const date: {} = GenerateData.getDatew();

      const newUser = new User({ ip, date });
      await newUser.save();

      res.json("sucsess response").status(200);
    } catch (e) {
      console.log("error in Analitic.newClient", e);
      res.json("").status(400);
    }
  }

  public async getSortedClient(req: Request, res: Response) {
    await this.deleteClient(req);
    await this.getAllClients(req, res);
  }

  public async getAllClients(req: Request, res: Response) {
    try {
      const data = await User.find({});
      res.json(data).status(200);
    } catch (e) {
      console.log("error in Analitic.getAllClients", e);
    }
  }

  private async deleteClient(req: Request) {
    try {
      const ip: string = String(req.ip);
      await User.deleteMany({ ip });
    } catch (e) {
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



export const analitic = new Analitic()