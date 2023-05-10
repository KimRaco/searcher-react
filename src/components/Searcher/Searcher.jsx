
import React from 'react'
import { useState } from 'react'
const API_URL = "https://rickandmortyapi.com/api/character/"

const Searcher = () => {
    const [search, setSearch] = useState('');
    const [characters, setCharacters] = useState([]);

    const handleText = (e) => {
        setSearch(e.target.value.toLowerCase());
       
      };

      const searchCharacter = async () => {
        
        const resp = await fetch(`${API_URL}?name=${search}`);
        const data = await resp.json();
        
        setCharacters(data.results)
    
        
      };

  return (
    <>
        <div className='d-flex'>

            <input
            className="border-2 border-black/20 w-full p-1 px-6 form-control"
            value={search}
            onChange={handleText}
            
            />
            <button
                className="btn btn-dark "
                onClick={searchCharacter}
            
            >
                Search
            </button>
        </div>

        <div className="d-flex container h-100 w-100">
            <div className='row justify-content-center'>
                {
                    characters.map(char => 
                        <React.Fragment key={ char.id } >
                            <div className="card col-3 m-3 ">
                                <img className='card-img-top' src={char?.image} />
                                <p className='card-title'>{char?.name}</p>
                                
                            </div>
                        </React.Fragment>
                    )
                }
            </div>
          
       
      </div>
    
    </>
  )
}

export default Searcher