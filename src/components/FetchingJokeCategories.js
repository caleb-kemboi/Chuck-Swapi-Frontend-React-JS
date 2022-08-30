
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,ListGroup, Col} from 'react-bootstrap';  
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

export default class FetchingJokeCategories extends React.Component {
    state = {
      loading: true,
      jokecategory: null,
      
    };

async componentDidMount() {
   
const url = "https://localhost:7176/ChuckCategories";
const response = await fetch(url);
const data = await response.json(); 
const categorylist = data.map((item) => <p>{item}</p>)
this.setState({jokecategory: categorylist, loading: false})    
}


render() {
    if (this.state.loading) {
        return <div>Please Wait loading...</div>;
      }
  
      if (!this.state.jokecategory) {
        return <div>didn't get a joke category</div>;
    }
    return (
        <div>
        <Container className='p-4'>  
        <Col md={3}>  
        <ListGroup>
        <ListGroup.Item> 
          
                
        <Link to="/FetchingJokes">
      {this.state.jokecategory}
          </Link>
            
           </ListGroup.Item>      
            </ListGroup>
            </Col>  
          </Container>  
        </div>
      );
    }
  }





