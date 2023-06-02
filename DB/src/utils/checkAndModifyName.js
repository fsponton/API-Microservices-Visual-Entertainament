module.exports = (req) => {
    const arr = req.name.split(" ")

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const name = arr.join(" ").trim()

    const keys = Object.keys(req)

    const nameOrTitle = keys.filter(function (prop) { return prop === "name" || prop === "title" })

    const result = {
        name,
        nameOrTitle: nameOrTitle[0]
    }

    return result
}