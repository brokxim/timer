import React, { useRef } from 'react';
import {BsCheckCircleFill,BsThreeDotsVertical} from "react-icons/bs";
import { FaPlusCircle,FaCheckCircle } from "react-icons/fa";
import { AiFillCaretDown,AiFillCaretUp } from "react-icons/ai";
import {HiLockClosed} from 'react-icons/hi';
// import "./Navigation.scss";
import "./Tasks.scss"
import EditTask from './editTask';
import TaskHead from './TaskHead';

    function Tasks({item,editTask,setTit,task,index,isTop,deleteTask,newTask,addTask,num,setNum,handleChange ,val,handleDecrement,value,area,handleAdd,onNote,setOn}) {
      const refDiv=React.useRef();
      const [isEdit,setIsEdit]= React.useState(false)
      const[editT,setEditT]=React.useState({})
      const whenEdit=()=>{
      setEditT(item)
      setIsEdit(true); 
      onNote();
   };
const handleDelete=(id) => {
  deleteTask(id)
  setIsEdit(false);
}
   
const[note,setNote]= React.useState(false)
const oN=()=>{
  setNote(true);
}

 const[count,setCount]= React.useState(item.num);
   
   const incR=( )=>{ setCount(num=>num+1)}
   const decR=()=>{if(count>0) {setCount(num=>num-1)}}
   const onSubmit = (e)=>{
  e.preventDefault();
  let text1 = e.target[0].value;
  setNum(e.target[1].value);
  let newnum = e.target[1].value
  let text2= e.target[2].value;
  editTask(item,text1,newnum,text2);
  setIsEdit(false);
  
}
 React.useEffect(() => {
    const handleClickOutside = event => {
      if (  isEdit && refDiv.current && !refDiv.current.contains(event.target)) {
        setIsEdit(false);
        onNote();
        setNote(false); 
}};
  document.addEventListener("mousedown", handleClickOutside);  
  }, [isEdit]);  
const[isCheck,setIsCheck]= React.useState(false);
const onCheck=(item)=>{

  console.log(item)

  setIsCheck(!isCheck);};

const leftRef=useRef();
const[isLeft,setIsLeft]=React.useState(false);
const[state,setState]=React.useState(1);

React.useEffect(() => {
  const handleClick = event => {
    if (  isLeft && leftRef.current &&  !leftRef.current.contains(event.target)) {
      setIsLeft(false)
}};
document.addEventListener("mousedown", handleClick);  
}, [isLeft]);

const titleSelect=(i)=>{
  
  setTit(i.text1);
  setState();
  setState(i.id);
  setIsLeft(true);
  console.log(i.id);
  console.log('buuu',state);
}
return(
    <>
{isEdit  && <div  className={`modal-wrap-task`}>
  <div ref={refDiv} className={` add-modal ${item.text2 ? 'modaltop': 'modaltop-other'} ${item.text2 || note? 'modalbottom': 'modal-top'}`}>
   <form id='form' onSubmit={onSubmit}>
    <div className='modal_header'> 
     <div className='mb-3'> 
       <input id="input1" type="text" defaultValue={item.text1}   placeholder="What are you working on?"  />
     </div>
      <div className='mb-2'><b>Est Pomodoros</b></div>
      <div className="w d-flex align-items-center">
       <div className="in_dev">
         <input type="number"  id="input2" value={count}  onChange={ (e)=> setCount(Number(e.currentTarget.value) )} />
       </div>
        <div className="d-flex">
         <span className="cursor-pointer" onClick={incR}> <AiFillCaretUp className="up"/> </span>
         <span className="cursor-pointer" onClick={decR}><AiFillCaretDown className="up"/> </span>
        </div>
      </div>
      { item.text2 || note ? <div>
       <textarea className="textarea" defaultValue={item.text2} placeholder='some...'/>
      </div>: null}
      <div className='note_div'>
        {note || item.text2 ? null:  <button onClick={()=>oN() } className="button-add">+ Add Note</button>}
        <button onClick={()=>setOn(true)} className="button-add">+ Add Project </button><HiLockClosed className="close_btn"/>
      </div>
    </div>
  </form>
  <div className="modal_footer">
      <button onClick={()=>handleDelete( item.id)} className='delete-task'>Delete</button>
      <button>Cancel</button>
      <button type="submit" form='form' className={`save_btn ${(count) ? 'active_btn': ''} `}>Save</button>
  </div>
  </div> 
   <div className='modal_end m-0'></div>
 </div>}

  <div className={`task ${isEdit ? 'invisible ':''} ${note ? 'mt-5 mb-1 pt-4':''}`}>
          <div ref={leftRef} id='myBtn' className={`add-new-task ${isLeft ? 'border-dark':''}`} onClick={() =>titleSelect(item)}>
              <div className='add-new-task_item'>
                <div><BsCheckCircleFill className={`task-check ${isCheck ? 'text-danger':''}`} onClick={()=>onCheck(item)}/></div>
                <div className={`${isCheck ? 'text-decoration-line-through':''}`}>{item.text1}</div>
                <div className='task-num'><span>0/<span className='num'>{item.num}</span> 
                </span>
                 <span className='threedot_wrap'><button onClick={()=>whenEdit()}><BsThreeDotsVertical className='threedot'/></button></span>
                </div>
              </div>
             {item.text2 &&  <div className='task-item'>
                <div className='some'>{item.text2}</div>
              </div>}
          </div>
        </div>
      
      
    </>
    )
  }
  
  export default Tasks
  
  