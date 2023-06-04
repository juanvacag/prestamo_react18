import { useState } from 'react'
import Header from "./components/Header"
import Button from "./components/Button"

function App() {
  const [cantidad, setCantidad] = useState(10000);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  function handleChange(e) {
    setCantidad(+e.target.value)
  }

  function handleClickDecremento() {
    const valor = cantidad - STEP;

    if(valor < MIN) {
      alert('Cantidad no valida');
      return;
    }
    setCantidad(valor);
  }

  function handleClickIncremento() {
    const valor = cantidad + STEP;

    if(valor > MAX) {
      alert('Cantidad no valida');
      return;
    }
    setCantidad(valor);
  }

  return (
<div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
    <Header />

    <div className='flex justify-between my-6'>
        
        <Button 
        operador='-'
        fn={handleClickDecremento}
        />

        <Button 
        operador='+'
        fn={handleClickIncremento}
        />
    </div>

    <input 
    type='range' 
    className="w-full bg-gray-200 accent-green-500 hover:accent-green-600"
    onChange={handleChange}
    min={MIN}
    max={MAX}
    step={STEP}
    value={cantidad}
    />
    <div className='flex justify-between my-14'>
        
    </div>

    <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>{cantidad}</p>
</div>
  )
}

export default App
