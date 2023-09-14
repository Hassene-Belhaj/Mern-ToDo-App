import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
height: 100vh;
padding-top: 10rem;
background-color: #f3f5f9;
display: flex;
flex-direction: column;
align-items: center;
`

const TodoContainer = styled.div`
width: 800px;
height: auto;
background-color: #fff;
box-shadow: 1px 1px 2px rgba(0,0,0,0.2);
margin-bottom: 5rem;
`

const Title = styled.h2`
text-align: center;
padding: 2rem 0;
font-size: 2.5rem;
`

const ID = styled.div`
width: 60%;
display: flex;
justify-content: space-between;
margin: 2rem auto;
`

const TaskID = styled.p`
font-size: 1.2rem;
`

const Label = styled.label`
font-size: 1.5rem;
`

const Input = styled.input`
width: 80%;
height: 100%;
padding: 1rem;
font-size: 1.2rem;
background-color: #f3f5f9;
border: 2px solid rgba(0,0,0,0.2);
border-radius: 5px;
outline: none;
transition: all 0.4s ease-in-out;
&:focus{
    border: 2px solid indigo;
}
`

const Form = styled.form`
width: 60%;
height: 2.5rem;
display: flex;
justify-content: space-between;
align-items: center;
margin: 2rem auto;

`

const Completed = styled.div`
width: 60%;
margin: auto;
`


const CheckBox = styled.input`
margin-left: 2rem;
accent-color: indigo;
cursor: pointer;
`

const Button = styled.button`
display: flex;
justify-content: center;
width: ${({width})=> width};
margin: 2rem auto;
padding: 1rem 0;
border-radius: 5px;
background-color: ${({color})=>color};
color: #fff;
border: 1px solid indigo;
cursor:pointer;
transition: all 0.2s ease-in-out;
&:hover{
    opacity : 0.9 ;
}
`
const Message = styled.h4`
margin: 2rem auto;
text-align: center;
color: green;
transition: all 0.2s ease-in-out;
`

const EditTodo = ({data , input , setInput , updateTodo , completed , setCompleted}) => {

     const [toggle , setToggle] = useState(false)
     const [checkBox , setCheckBox] = useState(false)
     const [msg , setMsg] = useState(false)
    
    const navigate = useNavigate()
    const {id}= useParams()
    const FindTodo = data.find((item)=>item._id === id)
    
useEffect(()=>{
setInput(FindTodo?.name)
setCheckBox(false)
},[])    

const handleClick = () => {
setInput('')
navigate('/')
}

const handleSubmit = (id) => {
 if(input !== FindTodo?.name || checkBox === true)  {
   setTimeout(() =>{setToggle(false) }, 3000)
   setToggle(true)
   updateTodo(id)
} else {
    setTimeout(() => {setMsg(false) }, 3000)
    setMsg(true)
}
}

const handleChange = () => {
setCheckBox(true)
if(FindTodo.completed === false) {
    setCompleted(true)
} else {
    setCompleted(false)
}
}
// console.log(FindTodo?.completed);

  return (
    <Container>
        <TodoContainer>
            <Title>Edit Task</Title>
            <ID>
               <Label>Task ID</Label>
               <TaskID>{id}</TaskID>
            </ID>
            <Form onSubmit={e=>e.preventDefault()}>
                <Label>Name </Label>
                    <Input type='text' value={input} onChange={e=>setInput(e.target.value)} autoCorrect='off' autoComplete='off' onFocus={()=>setToggle(false)}/>
            </Form>
            <Completed>
                <Label>Completed </Label>
                 <CheckBox type='checkbox' value={completed} onChange={e=>handleChange()}></CheckBox>
            </Completed>
         
             <Button onClick={()=>handleSubmit(id)} width={'60%'} color='indigo'>Edit</Button> 
             <Message style={{display : toggle || msg ? 'block' : 'none'}}>{toggle ? 'Edit successfull' : 'Please Edit Task Before Submit !' }</Message>
        </TodoContainer>

            
             <Button onClick={handleClick}  width={'15%'} color='#000'>Back To Tasks</Button> 
            
    </Container>
  )
}

export default EditTodo