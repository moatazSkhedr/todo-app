
import './App.css';
import React , {useState , useEffect} from 'react';
import Todo from './Todo';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
// import FormHelperText from '@mui/material/FormHelperText';
import { FormControl } from '@mui/material';
import db from './firebase';
import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';


function App() {
  const [todos , setTodos] = useState([]);
  const [input ,setInput] = useState("");
  useEffect(() => {
    // return () => {};
    db.collection("todos").orderBy("timestamp","desc" ).onSnapshot(snap=>{
      setTodos(snap.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))
    })
    
  }, [])

  const addTodo  = (e) =>{
    e.preventDefault();
    db.collection("todos").add({
      todo : input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp(),
    })
    setTodos([...todos , input]);
    setInput("")
  }
  return (
    <div className="App">
      <h1>TODO APP !! </h1>
<form>
<FormControl>
  <InputLabel>Write a Todo</InputLabel>
  <Input value={input} onChange ={e => setInput(e.target.value)}  />
</FormControl>
<Button disabled ={!input} type='submit' onClick={addTodo} variant="outlined">Add Todo</Button> 
</form>


      <ul>
        {
          todos.map((item)=>{
            return <Todo todo={item} />
          })
        }

      </ul>
    </div>
  );
}

export default App;
// const Button = styled.button`
// ` link => https://todo-app-f3d20.web.app/