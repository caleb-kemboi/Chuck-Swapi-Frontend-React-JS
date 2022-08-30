import React, { useState } from 'react';
import axios from 'axios';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';

function SearchApp() {
    const [searchText, setSearchText] = useState("");
    const [allData, setAllData] = useState([]);
    const [categoryData, setCategoryData] = useState({});
    const [peopleData, setPeopleData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData)


    React.useEffect(() => {
        axios(`https://localhost:7176/Search?query=${setSearchText}`).
            then(res => {
                console.log(res.data)
                setAllData(res.data);
                setFilteredData(res.data);
            })
            .catch(error => {
                console.log(error)
            })
    }, []);
    

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log(result);
        result = allData.filter((data) => {
            return data.value.search(value) != -1;
           
        });
        setFilteredData(result);
    }


    const styles = {
        display:'inline',
        width:'30%',
        height:50,
        float:'left',
        padding:5,
        border:'0.5px solid black',
        marginBottom:10,
        marginRight:10
    }
    
    return (
        <div className='App'>
            <div className="container">
                <h1></h1>
                <MDBInput label='' placeholder='Search' id='typeText' type='text' onChange={e => handleSearch(e)} /> <br></br>
                <MDBBtn onClick={e => handleSearch(e)}>Search Joke / Person</MDBBtn>
            </div>
            <div>
                <h1>People & Jokes Searched</h1>
                 <div>
              {/* { filteredData.map((value,index)=>{
                  return(
                    <div style={styles} key={value.id}>
                    {value.value}
                    </div>
                   )
                 })} */}
                    
                 </div> 
            </div>
              </div>

              );
              }

export default SearchApp;