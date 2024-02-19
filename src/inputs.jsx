import { useState } from "react"

function Input(){
    let [content,setContent] = useState("");
    let [tasks, setTask] = useState([]);
    function handleChange(event){
        setContent(c=>event.target.value)
    }
    function addTask(){
        if(content!==""){
            setTask(f=>[...f, content]);
            setContent("")
        }
        
    }
    function deleteTask(index){
        setTask(tasks.filter((_,i)=>i!==index))
    } 
    function moveUp(index){
        if(index!==0){
            const copy = tasks.map(el=>el)
            const temp = copy[index-1];
            copy[index-1] = copy[index]; 
            copy[index] = temp;
            setTask([...copy])
        }
    }
    function moveDown(index){
        if(index!==tasks.length-1){
            const copy = tasks.map(el=>el)
            const temp = copy[index+1];
            copy[index+1] = copy[index]; 
            copy[index] = temp;
            setTask([...copy])
        }
    }
    return(
        
        <div className="listContainer">
            <h1>To Do List</h1>
            <div className="inputContainer">
                <input value={content} id="input" type="text" placeholder="Type your task" onChange={handleChange}/>
                <button className="addBtn" onClick={addTask}>Add</button>
                
            </div>  
            <ol>
                {tasks.map((element,index)=>
                    <li key={index}>
                        <span className="liblock">{element}</span>
                        <button className="deleteBtn" onClick={()=>deleteTask(index)}>Delete</button>
                        <button className="upDown" onClick={()=>moveUp(index)}>👆</button>
                        <button className="upDown" onClick={()=>moveDown(index)}>👇</button>
                    </li>
        
                )}
            </ol>  
        </div>
        
    ) 
}
export default Input