import React from 'react';
import { useAppState } from "./state/AppStateContext"

const App: React.FC<{}> = () => {

  const { answers, questions, dispatch } = useAppState()
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
