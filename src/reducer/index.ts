import { ModifyAction } from 'store/actions'
import { INCREMENT, DECREMENT } from 'store/const'

export default (state = 0, action: ModifyAction): number => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}
