import React,{useEffect, useState} from 'react'
import { Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios'

 const Character =props => {
    const [species, setSpecies] = useState('')
    const [home, setHome] = useState('')

    useEffect(() =>{
        axios.get(props.charSpecies)
        .then(res => {
            setSpecies(res.data.name)
        })
        .catch(err=> {console.log(err)})
    },[])

    useEffect(() =>{
        axios.get(props.charHomeWorld)
        .then(res => {
            setHome(res.data.name)
        })
        .catch(err=> {console.log(err)})
    },[])
    return(

    <Card>
        <Card.Content>
            <Card.Header>{props.charName}</Card.Header>
            <Card.Meta>Gender: {props.charGender}</Card.Meta>
            <Card.Meta>Height: {props.charHeight}</Card.Meta>
            <Card.Meta>Weight: {props.charWeight}</Card.Meta>
            
            <Card.Description>
            {props.charName} is a {species} and is from {home}
            </Card.Description>
        </Card.Content>
    </Card>
    )
 }

 export default Character