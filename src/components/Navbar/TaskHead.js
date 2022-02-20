import React from 'react';
import './TaskHead.scss';
function TaskHead({tit}) {
const popupRef=React.useRef();
const[popup,setPopup]=React.useState(false);
// const onPopup=()=>{
//   setPopup(prev=>!prev)
// }
React.useEffect(()=>{
 const handlePopup=e=>{
     if(tit && popupRef.current && !popupRef.current.contains(e.target)){
         setPopup(false);}
 }
 document.addEventListener('mousedown',handlePopup)
},[popup])

   return (
     <>
         <div className="one mt-3">#1</div>
{ tit ? <div className="focus">{tit}</div> : <div className='focus'>Time to focus!</div>}
        <div className='tasks'><span>Tasks</span><div className='div_img'><button onClick={()=>setPopup(prev=>!prev)}><img className="threedots" src="threedots-white.png"/></button></div>
        
        {popup ? <div ref={popupRef} className='popup'>
             <div className= 'popup_icon'>Clear finished tasks</div>
             <div className= 'popup_icon'>Clear act pomodoros</div>
             <div className= 'popup_icon'>Save as template</div>
             <div className= 'popup_icon'>Plus from templates</div>
             <div className= 'popup_icon'>Clear all tasks</div>
         </div> :null}
        </div>
     </>
    )
}

export default TaskHead