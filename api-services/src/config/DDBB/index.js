const axios = require("axios")

module.exports = {
    create: async (token, model, form) => {
        return await axios({
            method: "post",
            url: `http://database:8010/${model}`,
            headers: { Authorization: `Bearer ${token}` },
            data: form,
        })
    },
    getList: async (token, model) => {
        return await axios({
            method: "get",
            url: `http://database:8010/${model}`,
            headers: { Authorization: `Bearer ${token}` }
        })
    },
    getById: async (token, model, id) => {
        return await axios({
            method: "get",
            url: `http://database:8010/${model}/${id}`,
            headers: { Authorization: `Bearer ${token}` }
        })
    },
    sortedList: async (token, model, prop, shape) => {
        return await axios({
            method: "get",
            url: `http://database:8010/${model}/sort?prop=${prop}&shape=${shape}`,
            headers: { Authorization: `Bearer ${token}` }
        })
    }
}


