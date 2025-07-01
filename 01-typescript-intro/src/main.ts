import './style.css'
import { name, age } from './bases/01-types.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola ${name} !!!</h1>
    <h2>Edad: ${age}</h2>
  </div>
`

