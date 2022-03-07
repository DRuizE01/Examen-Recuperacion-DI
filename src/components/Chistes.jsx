import React from 'react';
import { Table } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

class Chistes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectItem: null,
      datoschistes: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(
      'https://v2.jokeapi.dev/joke/Any?lang=es&type=twopart&amount=3'
    );
    const responseData = await response.json();

    this.setState({ datoschistes: responseData.jokes });
  }
  render() {
    return (
      <div className="">
        <h1>Chistes</h1>

        {this.state.datoschistes.map((item) => {
          return (
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h3>{item.setup}</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <h5>{item.delivery}</h5>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })}
      </div>
    );
  }
}
export default Chistes;
