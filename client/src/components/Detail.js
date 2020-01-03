import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import {
  ListGroup,
  ListGroupItem,
  Col,
  Row,
  Container,
  Jumbotron,
  ListGroupItemHeading,
  ListGroupItemText,
  Button
} from 'reactstrap';
import API from '../utils/API';

class Detail extends Component {
  state = {
    restaurant: { rating: [] }
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    this.loadRestaurant();
  }

  loadRestaurant = () => {
    API.getRestaurant(this.props.match.params.id)
      .then(res => this.setState({ restaurant: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size='md-12'>
            <Jumbotron>
              <h1>{this.state.restaurant.name}</h1>
              {(() => {
                switch (
                  Math.floor(
                    this.state.restaurant.rating.reduce((tot, arr) => {
                      return tot + arr.score;
                    }, 0) / this.state.restaurant.rating.length
                  )
                ) {
                  case 5:
                    return (
                      <StarRatings
                        rating={5}
                        starDimension='1rem'
                        starSpacing='0.1rem'
                        starRatedColor='red'
                      />
                    );
                  case 4:
                    return (
                      <StarRatings
                        rating={4}
                        starDimension='1rem'
                        starSpacing='0.1rem'
                        starRatedColor='red'
                      />
                    );
                  case 3:
                    return (
                      <StarRatings
                        rating={3}
                        starDimension='1rem'
                        starSpacing='0.1rem'
                        starRatedColor='red'
                      />
                    );
                  case 2:
                    return (
                      <StarRatings
                        rating={2}
                        starDimension='1rem'
                        starSpacing='0.1rem'
                        starRatedColor='red'
                      />
                    );
                  case 1:
                    return (
                      <StarRatings
                        rating={1}
                        starDimension='1rem'
                        starSpacing='0.1rem'
                        starRatedColor='red'
                      />
                    );
                  default:
                    return (
                      <StarRatings
                        rating={0}
                        starDimension='1rem'
                        starSpacing='0.1rem'
                        starRatedColor='red'
                      />
                    );
                }
              })()}
              {this.state.restaurant.rating.length} review
              <br />
              <br />
              <Link to={'/review/' + this.state.restaurant._id}>
                <Button color='danger' size='sm'>
                  Add Review
                </Button>
              </Link>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col size='md-6'>
            <h3>Reviews</h3>
            <ListGroup>
              {this.state.restaurant.rating.map(eachRating => (
                <ListGroupItem key={eachRating._id}>
                  <ListGroupItemHeading>
                    {eachRating.userName}
                  </ListGroupItemHeading>
                  <StarRatings
                    rating={eachRating.score}
                    starDimension='1rem'
                    starSpacing='0.1rem'
                    starRatedColor='red'
                  />
                  <ListGroupItemText>{eachRating.review}</ListGroupItemText>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col size='md-6'></Col>
        </Row>
        <Row>
          <Col size='md-2'>
            <Link to='/'>← Back</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
