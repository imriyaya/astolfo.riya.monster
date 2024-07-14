import {database} from "~/server/db";

export default defineEventHandler(async event => {
    return {
        documents: await database.collection("image").countDocuments()
    }
});