import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Media } from 'reactstrap';
import uuid from 'uuid';

class RestaurantList extends Component {
  state = {
    restaurants: [
      {
        id: uuid(),
        name: 'Coffee',
        rating: 5,
        address: '11111 Somestreet someCity someState',
        images: ''
      },
      {
        id: uuid(),
        name: 'Food',
        rating: 4,
        address: '22222 Somestreet someCity someState',
        images: ''
      },
      {
        id: uuid(),
        name: 'Drink',
        rating: 5,
        address: '33333 Somestreet someCity someState',
        images: ''
      }
    ]
  };

  render() {
    const { restaurants } = this.state;
    return (
      <Container>
        <ListGroup>
          {restaurants.map(({ id, name, rating, address, images }) => (
            <ListGroupItem key={id}>
              <Media>
                <Media left>
                  <Media object data-src='holder.js/64x64' alt='placeholder' />
                </Media>
                <Media body>
                  <Media heading>{name}</Media>
                  {rating} <br />
                  {address}
                </Media>
              </Media>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

export default RestaurantList;
