import {database} from "~/server/db";

export default defineEventHandler(async (event) => {
    return await database.stats();
})