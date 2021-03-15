const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const School = Schema({
    school_Name :{
        type: String,
        required: true
    },
    city :{
        type: String,
        required: true
    },
    ministry :{
        type: String,
        required: true
    },
    managerId :{
        type: ObjectID,
        required: true
    },
    PHONENUMBER :{
        type: Number,
        required: true
    },
    created_Date :{
        type: Date,
        required: true
    },
})
const Schoolmode = mongoose.model('School', School);
module.exports = Schoolmode;