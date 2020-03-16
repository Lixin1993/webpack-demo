import React, { useState } from 'react'
import './index.scss'

interface IProps {
  initCount: number,
}

const Count = (props: IProps) => {
  const [count, setCount] = useState(0)
  const { initCount = 0 } = props
  return (
    <div>
      <p>{props.initCount}</p>
      <p>{count}</p>
      <input type="button" value="count++" onClick={() => setCount(count+1)} />
      <input type="button" value="count--" onClick={() => setCount(count-1)} />
    </div>
  )
}

export default Count