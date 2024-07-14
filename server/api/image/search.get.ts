import {database} from "~/server/db";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    if (!query.dhash) {
        throw createError({
            status: 400,
            message: "Invalid arguments"
        })
    }

    const dhash = query.dhash.toString();

    if (dhash.length !== 64 || dhash.replaceAll("0", "").replaceAll("1", "").length !== 0) {
        throw createError({
            status: 400,
            message: "Invalid arguments"
        })
    }

    const maxDistance = query.max_distance ? +query.max_distance.toString() : 64;

    const result = database.collection("image").aggregate([
        {
            $addFields: {
                hamming_distance: {
                    $function: {
                        body: "function (dhash) {const target = \"" + dhash + "\"; let distance = 0;for (let i = 0;i < dhash.length;i++) {if (dhash.charAt(i) !== target.charAt(i)) {distance++;}} return distance;}",
                        args: ["$dhash"],
                        lang: "js"
                    }
                }
            }
        },
        {
            $match: {hamming_distance: {$lte: maxDistance}}
        },
        {
            $sort: {hamming_distance: 1}
        }
    ])

    return await result.toArray();
})