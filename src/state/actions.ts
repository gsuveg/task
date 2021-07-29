import { IQuestion } from "../types/Question"
import { IAnswer } from "../types/Answer";

export type Action =
  | { 
      type: "ADD_ANSWER"; 
      payload: IAnswer 
    }
  | {
      type: "ADD_LIST"
      payload: IQuestion
    }
  
export const addAnswer = (
  text: string,
  id: number,
): Action => ({
  type: "ADD_ANSWER",
  payload: {
    text,
    id
  }
})

export const addList = (
  text: IQuestion,
): Action => ({
  type: "ADD_LIST",
  payload: text
})
