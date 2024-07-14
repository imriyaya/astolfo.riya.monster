import fs from "node:fs";

export default defineEventHandler((event) => {
    const name = getRouterParam(event, 'name');

    if (!name) {
        this
    }

    const image = fs.readFileSync("./astolfo/" + name);

    event.res.setHeader("Content-Type", "image/" + name.split("."));
    return image;
})