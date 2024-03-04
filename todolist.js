"use client"
import { Input } from "postcss";
import React,{useState} from "react";
const page = () => {
const [title,settitle] = useState("")
const [desc,setdesc] = useState("")
const [maintask,setMainTask] = useState([])
const submitHanler = (e)=>{
  e.preventDefault()
  setMainTask([...maintask,{title,desc}]);
  settitle("")
  setdesc("")
  console.log(maintask);
}
const deleteHandler  = (i) =>{
    let copyTask = [...maintask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
}
let renderTask = <h2>No task available</h2>;
  if (maintask.length > 0) {
    renderTask = maintask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-8">
        <div className="flex items-center justify-between mb-5 w-2/3">
          <h3 className="text-2xl font-semibold">{t.title}</h3>
          <p className="text-xl font-semibold">{t.desc}</p>
        </div>
        <button
        onClick={() => {
          deleteHandler(i)
        }}
         className="bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
        </li>
      );
      
    });
  }
  return(
   <>
   <h1 className="bg-black text-white text-4xl p-5 font-bold text-center">Todo List</h1>
   <form onSubmit={submitHanler}>
    <input type="text" className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
    placeholder="Enter Title"
    value={title}
    onChange={(e)=>{
      settitle(e.target.value)
    }}/>
     <input type="text" className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
    placeholder="Enter Desciption"
    value={desc}
    onChange={(e)=>{
      setdesc(e.target.value)
    }}
    />
    <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5">Add task</button> 
   </form>
   <hr/>
   <div className="p-8 bg-slate-200">
    <ul>
      {renderTask}
    </ul>
   </div>
   </>
  )
}
export default page