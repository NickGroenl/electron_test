import viteLogo from '/vite.svg'
import './MainPage.css'
import reactLogo from '../assets/react.svg'
import electronLogo from "../assets/electron.svg"
import { useEffect, useState } from 'react'
import { getAllPokemons, getPokemonById } from '../hooks/api/hook'

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState<any>(null);
  const getData = async () => {
    const response = await getAllPokemons();
    setPokemons(response);
  }
  const getAndSelectPokemon = async (url: string) => {
    const response = await getPokemonById(url);
    if(response) setSelectedPokemon(response);
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <div className="App">
      
      <h1>Obtene los pokemon de la pokeapi 'Free version'</h1>
      <div className="card">
        <input placeholder='Buscar por Nombre'/>
      </div>
      {selectedPokemon !== null ? <div>
        <div style={{display: 'flex'}}>
          <p>Nombre: </p>
          <p style={{marginLeft: '1rem'}}>{String(selectedPokemon?.name).toLocaleUpperCase()}</p>
        </div>
        <div style={{display: 'flex'}}>
          <p>Altura: </p>
          <p style={{marginLeft: '1rem'}}>{String(selectedPokemon?.height).toLocaleUpperCase()}</p>
        </div>
        <div style={{display: 'flex'}}>
          <p>Peso: </p>
          <p style={{marginLeft: '1rem'}}>{String(selectedPokemon?.weight).toLocaleUpperCase()}</p>
        </div>
        <div style={{display: 'flex'}}>
          <p>Primer tipo: </p>
          <p style={{marginLeft: '1rem'}}>{String(selectedPokemon?.types[0]?.type?.name).toLocaleUpperCase()}</p>
        </div>
        <div style={{display: 'flex'}}>
          <p>Especie: </p>
          <p style={{marginLeft: '1rem'}}>{String(selectedPokemon?.species?.name).toLocaleUpperCase()}</p>
        </div>
        <div style={{display: 'flex'}}>
          <p>Experiencia Base: </p>
          <p style={{marginLeft: '1rem'}}>{String(selectedPokemon?.base_experience).toLocaleUpperCase()}</p>
        </div>
      </div> : <p>Selecciona un pokemon</p>}
      <div className="gridItems">
        {
          pokemons?.map((e: any, index: number) => <div onClick={() => getAndSelectPokemon(e?.url)}>{String(e?.name).toUpperCase()}</div>)
        }
      </div>
      
    </div>
  )
}