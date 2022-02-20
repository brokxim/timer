import React  from 'react';
import "./Timer.scss";
import {CgPlayTrackNext} from 'react-icons/cg'

function Timer({stage,switchStage,getTickingTime,second,setPomodoro,setSecond,timer,ticking,setTicking,reset,setTitle}) {
 const options = ["Pomodoro", "Short Break", "Long Break"];

 const onSelect=(index)=>{
  switchStage(index);
  reset();
 }
   let audio = new Audio("sound.wav");
 const Start=()=>{
  // setSecond(59)
  setTitle(true);
  setTicking((ticking)=>!ticking);
  audio.play();
 }
//  const[isConfirm,setIsConfirm]=React.useState(false)
    const[time,setTime]=React.useState(1)

 const onNext=(time)=>{
   let text = 'Are you sure you want to finish the round early? (The remaining time will not be counted in the report.)'
   if(window.confirm(text) == true){
     if(time===1){
     onSelect(time); setTime(time+1)}
     else if(time===2){
       onSelect(time); setTime(0)}
     else{onSelect(time); setTime(1)} 
     Start(); 
  }
  console.log("time=>",time);
}
return <div className="timer mx-auto">
            <div className="timer-cart">
             {options.map((option,index) => {
              return <div key={index}>
                <b className={` ${ index === stage ? "bg" :""} option`} onClick={() =>onSelect(index)} > {option}</b>
                </div>
            })}
            </div>
            <div className="mt-2 mb-2">
              <h1>{getTickingTime()}:{second.toString().padStart(2, '0')}</h1>
              <button className={`start ${ticking ? '':'stop'}`} onClick={() =>Start()} >{ ticking ? "STOP" : "START"}</button>
 
              { ticking ? <CgPlayTrackNext onClick={()  =>onNext(time)} className='next-icon'/>:null}
             
            </div>
         </div>;
}

export default Timer;
