/* eslint-disable */
import logo from './logo.svg';
import React, {useState} from 'react';
import { Navbar, Container, Nav,Carousel, NavDropdown, Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js';

function App() {
  
  let [shoesName, setShoesName] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Myeong's Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='carousel-title'>First slide label</h3>
            <p className='carousel-content'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://codingapple1.github.io/shop/shoes2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className='carousel-title'>Second slide label</h3>
            <p  className='carousel-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://codingapple1.github.io/shop/shoes3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className='carousel-title'>Third slide label</h3>
            <p  className='carousel-content'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className='empty-bg-gray'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="" width="100%"/>
            <h4>{ shoesName[0].title }</h4>
            <p>{ shoesName[0].content }</p>
            <p>￦{shoesName[0].price}</p>
          </div>
          <div className='col-md-4'>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" alt="" width="100%"/>
            <h4>{ shoesName[1].title }</h4>
            <p>{ shoesName[1].content }</p>
            <p>￦{shoesName[1].price}</p>
          </div>
          <div className='col-md-4'>
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" alt="" width="100%"/>
            <h4>{ shoesName[2].title }</h4>
            <p>{ shoesName[2].content }</p>
            <p>￦{shoesName[2].price}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
