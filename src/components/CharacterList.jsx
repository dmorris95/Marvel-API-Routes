//import { useState, useEffect } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [isRetrieving, setRetrieving] = useState(false);
    const navigate = useNavigate();

    const fetchCharacters = async () => {
        try {
            //Set your own timetamp, apikey and hash
            const ts = '1';
            const apikey = '';
            const hash = '';
    
            const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=25`);
            setRetrieving(false);
            setCharacters(response.data.data.results);
        } catch (error) {
            console.log('Error fetching products', error);
        }
    };

    useEffect(() => {
        setRetrieving(true);
        fetchCharacters();
    }, []);

    if (isRetrieving) return <p className="retrieving">Retrieving Character Information...</p>

    return (
        <div className="character-list">
            <h3>Marvel Characters</h3>
            
            <div className="grid-container">
                {characters.map(character => (
                    <div key={character.id} onClick={() => navigate(`/character-details/${character.id}`)}>
                        <img src={character.thumbnail.path+'.'+character.thumbnail.extension} />
                        <p>{character.name}</p>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default CharacterList