import {useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const handlePlusClick = () => {
    setCount(count + 1)
  }

  const handleMinusClick = () => {
    setCount(count - 1)
  }


  return (
    <>

    <button onClick={handlePlusClick}>
      Ajouter 1
    </button>
    
    <button onClick={handleMinusClick}>
      Enlever 1
    </button>

    
    <span>{count}</span>
    
    </>
  );
}

export default Counter