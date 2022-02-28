/* eslint-disable */
import logo from './logo.svg';
import React, {useState} from 'react';
import { Navbar, Container, Nav,Carousel, NavDropdown, Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Detail from './Detail.js';
import axios from 'axios';


import { Link, Route, Switch } from 'react-router-dom';

function App() {
  
  let [shoesName, setShoesName] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Myeong's Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/detail/0">Detail</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
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
              {
                shoesName.map( (data, i) => {
                  return (
                    <Card shoesName = {shoesName[i]} i={i} key={i}/>
                  )
                })
              }
            </div>
          </div>
          <button className="btn btn-primary" onClick={() => {
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result) => { 
              <div>안녕하세요</div>
            })
            .catch(() => { 
              console.log('실패')
            })
          }}>더보기</button>
        </Route>



        <Route path="/detail/:id">
          <Detail shoesName={shoesName} />
        </Route>

        <Route path="/:id">
          <div>아무거나 적었을 때 보여주셈</div>
        </Route>
      </Switch>

    </div>
  );
}



function Card(props) {
  return (
    <div className='col-md-4'>
      <img src={ "https://codingapple1.github.io/shop/shoes"+ (props.i + 1) + ".jpg" } width="100%"/>
      <h4>{ props.shoesName.title }</h4>
      <p>{ props.shoesName.content }</p>
      <p>￦{ props.shoesName.price }</p>
    </div>
  )
}

export default App;
