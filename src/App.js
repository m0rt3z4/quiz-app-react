import { useSelector } from 'react-redux'

import Settings from './Components/Settings'
import Question from './Components/Question'
import TestLayot from './Components/TestLayot'
import GridTable from './Components/GridTable'
import { RouterProvider } from 'react-router'
import './App.css'
import { router } from './router/router'

function App() {
  // const questions = useSelector((state) => state.questions)
  // const questionIndex = useSelector((state) => state.index)

  let component = <TestLayot />

  // if (questions.length && questionIndex + 1 <= questions.length) {
  //   component = <Question />
  // } else if (!questions.length) {
  //   component = <Settings />
  // } else {
  //   component = <FinalScreen />
  // }

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
