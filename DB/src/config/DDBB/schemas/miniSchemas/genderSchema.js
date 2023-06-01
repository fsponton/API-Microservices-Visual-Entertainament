const { Schema } = require("mongoose")

const genderSchema = Schema({
    status: {
        type: String,
        enum: ['Female', 'Male', 'N/A']
    }
})


module.exports = genderSchema;