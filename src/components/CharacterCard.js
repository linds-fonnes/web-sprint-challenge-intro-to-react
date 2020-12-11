import React from 'react'

export default function CharacterCard(props){
    const {people, name,height,mass,hair_color,skin_color,eye_color,birth_year,gender} = props;
    return (
        <div>
            <h2>{people.name}</h2>
            <p>{people.height}</p>
            <p>{people.mass}</p>
            <p>{people.hair_color}</p>
            <p>{people.skin_color}</p>
        </div>
    )
}