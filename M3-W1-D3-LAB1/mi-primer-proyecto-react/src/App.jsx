import './App.css'

function App() {

  return (
    <>
      <h1 className='name'>Sonia</h1>
      <h2 className='surnames'>Apellido1 Apellido2</h2>
      <div className='hobbies'>
        <h3>Mis aficiones:</h3>
        <ul>
          <li>Bailar</li>
          <li>Escuchar música</li>
          <li>Viajar</li>
        </ul>
      </div>
      <img src="https://wallpapers.com/images/high/traditional-japanese-art-1680-x-1050-w5z1flfa544hsl9n.webp" alt="Japan" width={200} />
      <p>Enlace a una web: <a href="https://www.google.com" target="_blank">Google</a></p>
    </>
  )
}

export default App
