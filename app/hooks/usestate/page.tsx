"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const Usestate = () => {
    const [count, setCount] = useState(1)


    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    const reset = () => {
        setCount(0)
    }
  return (
    <div className='flex justify-center items-center mt-20 gap-4'>
      <Button onClick={decrement}>-</Button>
      <span>{count}</span>
      <Button onClick={increment}>+</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  )
}

export default Usestate
