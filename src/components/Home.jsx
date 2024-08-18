import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../assets/JS/pizzas.js'

const Home = () => {
  return (
    <Container>
      <Row>
        {pizzas.map((pizza, index) => (
          <Col key={pizza.id} sm={12} md={6} lg={4} className="mb-4">
            <CardPizza
              name={pizza.name}
              desc={pizza.desc}
              img={pizza.img}
              ingredients={pizza.ingredients}
              price={pizza.price}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;