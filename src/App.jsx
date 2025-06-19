import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Sample React Project</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero odio quas aut, similique, enim mollitia provident placeat iure rem tempora temporibus eius earum aspernatur facere dolore quia possimus voluptatibus velit, illum sint veritatis neque officiis! Illo nam autem ullam, ea enim fuga dolorum ab minima! </p>
    </div>
    </>
  )
}

export default App
