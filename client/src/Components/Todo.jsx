import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AiOutlineEdit ,AiOutlineCheckCircle } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Title = styled.h2`
font-size: 2.5rem;
font-weight: 400;
padding-top: 1.5rem;
text-align: center;
`


const Container = styled.div`
width: 100%;
height: 100%;
padding: 5rem 0;
display: flex;
flex-direction: column;
align-items: center;
`

const TodoContainer = styled.div`
width: 800px;
height: 200px;
background-color: #fff;
box-shadow: 1px 1px 2px rgba(0,0,0,0.2);
margin-bottom: 5rem;
`

const Form = styled.form`
display: flex;
width: 60%;
height: 3rem;
margin: auto;
margin-top: 2rem;
`

const Input = styled.input`
width: 80%;
padding: .5rem;
background-color: #f3f5f9;
font-size: 1.2rem;
border: 2px solid rgba(0,0,0,0.2);
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
outline: none;
transition: all 0.3s ease-in-out;
&:focus{
    border: 2px solid indigo;
}
`

const Button = styled.button`
width: 20%;
background-color: indigo;
color: #fff;
border: 1px solid indigo;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
cursor: pointer;
transition: all 0.2s ease-in-out;
&:hover{
    opacity: 0.9;
}
`

const TodoDiv = styled.div`
width: 800px;
height: auto;
background-color: #fff;
border-bottom: 1px solid rgba(0,0,0,0.2);

`
const TodoText = styled.h3`
text-decoration: ${({$completed})=> $completed ? "line-through" : ""};
text-decoration-thickness: 3px;
`

const EditIcon = styled(AiOutlineEdit)`
cursor:pointer;
`

const DeleteIcon = styled(BsTrash)`
margin-left: 1rem;
cursor:pointer;
`

const TodoDivFlex = styled.div`
width: 80%;
height: 4rem;
display: flex;
justify-content: space-between;
align-items: center;
margin: auto;
text-transform: capitalize;
`
const IconsFlex = styled.div``

const CompletedIcon = styled(AiOutlineCheckCircle)`
margin-right: 1rem;
color: ${({$bgc})=>$bgc ? 'green' : 'red'};
`
const TodoLeft = styled.div`
display: flex;
justify-content: center;
`

const Todo = ({data,input,setInput,addTodo,DeleteTodo}) => {
  const condition = input.length
  return (
    <>
    <Container>
      <TodoContainer>
        <Title>Task Manager</Title>
        <Form onSubmit={e=>e.preventDefault()}>
           <Input value={input} onChange={e=>setInput(e.target.value)}   placeholder='What do you want to add ?' />
           <Button onClick={addTodo}>Submit</Button>
        </Form>
      </TodoContainer>
           {data.map(({_id,name,completed})=>{
               return (
                <TodoDiv key={_id}>
                    
                    <TodoDivFlex>

                        <TodoLeft>
                            <CompletedIcon $bgc={completed} size={20}/> 
                            <TodoText $completed={completed} autoCorrect='off' autoCapitalize='off'> {name}</TodoText>
                        </TodoLeft>

                        <IconsFlex>
                            <Link to={`/edittodo/${_id}`}>
                            <EditIcon size={20} color='green'/>
                            </Link>
                            <DeleteIcon onClick={()=>DeleteTodo(_id)} size={20} color='indigo' />
                        </IconsFlex>    
                    </TodoDivFlex>
                </TodoDiv>
                   )
           })}
             
  

    </Container>

    
    </>
  )
}

export default Todo