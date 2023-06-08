module.exports = (model) => {
    const keyConstant = (model) = {
        Actor: ["name", "email", "password"],
        Director: ["name", "email", "password"],
        Movie: ["name", "email", "password"],
        TvShow: ["name", "email", "password"]
    }


    return keyConstant[model]
}