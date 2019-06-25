export const INCREASE_ROW = "INCREASE_ROW"
export const DECREASE_ROW = "DECREASE_ROW"

export interface increaseRowAction {
  type: typeof INCREASE_ROW
  payload: String
}

export interface decreaseRowAction {
  type: typeof DECREASE_ROW
  payload: String
}


export type PlayListRowTypes = increaseRowAction | decreaseRowAction