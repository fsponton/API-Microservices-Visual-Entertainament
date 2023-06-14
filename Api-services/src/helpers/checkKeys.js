module.exports = (model) => {
    const keyConstant = {
        Actor: ["name", "gender", "birth_year"],
        Director: ["name", "birth_year"],
        Movie: ["title", "release", "language", "id_actors", "id_director", "genres"],
        TvShow: ["title", "release", "language", "seasons", "id_actors", "id_director", "genres"]
    }
    return keyConstant[model]
}