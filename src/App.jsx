import './App.css'
import { useContext } from 'react'
import Header from './components/Header'
import Gamecard from './components/Gamecard'
import Context from './context/Context'

function App() {
  const {data, platform, searchGame} = useContext(Context);

  return (
    <>
      <Header />
      <div className="cardContainer">
        {platform || searchGame !== false ? (
          data.results.map((game) => (
            <Gamecard
              key={game.id}
              name={game.name}
              image={game.background_image}
              score={game.metacritic}
              genres={game.genres}
              platforms={game.platforms}
              release={game.released}
            />
          ))
        ) : (
          <p>No platform selected.</p>
        )} 
      </div>
    </>
  )
}

export default App
