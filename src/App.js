import React, { useState, useEffect } from 'react';

import {
  Form,
  Input,
  Label,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText
} from 'reactstrap'

import logo from './logo.svg';
import './App.css';

function App() {
  const [title, setTitle] = useState("Otra cosa")
  const [bitcoinValues, setBitcoinValues] = useState({})

  const changeHandler = event => {
    let value = event.target.value
    setTitle(value)
  }

  useEffect(() => {
    fetch("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR,MXN,AUD,CNY,KRW")
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setBitcoinValues(json)
      })
  }, [])

  return (
    <div className="App">
      <Container >
        <Row>
          <Col xs="12">
            <h3 className="py-3">Costo del bitcoin en diferentes monedas:</h3>
            <Row>
              {
                Object.keys(bitcoinValues).map(key => {
                  return (
                    <Col xs="6">
                      <Card className="mb-3 bg-dark text-white shadow border rounded mb-3">
                        <CardBody>
                          <CardText>
                            <p>BTC - {key}</p>
                            <p><b>{bitcoinValues[key]}</b></p>
                          </CardText>
                        </CardBody>
                      </Card>
                    </Col>
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
