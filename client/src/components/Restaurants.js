import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Media } from 'reactstrap';
import API from '../utils/API';

class Restaurants extends Component {
  state = {
    restaurants: []
  };

  componentDidMount() {
    this.loadRestaurants();
  }

  loadRestaurants = () => {
    API.getRestaurants()
      .then(res => this.setState({ restaurants: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <ListGroup>
          {this.state.restaurants.map(restaurant => (
            <ListGroupItem key={restaurant._id}>
              <Media>
                <Media left>
                  <Media object data-src='holder.js/64x64' alt='placeholder' />
                </Media>
                <Media body>
                  <Media heading>
                    <a href={'/restaurant/' + restaurant._id}>
                      {restaurant.name}
                    </a>
                  </Media>
                  {restaurant.address}&#44;&nbsp;{restaurant.city}&#44;&nbsp;
                  {restaurant.state}&nbsp;{restaurant.zip}
                </Media>
              </Media>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    );
  }
}
export default Restaurants;
