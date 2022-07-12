import { useRef } from 'react'

// const apiKey = 'ea92314d'

function App () {
  /*   Reglas de los hooks
        1. Se deben ejecutar en la cabecera (lógica) de un componente
        2. Hooks no se pueden cargar como Js
        3. No se pueden cargar en condicionales, ni ciclos
   */
  const searchRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(searchRef.current.value)
  }

  return (
    <section className='container'>
      <h4 className='text-center'>Buscador de peliculas</h4>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <input
            ref={searchRef}
            type='search'
            placeholder='Nombre de la pelicula...'
            className='form-control'
          />
          <button className='btn btn-primary'>Buscar</button>
        </div>
      </form>
    </section>
  )
}

export default App
