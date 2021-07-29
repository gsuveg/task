import { Action } from "./actions"
import { IAnswer } from "../types/Answer"
import { IQuestion } from "../types/Question"


export type AppState = {
  answers: IAnswer[],
  answer: IAnswer,
  questions: IQuestion[]
}

export const appStateReducer = (
  draft: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case "ADD_LIST": {
      const {     
        id 
      } = action.payload
      draft.questions.push({
        id: id
      })
      break
    }
    case "ADD_ANSWER": {
      const { text, id } = action.payload

      draft.answers.push({
        id: id,
        text: text
      })
      
      draft.answer = {
        id: id,
        text: text
      }
      break
    }
    default: {
      break
    }
  }
}
