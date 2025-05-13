import './App.css'
import ProgressB from './components/progressB.jsx'
import Btn from './components/btn.jsx'
import { useState } from 'react'
import Imgs from './components/imgs.jsx'


function App() {
  const [barVie, setBarVie] = useState(100)

  return (
    <>
      <ProgressB barVie={barVie}/>
      <Imgs barVie={barVie}/>
      <Btn setBarVie={setBarVie} barVie={barVie}/>
    </>
  )
}

export default App
