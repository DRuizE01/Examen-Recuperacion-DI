import React from 'react';
import {Table} from  'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'

class Chistes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     selectItem: null,
     tableData:[]
    };
  }

  async componentDidMount(){
    const response =await fetch('https://v2.jokeapi.dev/joke/Any?lang=es&type=twopart&amount=3');
    const responseData = await response.json();
  
    this.setState({tableData : responseData.jokes,
    });
  }
 render(){
  return (
    <div className="">
    <h1>Chistes</h1>
    <Container>
      <Row>
        <Col lg={10} md={6}>
          <Table responsive striped>
            <thead>
              <tr>
                <th>Pregunta</th>
                <th>Respuesta</th>
                
              </tr>
            </thead>
            <tbody>
            


            {this.state.tableData.map((item) => {
                    return (
<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">


  <Accordion.Header>
    <td>{item.setup}</td>
  </Accordion.Header>
    <Accordion.Body>
      <td>{item.delivery}</td>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
                    )
                  })}


            
           </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  </div>
  );


 }
}
 export default Chistes;