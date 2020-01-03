import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Media } from 'reactstrap';
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
                    <a href={'/api/restaurant'}>{restaurant.name}</a>
                  </Media>
                  {/*{restaurant.rating} <br />*/}
                  {restaurant.address}
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
