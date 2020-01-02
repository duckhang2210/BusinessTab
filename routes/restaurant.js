const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Restaurant = require('../models/Restaurant');

// @route    POST api/restaurant
// @desc     Create a restaurant
router.post(
  '/',
  [
    [
      check('name', 'Name is required')
        .not()
        .isEmpty(),
      check('address', 'Address is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newRestaurant = new Restaurant({
        name: req.body.name,
        address: req.body.address
      });

      const restaurant = await newRestaurant.save();

      res.json(restaurant);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/restaurant
// @desc     Get all restaurants
router.get('/', async (req, res) => {
  try {
    const restaurant = await Restaurant.find().sort({ date: -1 });
    res.json(restaurant);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
