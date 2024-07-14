import {database} from "~/server/db";
import fs from "node:fs";

export default defineEventHandler(async event => {
    const query = getQuery(event);

    const pipelines: {}[] = []

    if (query.count && +query.count >= 0) {
        pipelines.push({$sample: {size: +query.count.toString()}});
    } else {
        pipelines.push({$sample: {size: 1}});
    }

    if (query.nsfw) {
        if (query.nsfw === "true") {
            pipelines.push({$match: {nsfw: true}});
        } else {
            pipelines.push({$match: {nsfw: false}});
        }
    }

    const response = await database.collection("image").aggregate(pipelines).toArray();

    if (!response) {
        return {
            message: "No matches found"
        }
    }

    if (query.raw === '') {
        const image = fs.readFileSync("./astolfo/" + response[0].uuid + "." + response[0].extension);
        event.res.setHeader("Content-Type", "image/" + response[0].extension);
        return image;
    } else {
        return response;
    }
});