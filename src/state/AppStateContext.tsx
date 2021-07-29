import { createContext, useContext } from "react"
import { useImmerReducer } from "use-immer"
import { appStateReducer, AppState } from "./appStateReducer"
import { Action } from "./actions"
import { withInitialState } from "../utils/withInitialState"
import { IAnswer } from "../types/Answer"
import { IQuestion } from "../types/Question"
  
type AppStateContextProps = {
  questions: IQuestion[],
  answers: IAnswer[],
  answer: IAnswer,
  dispatch: React.Dispatch<Action>
}

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
)

type AppStateProviderProps = {
  children: React.ReactNode
  initialState: AppState
}

export const AppStateProvider = withInitialState<AppStateProviderProps>(
  ({ children, initialState }) => {
    const [state, dispatch] = useImmerReducer(
      appStateReducer,
      initialState
    )

    const { answer, answers, questions } = state

    return (
      <AppStateContext.Provider value={{ answer, answers, questions, dispatch }}>
        {children}
      </AppStateContext.Provider>
    )
  }
)

export const useAppState = () => {
  return useContext(AppStateContext)
}
