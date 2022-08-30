import React from 'react'
import "./App.css";
// import axios from 'axios'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import FetchingJokeCategories from "./components/FetchingJokeCategories";
import FetchingPeople from "./components/FetchPeople";
import SearchJokesPeople from "./components/SearchJokesPeople";
import FetchingJokes from "./components/FetchingJokes";


function App()  {
  
  
  
    
    return (
      <>
            <BrowserRouter>
                <div style={{
                    display: "flex",
                    background: 'black',
                    padding: '5px 0 5px 5px',
                    fontSize: '20px'
                }}>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/FetchingJokeCategories" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Joke Categories
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/FetchingPeople" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                             People List
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/SearchJokesPeople" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Search Jokes & People
                        </NavLink>
                  </div>
                  <div style={{ margin: '10px' }}>
                        <NavLink to="/FetchingJokes" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            
                        </NavLink>
                    </div>
                </div>
                <Routes>
                    <Route exact path="/FetchingJokeCategories" element={<FetchingJokeCategories />} />
                    <Route exact path="/FetchingPeople" element={<FetchingPeople />} />
                   <Route exact path="/SearchJokesPeople" element={<SearchJokesPeople />} />
                   <Route exact path="/FetchingJokes" element={<FetchingJokes />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
  
export default App;