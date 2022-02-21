import React,{useState,useEffect,useRef} from 'react';
import {connect} from 'react-redux';
import {FiSettings } from "react-icons/fi";
import { RiBarChartBoxLine } from "react-icons/ri";
import {BsPersonCircle,BsCheckCircleFill,BsThreeDotsVertical} from "react-icons/bs";
import { FaPlusCircle,FaCheckCircle } from "react-icons/fa";
import { AiFillCaretDown,AiFillCaretUp } from "react-icons/ai";
import {HiLockClosed} from 'react-icons/hi';
import {Helmet} from "react-helmet";

import long from './img/dark.png';
import short from './img/short.png';
import red from './img/r.png';
import {editTimer,addedTask,editTask,deleteTask} from '../../redux/actions/action';
import "./Navigation.scss";
import Timer from '../Timer/Timer';
import Setting from '../Setting/Setting';
import SwitchModal from '../SwitchModal/Switch';
import Tasks from './Tasks';
import TaskHead from './TaskHead';

function Navigation({time,editTimer,editTask,task,addedTask,deleteTask}) {
  const links=[red,short,long];
  const [href,setHref]= useState(links[0]);

  const ref=useRef();
  const bgColor = ["#D95550","#4C9195","#457CA3"]; 
  const bgBorder = ["#C34C48","#448286","#3E6F92"]; 
  const [color,setColor] = useState(bgColor[0]);
  const [border,setBorder] = useState(bgBorder[0]);
  

  const [pomodoro,setPomodoro] = useState(time[0].defaultValue);
  const [shortBreak,setShortBreak] = useState(time[1].defaultValue);
  const [longBreak,setLongBreak] = useState( time[2].defaultValue);
  const [second,setSecond] = useState(0);
  const [stage,setStage] = useState(0);
  const [ticking,setTicking] = useState(false);

  const[openM,setOpenM]= useState(false);
  const toggle=()=>{setOpenM(!openM)}

  const [consumedSecond,setConsumedSecond] = useState(0);
  
  const [addTask,setAddTask] = useState(false);
  const [count,setCount]= useState(0);

  const[title,setTitle] = useState(false);

  const[area,setArea] = useState('');
  const[note,setNote] = useState(false);
  const onNote=()=>{
    setNote(note=>!note);
    setIsTop(true)
}

  const handleDecrement=()=>{
    if(num>0)
    setNum(num=>num-1) }

  const switchStage=(index)=>{
    setTitle(true);
    setColor([]);
    setBorder([]);
    setStage(index);
    setColor(bgColor[index]);
    setHref(links[index]);
    setBorder(bgBorder[index]);
  };
     const reset=()=>{
     setSecond(0);
     setTicking(false);
     setConsumedSecond(0)
}
   const getTickingTime=()=>{
     const timeStage = {
      0:pomodoro<10 ? ('0'+pomodoro):pomodoro,
      1:shortBreak<10 ? ('0'+shortBreak):shortBreak,
      2:longBreak<10 ? ('0'+longBreak):longBreak,
    }
   return timeStage[stage]; 
} 
const updateMinute=()=>{
   const updateStage = {
     0:setPomodoro,
     1:setShortBreak,
     2:setShortBreak
   }
 setConsumedSecond(consumedSecond=>consumedSecond+ 620/(time[stage].defaultValue*60));
   return updateStage[stage];
}
const clockTicking=()=>{
    const minutes=getTickingTime();
    const setMinutes=updateMinute();

   if (minutes===0 && second===0){
    reset();
  }
   else if (second===0){
     setMinutes((minute)=> minute-1)
     setSecond(59);
    }
    else{setSecond((second)=>second-1)}
 }
const handleAdd=()=>{
   setIsTop(false);
  setAddTask(true);
  setNote(false);
  if (window.scrollY <= 10) {
    window.scrollBy(0, 300);
    }
}
const[on,setOn]= useState(false);
const toggleM=()=>{
    setOn(p=>!p)
}

let[num,setNum] = useState(0);
let[name,setName]= useState( );

const onSubmit=(e)=>{
  e.preventDefault();
  let text1 = e.target[0].value;
    setNum(Number(e.target[1].value));
  let text2= e.target[2].value;
  
  let obj={id:task.length+1,text1,num,text2}
  addedTask(obj);
  setNum(0);
  setArea('');
  setName('');
} 

// const getP=(arr)=>arr.reduce((sum,item)=> Number(item.num)+sum,0);
//2-yo'li
const getAllNums=(arr)=>{
  let num = 0; 
  arr.forEach(e=>{
    num += parseInt(e.num)
  })
  return num;
}

const[tit,setTit]= React.useState()
  
  const [isEdit,setIsEdit]= React.useState(false)
  const dotsRef=React.useRef()
// const[isSubmit,setIsSubmit]=useState(false);
const onSetting=()=>{
  toggle() }
useEffect(()=>{
    if(ticking){
      const time = setInterval(()=>{
        clockTicking(); 

    },1000);

    return () => clearInterval(time);}
  },[second,ticking,consumedSecond,setConsumedSecond]);
 const [isTop,setIsTop]=useState(false);
  const d = new Date( );
  let minutes = d.getMinutes();
  let hours = d.getHours();
  console.log(getAllNums(task))

const taskTime=()=>{
  // d.setTime(d.getTime() + 65 * 60 * 1000);
new Date(d.getTime()+30*60000)

}
console.log(taskTime)
  useEffect(() => {
    const handleClickOutside = event => {
      if (  addTask && ref.current && !ref.current.contains(event.target)) {
        setAddTask(false);
        setNote(false);
        setIsTop(false);
 }
};
 document.addEventListener("mousedown", handleClickOutside);  
  },[addTask]);
  return (
    <div id="w" className="wrapper" style={{backgroundColor:`${color}`}}>
      <nav >
        <div className="nav-m">
           <div className="d-flex buttons"><FaCheckCircle className='check'/> <h1>Pomofocus</h1></div>
           <span className="d-flex">
                <button className="button-m"> <RiBarChartBoxLine className="btn-icon" />Report</button>
                <button className="button-m" onClick={onSetting}> <FiSettings  className="btn-icon"/>Setting</button>
                <button className="button-m" onClick={() => setOn(true)}> <BsPersonCircle  className="btn-icon"/>Login</button>
           </span>
        </div>
        <div className="line" style={{backgroundColor: `${border}`}}>
          <div className="line_item"  style={{width:`${consumedSecond}px`}} />
        </div>
      </nav>
      <Timer
        time={time}
        reset={reset}
        stage={stage} 
        switchStage={switchStage} 
        getTickingTime={getTickingTime} 
        setSecond={setSecond}
        second={second} 
        ticking={ticking}
        setTicking={setTicking}
        setTitle={setTitle} 
        />
       <TaskHead setTit={setTit} tit={tit} />
      

       { task.map((item,index) =>{
         return <Tasks 
         index={index}
         isTop={isTop}
         deleteTask={deleteTask}
         item={item} key={index}
         task={task}
         isEdit={isEdit}
         setIsEdit={setIsEdit}
         isTop={isTop}
         setTit={setTit}
         onSubmit={onSubmit}
         num={num}
         setNum={setNum}
         handleDecrement={handleDecrement}
         area={area}
         note={note}
         editTask={editTask}
         task={task}
         setNote={setNote}
         onNote={onNote}
         setOn={setOn}
         count={count}
         />
    })
}
    <div className={`add-task ${addTask && 'invisible'}`}  onClick={handleAdd}>
       <FaPlusCircle className='plus'/>
       <div><b>Add Task</b></div>
        </div>
          {addTask && <div className='modal-wrap'>
            <div ref={ref} className={`add-modal ${isTop ? 'modaltop': ''}`}>
             <form id='form' onSubmit={onSubmit}>
              <div className='modal_header'>
               <div className='mb-3'> 
                   <input id="input1" type="text" value={name} onChange={(e)=>setName(e.currentTarget.value)} placeholder="What are you working on?"  />
               </div>
                <div className='mb-2'><b>Est Pomodoros</b></div>
                <div className="w d-flex align-items-center">
                 <div className="in_dev"> 
                   <input type="number"  id="input2" value={num}  onChange={ (e)=> setNum(Number(e.currentTarget.value))} />
                 </div>
                  <div className="d-flex">
                   <span onClick={() => setNum((prev)=>prev+1) }> <AiFillCaretUp className="up"/> </span>
                   <span onClick={handleDecrement}><AiFillCaretDown className="up"/> </span>
                   
                  </div>
                </div>
                {note ? <div className="textarea_div">
                 <textarea className="textarea" value={area} placeholder='some...'/>
               </div>
                 : null}
                <div className='note_div'>
                  {note ? null: <button onClick={()=>onNote() } className="button-add">+ Add Note</button>}
                  <button onClick={()=>setOn(true)} className="button-add">+ Add Project </button><HiLockClosed className="close_btn"/>
                </div>
              </div>
            </form>
            <div className="modal_footer">
                <button>Cancel</button>
                <button type="submit" form={`${(num>0 && name) ? 'form':''}`} className={`save_btn ${(num>0 && name) ? 'active_btn': ''} `}>Save</button>
            </div>
            </div> 

           <div className='modal_end'></div>
          </div>  }
          <div className={`finish ${addTask ? 'fin-top':''} ${note ? 'fin-bottom':''}`}> 
          <div>Ect
            <span>
              { getAllNums(task)
                // getP(task) 2-yo'li
              }
            </span></div>
             <div> Act { <span>0</span>}</div>
             Finish at   <span> {hours}:{minutes.toString().padStart(2, '0')}</span>
            </div>
           <Setting
           openM={openM} 
           close={()=>{setOpenM(false);}} 
           toggle={toggle}
           setOpenM={setOpenM}
           setOn={setOn}
           setLongBreak={setLongBreak}
           setShortBreak={setShortBreak}
           setPomodoro={setPomodoro}
           editTimer={editTimer}
           reset={reset}
           switchStage={switchStage}
           clockTicking={clockTicking}
           />
         <Helmet> 
           <meta charSet="utf-8" />
           <title>
             {title ? (document.title = `${getTickingTime()}:${second.toString().padStart(2, '0')} Time to focus `):null }
           </title>
           <link type="png" className="href" rel="icon" href={href}/>
         </Helmet>
         <SwitchModal on={on} setOn={setOn} toggleM={toggleM} />
      </div>
  )
}
const mapStateToProps = (state) =>({
  time:state.time.timer,
  task:state.task.tasks
})
export default connect(mapStateToProps,({editTimer,addedTask,editTask,deleteTask})) (Navigation);
// export default connect(({TimerReducer})=>({timer:TimerReducer}),({editTimer})) (Navigation);
// export default Navigation;
