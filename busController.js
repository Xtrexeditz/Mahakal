
const Bus = require('../models/Bus');

exports.getBuses = async (req, res) => {
  const buses = await Bus.find();
  res.json(buses);
};

exports.addBus = async (req, res) => {
  const { name, price, image } = req.body;
  const newBus = new Bus({ name, price, image });
  await newBus.save();
  res.json(newBus);
};
