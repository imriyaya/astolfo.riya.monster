import {MongoClient} from "mongodb";
import dotenv from 'dotenv';

dotenv.config()

export const client = new MongoClient(process.env.DATABASE_URL as string);
export const database = client.db(process.env.DATABASE)