import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container
} from 'reactstrap';
import API from '../utils/API';

class Create extends Component {
  state = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.name &&
      this.state.address &&
      this.state.city &&
      this.state.state &&
      this.state.zip
    ) {
      API.saveRestaurant({
        name: this.state.name,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip
      })
        .then(() => this.props.history.push('/'))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for='name'>Name</Label>
                <Input
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Restaurant Name'
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for='address'>address</Label>
            <Input
              value={this.state.address}
              onChange={this.handleInputChange}
              type='text'
              name='address'
              id='address'
              placeholder='1234 Main St'
            />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for='city'>City</Label>
                <Input
                  value={this.state.city}
                  onChange={this.handleInputChange}
                  type='text'
                  name='city'
                  id='city'
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for='state'>State</Label>
                <Input
                  value={this.state.state}
                  onChange={this.handleInputChange}
                  type='text'
                  name='state'
                  id='state'
                  placeholder='TX'
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for='zip'>Zip</Label>
                <Input
                  value={this.state.zip}
                  onChange={this.handleInputChange}
                  type='text'
                  name='zip'
                  id='zip'
                />
              </FormGroup>
            </Col>
          </Row>
          <Button onClick={this.handleFormSubmit}>Submit</Button>
        </Form>
      </Container>
    );
  }
}
export default Create;
