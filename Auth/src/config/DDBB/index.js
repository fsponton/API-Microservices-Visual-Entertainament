const axios = require("axios")

module.exports = {
    register: async (form) => {
        return await axios({
            method: "post",
            url: "http://localhost:8000/User/register",
            data: form,
        })
    }


}


