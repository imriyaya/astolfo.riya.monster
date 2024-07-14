import * as fs from "node:fs";

export namespace Astolfo {
    const baseDir = "./astolfo";
    const migrateDir = "./migrate"

    if (!fs.existsSync(baseDir)) {
        fs.mkdirSync(baseDir);
    }

    if (!fs.existsSync(migrateDir)) {
        fs.mkdirSync(migrateDir);
    }
}