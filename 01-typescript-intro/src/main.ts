import { charmander } from './bases/04-injection'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola Vite + TypeScript !!!</h1>
    <p>Pokemon ID: ${charmander.id}</p>
    <p>Pokemon Name: ${charmander.name}</p>
    <p>Pokemon Age: ${charmander.age}</p>
  </div>
`

