import { RouterProvider } from 'react-router'
import './App.css'
import { router } from './router/router'

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
