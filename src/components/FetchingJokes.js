import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Container, ListGroup, Col } from 'react-bootstrap'; 
import axios from 'axios';

function App() {
  const [state, setState] = useState({
    joke:""
  })

  useEffect(() => {
   fetchData();
  }, []);

  const fetchData= async() => {
    const result = await axios.get('https://api.chucknorris.io/jokes/random');
    console.log(result.data.value);
    
    setState({ 
      ...state,
      joke: result.data.value
    });
   }

  return (
    <div className="App">
        
        <div>
          <h3>Random joke</h3>
          <Container className='p-4'>  
        <Col md={3}>  
        <ListGroup>
        <ListGroup.Item> 
        <p>{state.joke}</p>
        </ListGroup.Item>
        </ListGroup>
        </Col>  
        </Container>                
          </div>
        </div>
    
  );
}
export default App;