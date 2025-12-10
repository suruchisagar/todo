import { useState } from "react";
import bgImg from "../assets/bg-image.jpg";


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
        setTodos([...todos,{id: Date.now(), title:text}]);
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
        <div className="flex flex-col items-center justify-start min-h-screen bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})` }}>
            <div>
                 <div className="flex justify-center text-4xl font-bold">My Todo List</div>
            <br/>
            <button onClick={isVisible} className="w-full max-w-xl mx-auto flex items-center justify-center gap-2 
             py-3 rounded-2xl border border-dashed border-gray-300 
             text-gray-700 font-medium bg-white shadow-sm
             hover:shadow-md hover:bg-gray-50 transition px-50">+ Add New Task</button>
            <br/>
            <br/>
            {
            visi===true?
            <div className="flex items-center gap-4 ">
            <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="What needs to be done?" className="w-full px-6 py-3 border-2 border-slate-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500"/>
            <button onClick={AddToList}  className="w-full py-3 bg-gradient-to-r from-slate-600 to-blue-200  text-white font-semibold rounded-xl shadow hover:opacity-90 transition">ADD</button>
            </div>

            :<div></div>
            }
            <br/>
            <div className="space-y-4">
                {
                
                todos.map((item,index)=>(
                    <Child key={item.id} status={item.status} title={item.title} index={index} toggleCheck={toggleCheck} deleteTodo={deleteTodo}/>
                ))

                
            }
            </div>
            </div>
           
        </div>
    )
}

export default AddItem;

function Child({status, title, index, toggleCheck, deleteTodo, id}){

    let [hover, setHover] = useState(false);

    function onHover(){
        setHover(true);
    }

    function onMouseLeft(){
        setHover(false);
    }

    return(
        <div className="flex items-center justify-center w-full" >
            <div className="flex items-center justify-between bg-white w-full p-2 rounded-xl shadow-lg" onMouseEnter={()=>onHover()} onMouseLeave={() => onMouseLeft()}>
                    <div className="flex items-center gap-3 px-4 py-3 w-full rounded-xl">
                        <input type="checkbox" className="w-5 h-5 rounded-full accent-slate-500" onChange={()=>toggleCheck(index)}/>
                        <span className={`${status ? "line-through" : ""}`}>
                            {title}  
                        </span>
                    </div>

            {
            hover && <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-200 
                               text-white font-semibold rounded-xl shadow hover:opacity-90 transition" onClick={()=>deleteTodo(index)}>DELETE</button>
            
            }
            </div>
            
        </div>
    )
}