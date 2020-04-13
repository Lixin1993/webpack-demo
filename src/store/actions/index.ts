import {
  INCREMENT, INCREMENT_TYPE, DECREMENT, DECREMENT_TYPE,
} from '../const'

export interface IINCREMENTAction {
  type: INCREMENT_TYPE;
}

export interface IDECREMENTAction {
  type: DECREMENT_TYPE;
}

export type ModifyAction = INCREMENT_TYPE | DECREMENT_TYPE;

export const increment = (): IINCREMENTAction => ({
  type: INCREMENT,
})

export const decrement = (): IDECREMENTAction => ({
  type: DECREMENT,
})
