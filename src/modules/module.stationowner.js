const mongoose = require('mongoose')

const { Schema } = mongoose

const StationOwnerSchema = new Schema({
    stationname: {
        type: String,
        required: true,
    },
    petrolarrivaltime: {
        type: String,
    },
    petrolfinishtime: {
        type: String,
        required: true,
    },
    dieselarrivaltime: {
        type: String,
        required: true,
    },
    diesellfinishtime: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const Stationowner = mongoose.model('Stationowner', StationOwnerSchema)

module.exports = Stationowner