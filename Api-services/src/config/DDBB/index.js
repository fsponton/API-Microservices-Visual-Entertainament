const axios = require("axios")

module.exports = {
    create: async (form) => {
        return await axios({
            method: "post",
            url: `http://localhost:8000/${model}`,
            headers: { Authorization: `Bearer ${token}` },
            data: form,
        })
    },
    list: async (token, model) => {
        return await axios({
            method: "get",
            url: `http://localhost:8000/${model}`,
            headers: { Authorization: `Bearer ${token}` }
        })
    },
    byId: async (token, model, id) => {
        return await axios({
            method: "get",
            url: `http://localhost:8000/${model}:${id}`,
            headers: { Authorization: `Bearer ${token}` }
        })
    },
    sortedList: async (token, model) => {
        return await axios({
            method: "get",
            url: `http://localhost:8000/${model}`,
            headers: { Authorization: `Bearer ${token}` }
        })
    }
}


