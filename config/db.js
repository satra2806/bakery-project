const mongoose = require('mongoose')
const Counter = require('../models/Counters')
mongoose.connect(process.env.MONGO_URI )
 .then(async () => {
    console.log('DATABASE CONNECTED')
    try {
      // Using await to handle the promise returned by findById
      let counter = await Counter.findById('orders');
  
      if (!counter) {
        // Using await to handle the promise returned by create
        await Counter.create({ _id: 'orders', seq: 0 });
      }
    } catch (err) {
      console.error('Error initializing counter:', err);
    }
})
 .catch(err => {
  console.log('DATABASE CONNECTION ERROR', err)
  process.exit(1)
})