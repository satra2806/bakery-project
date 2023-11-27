const mongoose = require('mongoose')
const Counter = require('../models/Counters')
const orderSchema = new mongoose.Schema({
    id: Number,
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

orderSchema.pre('save', async  function(next) {
    const doc = this
    if(this.isNew){
        try {
            const counter = await Counter.findByIdAndUpdate('orders', { $inc: { seq: 1 } }, { new: true, upsert: true });

            if (!counter) {
                throw new Error("Counter not found or created");
            }

            this.id = counter.seq;
            next();
        } catch (error) {
            return next(error)
        }
    } else {
        next()
    }
})

orderSchema.pre('save', function(next) {

    this.lastUpdateTime = Date.now()
    next()
})

module.exports = mongoose.model('Order', orderSchema)