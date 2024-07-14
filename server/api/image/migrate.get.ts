import {dHash} from "~/server/astolfo/dhash";

export default defineEventHandler(() => {
    const hash = dHash("./astolfo/53.png");

    return hash;
})