import { pokemonIds } from './bases/02-objects'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola Vite + TypeScript !!!</h1>
    <p>Pokemon ID: ${pokemonIds[0]}</p>
  </div>
`

