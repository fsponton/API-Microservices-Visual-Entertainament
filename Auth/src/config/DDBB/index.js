const axios = require("axios")

module.exports = {
    register: async (form) => {
        return await axios({
            method: "post",
            url: "http://localhost:8000/user/register",
            data: form,
        })
    },
    login: async (form) => {
        return await axios({
            method: "post",
            url: "http://localhost:8000/user/login",
            data: form,
        })
    }
}


