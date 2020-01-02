const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  rating: [
    {
      userName: {
        type: String,
        required: true
      },
      score: {
        type: Number,
        required: true
      },
      review: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Restaurant = mongoose.model('restaurant', RestaurantSchema);
