import React, { useState } from 'react'
import 'assets/style/index'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from 'store/actions/index'

interface IProps {
  initCount: number;
}

const Count = (props: IProps) => {
  const dispatch = useDispatch()
  const { initCount } = props
  const [count, setCount] = useState(initCount)
  const storeCount = useSelector(state => state)
  return (
    <div>
      <img src={require('assets/image/timg.jpeg')} alt="图片" />
      <div className="count">
        <h3>state</h3>
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
      <div className="count">
        <h3>redux</h3>
        <p>{storeCount}</p>
        <input
          type="button"
          value="count++"
          onClick={() => dispatch(increment())}
        />
        <input
          type="button"
          value="count--"
          onClick={() => dispatch(decrement())}
        />
      </div>
    </div>
  )
}

export default Count
