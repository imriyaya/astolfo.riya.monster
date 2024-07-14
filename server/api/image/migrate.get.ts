import fs from "node:fs";
import {randomUUID} from "node:crypto";
import {dHash} from "~/server/image/dhash";
import {database} from "~/server/db";

let isProcessing: boolean = false;
let lastMigration = {};

const migrate = async () => {
    type Status = {
        filename: string,
        message: string
    };
    const successes: Status[] = [], errors: Status[] = [];

    const files = fs.readdirSync("./migrate");
    if (!files) return;

    const documents: {
        uuid: string,
        extension: string,
        dhash: string,
    }[] = [];

    for (const file of files) {
        try {
            if (!(file.endsWith(".png") || file.endsWith(".jpg"))) {
                errors.push({
                    filename: file,
                    message: "Non supported file format"
                })
                continue;
            }

            const uuid = randomUUID().toString();
            const fileSplit = file.split(".");
            const extension = fileSplit[fileSplit.length - 1];
            const hash = await dHash("./migrate/" + file);

            fs.renameSync("./migrate/" + file, "./astolfo/" + uuid + "." + extension);

            documents.push({
                uuid: uuid,
                extension: extension,
                dhash: hash
            });

            successes.push({
                filename: file,
                message: "Okay"
            })
        } catch (e) {
            errors.push({
                filename: file,
                message: "An error occurred during migrate"
            })
        }
    }

    if (documents.length != 0) await database.collection("image").insertMany(documents);

    lastMigration = {
        successes: successes,
        errors: errors
    };
    isProcessing = false;
}

export default defineEventHandler(async () => {
    if (isProcessing) return {status: "Processing..."};
    isProcessing = true;
    migrate();

    return {
        status: "Start process",
        lastMigration: lastMigration
    };
})