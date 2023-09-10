import React from 'react'
import { Global } from './GlobalStyle'
import Todo from './Components/Todo'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import EditTodo from './Components/EditTodo'

const App = () => {
  return (
    <Router>
    <Global />  
     <Routes>
      <Route path='/' element={<Todo />} />
      <Route path='/edittodo/:id' element={<EditTodo/>} />
     </Routes>
    </Router>
  )
}

export default App