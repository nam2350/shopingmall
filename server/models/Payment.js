const mongoose = require('mongoose');
const Schema = mongoose.Schema

const paymentSchema = mongoose.Schema({
    user:{
        type: Array,
        defalut: []
    },
    data: {
        type: Array,
        default: []
    },
    product: {
        type: Array,
        default: []
    }
})



const Payment = mongoose.model('Payment', paymentSchema);

module.exports = { Payment }