import React, {useState, useEffect} from 'react';
import Character from './Character'
import { Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios'

export default function CardGallery() {
    const [characters, setCharacters] = useState([])
    
    useEffect(() =>{
        axios.get('https://swapi.co/api/people/')
         .then(res => {
            setCharacters(res.data.results)
         })
         .catch(err=> {console.log(err)})
    },[])
    return (
    <Card.Group>
        {characters.map(char =>(
           <Character 
           charName={char.name} 
           charGender={char.gender} 
           charHeight={char.height} 
           charWeight={char.mass} 
           charSpecies={char.species}
           charHomeWorld={char.homeworld}
           /> 
        ))}
        
    </Card.Group>

    )
}
 