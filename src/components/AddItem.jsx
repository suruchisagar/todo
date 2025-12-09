import { useState } from "react";

function AddItem(){


    let [visi, setvisi]= useState(false);

    function isVisible(){
        setvisi(!visi)
    }

    let [todos, setTodos] = useState([]);

    //state to store the text from input
    let [text, setText] = useState("");
    // console.log(todos);

    function AddToList(){
        if (text.trim() === "") return;
        setTodos([...todos,{title:text}]);
        setText("");
    }

    
    function toggleCheck(index){
      const updated=[...todos];
      updated[index].status=!updated[index].status;
      setTodos(updated);
    }

    function deleteTodo(index){
        const updated=[...todos];
        updated.splice(index,1);
        setTodos(updated);
    }
    
    



    return(
        <div className="min-h-screen bg-amber-200">
            <div className="flex justify-center text-4xl font-bold">My Todo List</div>
            <br/>
            <button onClick={isVisible} className="px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg shadow-md transition duration-200">Add Item</button>
            <br/>
            <br/>
            {
            visi===true?
            <div className="space-x-4">
            <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text" className="border-2 "/>
            <button onClick={AddToList} className="border-2">ADD</button>
            </div>

            :<div></div>
            }
            <br/>
            {
                
                todos.map((item,index)=>(
                    <Child status={item.status} title={item.title} index={index} toggleCheck={toggleCheck} deleteTodo={deleteTodo}/>
                ))

                
            }
        </div>
    )
}

export default AddItem;

function Child({status, title, index, toggleCheck, deleteTodo}){

    return(
        <div>
            <div className="space-x-9">
                    <input type="checkbox" onChange={()=>toggleCheck(index)}/>
                        <span className={`${status ? "line-through" : ""}`}>
                            {title}  
                        </span>
                    
            <button className="border-2" onClick={()=>deleteTodo(index)}>DELETE</button>
            
            </div>
            
        </div>
    )
}