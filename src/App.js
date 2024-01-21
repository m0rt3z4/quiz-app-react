import { useSelector } from 'react-redux'

import TestLayot from './Components/TestLayot'
import GridTable from './Components/GridTable'
import { RouterProvider } from 'react-router'
import './App.css'
import { router } from './router/router'

function App() {
  let component = <TestLayot />

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
