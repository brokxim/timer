import * as types from '../actions/actionTypes';

function taskReducer(state={
    tasks:[
        {id:1,text1:'some',num:0,text2:'any'}
]
}, action){
    switch(action.type){
        case types.ADD_TASK:
            let a=[...state.tasks]
            a.push(action.payload)
            console.log(action.payload)
            state={...state,tasks:a}
            break;
        case types.EDIT_TASK:
            let arr=state.tasks.map(item=>{
                if(item.id===action.payload.id){
                    item={...item,text1:action.text1,num:action.num,text2:action.text2}
                }
                return item;
            })
            state={...state,tasks:arr}
            break;
        case types.DEL_TASK:
            return{
                ...state,tasks: state.tasks.filter(i=>i.id!==action.payload)
            }      
    }
    return state;
}
export default taskReducer;