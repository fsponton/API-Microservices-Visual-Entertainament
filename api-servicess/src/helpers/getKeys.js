module.exports = (model) => {
    const keyConstant = {
        actor: ["name", "gender", "birth_year"],
        director: ["name", "birth_year"],
        movie: ["title", "release", "language", "id_actors", "id_director", "genres"],
        tvshow: ["title", "release", "language", "seasons", "id_actors", "id_director", "genres"]
    }
    return keyConstant[model]
}