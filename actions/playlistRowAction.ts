export const INCREASE_ROW = "INCREASE_ROW"
export const DECREASE_ROW = "DECREASE_ROW"

export interface IncreaseRowAction {
  type: typeof INCREASE_ROW
  payload: String
}

export interface DecreaseRowAction {
  type: typeof DECREASE_ROW
  payload: String
}


export type PlayListRowTypes = IncreaseRowAction | DecreaseRowAction