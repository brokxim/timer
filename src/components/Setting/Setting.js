import React from 'react';
import {connect} from 'react-redux';
import {Modal,ModalBody} from 'reactstrap';
import {FiX} from 'react-icons/fi';
import {HiLockClosed} from 'react-icons/hi';
import SliderSizes from './Slider';
import Popup from './Popup';
import './Setting.scss';
  
  function Setting({timer,editTimer, openM,close,toggle,setOn,switchStage,pomodoro,setPomodoro,setLongBreak,setShortBreak,reset}) {
  
const[editT ,setEditT]=React.useState( );
const[current,setCurrent]=React.useState()
  
const onSubmit=(e)=>{
    e.preventDefault();
    reset();
    editTimer(editT,current);
    toggle();
    switchStage(editT.id-1);
  }
    const handleChange=(e,tim,i)=>{
      setCurrent(Number(e.target.value))
    console.log(i)
      setEditT(tim);
    if(i===0){ setPomodoro(Number(e.target.value)) }   
    else if(i===1) {setShortBreak(Number(e.target.value))}
    else{setLongBreak(Number(e.target.value))}
}
  return (  
     <Modal className="mx-auto p-5" title="Xodim qo'shish" toggle={toggle} isOpen={openM}  >
        <div className="modal_setting">
           <div className="modal_wrap">
             <div className="head">
               <h1 className='setting_h1'>Time setting</h1>
               <FiX className='fix' onClick={() =>{close()}}/>
            </div>
            <div>
              <span className='time'>
               Time (minutes)
              </span>
            </div>
             <form id='form' onSubmit={onSubmit}>
              <div className='inlabel_wrap '>
                { timer.map((tim, i) =>{
                    return <div className='inlabel_wrap_item' key={i}>
                      <label htmlFor={i}>{tim.label}</label>
                      <input id={i} defaultValue={tim.defaultValue} onChange={(e) =>handleChange(e,tim,i)}  type="number"/>
                    </div>
                  }) }
              </div>
             </form>
           <div className='auto-start'>
             <div><span>Auto start Breaks?</span></div>
             <div>yoq</div>
           </div>
           <div className='auto-start'>
             <div><span>Auto start Pomodoros?</span></div>
             <div>yoq</div>
           </div>
           <div className='auto-start'>
             <div><span>Long Break interval</span></div>
             <div>  <input type="number" /> </div>
           </div>
           <div className='auto-start'>
             <div><span>Alarm Sound</span></div>
             <div>  <select>
               <option value="">Bird</option>
               <option value="">Bell</option>
               <option value="">Drupan</option>
               </select></div>
           </div>
           <div className='alarm-slider'>
               <div className='span-slider'>
                <SliderSizes/>
             {/* <input className='m-0 p-0' defaultValue='54' type="range" min='0' max='100' />  */}
               </div>
               
           </div>
           <div className='auto-start_repeat'>
             <div className='span-repeat'><span>repeat</span></div>
             <div>  <input type="number" /> </div>
           </div>
           <div className='auto-start'>
             <div><span>Ticking Sound</span>
             <div className='ticking-soundc'> 
               <select>
               <option value="">None</option>
               <option value="">Ticking Sound</option>
               <option value="">Ticking Sound</option>
               </select>
              </div>
              </div>
               <div><SliderSizes/></div>
           </div>
           <div className='auto-start'>
             <div><span>Dark Mode when running<HiLockClosed/></span></div>
             <div onClick={()=>setOn(true)}>
               <Popup setOn={setOn} />
             </div>
           </div>
           <div className='notification'>
             <div><span>Notification<HiLockClosed/></span></div>
             <div className='d-flex'>  
             <select className="custom-select notification-select">
               <option value="">Last</option>
               <option value="">Every</option>
             </select>
               <input type="number" defaultValue='5'/>
                <span>min</span> 
               </div>
            </div>
           </div>
            <div className="setting_footer">
              <button form='form' type="submit">ok</button>
            </div>
        </div>
     </Modal>
    )}

// export default Setting;
 const mapStateToProps = (state) =>({
  timer:state.time.timer
})
export default connect(mapStateToProps ) (Setting);
