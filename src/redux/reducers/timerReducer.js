import *as types from '../actions/actionTypes';

function timerReducer(state={
    timer:[
       {id:1,defaultValue:25,label:'Pomodoro'},
       {id:2,defaultValue:5 ,label:'Short Break'},
       {id:3,defaultValue:15,label:'Long Break'}
    ]
}, action){
switch(action.type){
            case types.EDIT_TIMER:
             let arr = state.timer.map(item=>{
             if(item.id===action.payload.id){
                item={...item,defaultValue:action.current}
             }
            return item;
           })
        state={...state,timer:arr} 
    }
  return state;
}
export default timerReducer;
