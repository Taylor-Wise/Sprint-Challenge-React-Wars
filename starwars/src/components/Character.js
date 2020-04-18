// Write your Character component here
import React from "react";
import styled from "styled-components";
import { CardHeader, CardBody, CardText} from 'reactstrap';



const Card = styled.div`
border: 4px ridge orange;
color: black;
width: 200px;
max-height: 300px;
display: flex;
margin: 2%;
flex-direction: column;
align-items: center;
background: rgb(179, 179, 179, 0.5);
`;

const CharacterCard = ({character}) => {
    
    return (
        <Card>
        <CardHeader tag="h3">{character.name}</CardHeader>
        <CardBody>
          <CardText>Gender: {character.gender}</CardText>
          <CardText>Skin Color: {character.skin_color}</CardText>
          <CardText>Height: {character.height}</CardText>
          <CardText>Hair Color: {character.hair_color}</CardText>
          <CardText>Eye Color: {character.eye_color}</CardText>
          <CardText>Mass: {character.mass}</CardText>
        </CardBody>
        </Card>
    );
}

export default CharacterCard;