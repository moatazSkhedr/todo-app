import React , {useState} from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import db from './firebase';
import { Modal } from '@mui/material';
import { style } from '@mui/system';
import Input from '@mui/material/Input';



export default function Todo(props) {

  const [open , setOpen] = useState(false);
  const [input , setInput] = useState('');
  const handelOpne = ()=>{
    setOpen(true);
  }
  const handleClose = ()=>{
    setOpen(false);
  }
  const UpdateTodo = ()=>{
    db.collection("todos").doc(props.todo.id).set({
      todo:input
      
    }, {merge:true})
    setOpen(false);

  }
  
  return (

    <Center>
    <Modal className ="model"
    open={open}
    onClose={e=>setOpen(false)}
    >
      <Body className='body'>
        <h1>Edit</h1>
        <Input value={input} onChange={e=>setInput(e.target.value)} placeholder={props.todo.todo} />
        <Button className='btn' onClick={UpdateTodo}>Update</Button>
      </Body>
    </Modal>
 
    
    <List className='list'>
<ListItem>
    <ListItemAvatar>
    </ListItemAvatar>
    <ListItemText primary={props.todo.todo} secondary ="Todo" />
</ListItem>
<Button onClick={e => setOpen(true)}>Update </Button>

<Button onClick={e =>db.collection("todos").doc(props.todo.id).delete() }><DeleteForeverIcon > </DeleteForeverIcon>  ✘</Button>

</List>
</ Center> 

    

    
  )
}

const Body = styled.div`
  width:800px;
  background-color:white;
  display:flex;
  flex-direction:column;
  padding:50px;
  align-items:center;
  justify-content:center;
  margin-left:20%;
  margin-top:10%;
`
const Center = styled.div`
  .body{
    
  }
`