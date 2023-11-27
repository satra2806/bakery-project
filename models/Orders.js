const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    itemType:{  // : Cake, Cookies, Muffins
        type: String, 
        required: true
    },
    orderState:{ //  Created, Shipped, Delivered, Canceled
        type: String,
        required: true
    },
    lastUpdateTime:{ //  Date
        type: Date,
        // required: true
    },
    branchId:{ // 1, 2, 3
        type: Number,
        required: true
    },
    customerId:{ // 1, 2, 3
        type: Number,
        required: true
    },
    price:{ 
        type: Number,
        required: true
    },
})

orderSchema.pre('save', function(next) {
    this.lastUpdateTime = Date.now()
    next()
})

module.exports = mongoose.model('Order', orderSchema)