import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CharacterDetail = () => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [comics, setComics] = useState([]);
    const { id } = useParams();
    const [isRetrieving, setRetrieving] = useState(false);

    useEffect(() => {
        if (id) {
            setRetrieving(true);
            const fetchCharacterInfo = async () => {
                try {
                    //Set your own timetamp, apikey and hash
                    const ts = '1';
                    const apikey = '';
                    const hash = '';

                    const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`);
                    setName(response.data.data.results[0].name);
                    setDesc(response.data.data.results[0].description);
                    setComics(response.data.data.results[0].comics.items);
                    setRetrieving(false);

                } catch (error) {
                    console.log('Error fetching products', error);
                    setRetrieving(false);
                }
            };
            fetchCharacterInfo();
        }
    }, [id]);
    
    if (isRetrieving) return <p className="retrieving">Retrieving Character Information...</p>

    return (
        <div className="character-detail">
            {!id ? (
                <h3>Nothing Here Yet, Try selecting a character from the list first!</h3>
                ) : (
                <div>
                
                    <h2 className="name">{name}</h2>
                    <h3 className="h3-detail">Description</h3>
                    {desc === "" ? (
                        <p>This Character has no description on Marvel's site</p>
                    ) : (
                        <p>{desc}</p>
                    )}
                    <h3 className="h3-detail">Comics "{name}" Appears In</h3>
                    {!comics.length > 0 ? (
                        <p>This character is featured in no comics on Marvel's website.</p>
                    ) : (
                        <ul>
                            {comics.map((comic, index) => (
                                <li key={index}>{comic.name}</li>
                            ))}
                        </ul>
                    )}
                
            </div>
                )}
            
            
            
        </div>
    )
}

export default CharacterDetail