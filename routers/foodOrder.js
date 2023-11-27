const router = require('express').Router();
const Order = require('../models/Orders');

router.get('/order/:id', async (req, res) => {
    try {
      const order = await Order.find({id:req.params.id});
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

router.get('/order', async (req, res) => {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}
);

router.post('/order', async (req, res) => {
    const order = new Order(req.body);
    console.log(order , "satra")
    try {
      const savedOrder = await order.save();
      res.status(201).json(savedOrder); 
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
});

module.exports = router;