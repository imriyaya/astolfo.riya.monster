import fs from "node:fs";

export default defineEventHandler((event) => {
    const name = getRouterParam(event, 'name');

    if (!name) {
        throw createError({
            status: 400,
            message: "Invalid request"
        })
    }

    if (!(name.endsWith(".png") || name.endsWith(".jpg"))) {
        throw createError({
            status: 400,
            message: "Invalid request"
        })
    }

    if (!fs.existsSync("./astolfo/" + name)) {
        throw createError({
            status: 404,
            message: "Not found"
        })
    }

    const image = fs.readFileSync("./astolfo/" + name);

    return image;
})