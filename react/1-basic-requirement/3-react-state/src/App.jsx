import React from 'react'

const App = () => {

  const [count, setCount] = React.useState(0); // React Hook
  
  const handleIncrement = () => {
    setCount(count + 1);
  }

    const handleDecrement = () => {
    setCount(count - 1);
  }


  return (
    <div className='p-10'>
      <h1 className="text-9xl font-bold">{count}</h1>
      <button onClick={handleDecrement} className='border px-4 py-2 bg-black text-white'>Decrement</button>
      <button onClick={handleIncrement} className='border px-4 py-2 bg-black text-white'>Increment</button>
    </div>
  )
}

export default App