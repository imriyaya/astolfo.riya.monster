export default defineEventHandler(async (event) => {
    const {dhash} = await readBody(dash);

    if (!dhash) {
        throw createError({
            status: 400,
            statusText: "Invalid arguments"
        })
    }
})