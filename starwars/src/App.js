import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import CharacterCard from "./components/Character";
import styled from "styled-components";

const Wrapper = styled.div`
width: 80%;
margin: auto;
display: flex;

flex-wrap: wrap;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [character, setCharacter] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  useEffect(() => {
     axios.get("https://swapi.py4e.com/api/people/")
      .then(response => {
        setCharacter(response.data.results); 
      })
      .catch(error => {
        console.log("Uh oh something went wrong.", error);
      });
    }, []);
  
    console.log(character)


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Wrapper>
      {character.map(character => {
        return <CharacterCard key={character.id} character={character} />
      })};
      </Wrapper>
    </div>
  );
}

export default App;
