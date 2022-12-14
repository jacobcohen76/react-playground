import { useState } from 'react'
import styles from 'styles.module.css'

const Counter = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  return (
    <button onClick={increment}>{count}</button>
  )
}

export default Counter
