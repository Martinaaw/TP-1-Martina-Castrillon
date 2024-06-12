import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <header>
        <h1> Formulario de Registro </h1>
        <p>Ingresrar los siguientes datos para poder registrarse</p>
      </header>
      <section>
        <form className="formulario">
          <form action=""></form>
<div>
  <label for="Nombre"> Nombre </label>
  <input type="text" name="Nombre" id="Nombre"></input>
</div>
<div>
  <label for ="Apellido"> Apellido </label>
  <input type="text" name="Apellido" id="Apellido"></input>
</div>

<div>
  <label for ="Email"> Email </label>
  <input type="email" name="Email" id="Email"></input>
</div>

<div>
<label for ="Telefono"> Telefono </label>
  <input type="numero" name="Telefono" id="Telefono"></input>
</div>

<div>
<label for ="Contraseña"> Contraseña </label>
  <input type="text" name="Contraseña" id="Contraseña"></input>
</div>

<div>
<label for ="Confirmar Contraseña"> Confirmar Contraseña </label>
  <input type="text" name="Contraseña" id="Confirmar Contraseña"></input>
</div>

<h2>Terminos y condiciones</h2>
<button type= "submit"> Registrarse</button>
</form>
      </section>
      
    </>
  )
}

export default App
