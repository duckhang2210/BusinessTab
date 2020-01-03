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
        .isEmpty(),
      check('city', 'city is required')
        .not()
        .isEmpty(),
      check('state', 'state is required and must be 2 CAPITALIZED letters')
        .not()
        .isEmpty()
        .matches(/^[A-Z]{2}$/, 'i'),
      check('zip', 'zipcode is required and must be 5 numbers')
        .not()
        .isEmpty()
        .matches(/^[0-9]{5}$/, 'i')
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
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
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

// @route    GET api/restaurant/:id
// @desc     Get restaurant by ID
router.get('/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    // Check for ObjectId format and restaurant
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !restaurant) {
      return res.status(404).json({ msg: 'Restaurant not found' });
    }

    res.json(restaurant);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// @route    POST api/restaurant/rating/:id
// @desc     Rate a restaurant

router.post(
  '/rating/:id',

  [
    check('userName', 'Username is required')
      .not()
      .isEmpty(),
    check('score', 'Score is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const restaurant = await Restaurant.findById(req.params.id);

      const newRating = {
        score: req.body.score,
        userName: req.body.userName,
        review: req.body.review
      };

      restaurant.rating.unshift(newRating);

      await restaurant.save();

      res.json(restaurant.rating);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
