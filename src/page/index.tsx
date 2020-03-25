import React, { useState } from 'react'
import 'assets/style/index'

interface IProps {
  initCount: number;
}

const Count = (props: IProps) => {
  const { initCount } = props
  const [count, setCount] = useState(initCount)
  return (
    <div className="count">
      <img src={require('../assets/image/timg.jpeg')} alt="图片" />
      <p>{count}</p>
      <input
        type="button"
        value="count++"
        onClick={() => setCount(count + 1)}
      />
      <input
        type="button"
        value="count--"
        onClick={() => setCount(count - 1)}
      />
    </div>
  )
}

export default Count
