import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Container, ListGroup, Col } from 'react-bootstrap';  

export default class FetchingJokeCategories extends React.Component {
    state = {
      loading: true,
      people: null,
    };

async componentDidMount() {
   
const url = "https://localhost:7176/SwapiPeople";
const response = await fetch(url);
const data = await response.json(); 
const peoplelist = data.map((item) => <p>{item.name}</p>)  
this.setState({people: peoplelist, loading: false})    
}


render() {
    if (this.state.loading) {
        return <div>Please wait loading...</div>;
      }
  
      if (!this.state.people) {
        return <div>didn't get a joke category</div>;
    }
    return (
        <div>
            
        <Container className='p-4'>  
        <Col md={3}>  
        <ListGroup>
        <ListGroup.Item> 
         {this.state.people}
         </ListGroup.Item>      
         </ListGroup>
         </Col>  
        </Container> 
        </div>
      );
    }
  }