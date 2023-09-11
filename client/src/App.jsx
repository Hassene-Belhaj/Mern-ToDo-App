import React from 'react'
import { Global } from './GlobalStyle'
import Todo from './Components/Todo'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import EditTodo from './Components/EditTodo'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data , setData] = useState([])
  const [input , setInput] = useState('')
  const [completed , setCompleted] = useState(false)

const BASE_URL = "http://127.0.0.1:5174/api/todolist"   

  const FetchData = async () => {
    try {
    const res = await axios.get(BASE_URL + '/all' , {
        method : "GET" 
    })    
    setData(res.data.data.todos)
    } catch (error) {
     console.log(error);    
    }
    }
    
    const addTodo = async () => {
    try {
      const res  =  await axios.post(BASE_URL + '/post' , {
      method : "POST" , 
      name : input,
      completed : completed
    }) 
    } catch (error) {
      console.log(error);
    }
    }
    
    
    const DeleteTodo = async (id) => {
      try {
         const res = await axios.delete(BASE_URL + '/delete/' + id , {
        method : "DELETE",
       })  
      } catch (error) {
        console.log(error);
      }
     
      
    }
    
    const updateTodo = async (id) => {
      try {
        const res = await axios.patch(BASE_URL + '/update/' + id , {
        method : "PATCH" ,
        name : input ,
        completed : completed
        
      })
      } catch (error) {
        console.log(error);
      }
  
    }
    

    
    useEffect(()=>{
    FetchData()
    },[data])



  return (
    <Router>
    <Global />  
     <Routes>
      <Route path='/' element={<Todo data={data} setData={setData} input={input} setInput={setInput} completed={completed} setCompleted={setCompleted} addTodo={addTodo} DeleteTodo={DeleteTodo} />}     />
      <Route path='/edittodo/:id' element={<EditTodo data={data} setData={setData} input={input} setInput={setInput} completed={completed} setCompleted={setCompleted} addTodo={addTodo} DeleteTodo={DeleteTodo} updateTodo={updateTodo} />} />
     </Routes>
    </Router>
  )
}

export default App