import { useState, useEffect } from 'react';

function RandomDogs() {
    const [dog, setdog] = useState(null);
    const [dogID, setdogID] = useState(1);

    const fetchDog = async () => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => {
                if (!res.ok) {
                    throw new Error('Dog not found');
                }
            return res.json();
        })
        .then(data => {
        setdog({
            image: data.message,
        });
        })
        .catch(err => {
            setdog(null);
        });
    };
        
    useEffect(() => {
        fetchDog();
    }, [dogID]);
  
    return (
        <div>
            <h1>Dog page</h1>
            <br></br>
            <button onClick={() => setdogID(dogID + 1)}>New Dog</button>
            <br></br>
            {dog ? (
                <img src={dog.image} alt="Random Dog" />
            ) : (
                <p>Error when acquiring dog</p>
            )}
            
        </div>
    );
}

export default RandomDogs;