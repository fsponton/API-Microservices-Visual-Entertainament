module.exports = (req) => {
    let arr = []
    if (req.name) {
        arr = req.name.split(" ")
    } else {
        console.log(req.title)
        arr = req.title.split(" ")
    }


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