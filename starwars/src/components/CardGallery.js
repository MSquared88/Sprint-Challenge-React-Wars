import React, {useState, useEffect} from 'react';
import './App.css';
import Character from './Character'
import { Card } from 'semantic-ui-react'
import axios from 'axios'

export default function CardGallery() {
    useEffect(() =>{
        axios.get('https://swapi.co/api/people/')
         .then(res => {
            console.log(res)
         })
    },[])
    return (
    <Card.Group>
        <Character/>
    </Card.Group>

    )
}
 