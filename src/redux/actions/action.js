import * as types from './actionTypes';

export function editTimer(editT,current){
    return{
        type:types.EDIT_TIMER,
        payload:editT,current
    }
}
export function addedTask(obj){
    console.log(obj)
      return{ 
          type: types.ADD_TASK,
          payload:obj
      }
}
export function editTask(editTask,text1,num,text2){
    // console.log(obj)
      return{ 
          type: types.EDIT_TASK,
          payload:editTask,text1,num,text2
      }
}

export function deleteTask(id){
      return{ 
          type: types.DEL_TASK,
          payload:id
      }
}