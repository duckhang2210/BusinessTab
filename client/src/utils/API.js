import axios from 'axios';

export default {
  // Gets all restaurant
  getRestaurants: function() {
    return axios.get('/api/restaurant');
  },
  // Gets the restaurant with the given id
  getRestaurant: function(id) {
    return axios.get('/api/restaurant/' + id);
  },
  // Create a restaurant to the database
  saveRestaurant: function(restaurantData) {
    return axios.post('/api/restaurant', restaurantData);
  }
};
