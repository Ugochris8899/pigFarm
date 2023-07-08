const mongoose = require("mongoose");

const pigSchema = new mongoose.Schema( 
    {
    breed: {
        type: String,
        required: true
    },
    
    colour: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    isMatured: {
        type: Boolean,
        required: true
    },
    isSold: {
        type: Boolean,
        default: false
    },
   
}
)

const pigFarm = mongoose.model("pigFarming", pigSchema);


module.exports = pigFarm