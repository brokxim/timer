import {compose,combineReducers,createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/rootReducer';
// import logger from 'redux-logger';
// import timerReducer from "./redux/reducers/timerReducer";
// import taskReducer from "./redux/reducers/taskReducer";

// const rootReducer=combineReducers({timer:timerReducer,user:taskReducer})

// const store = createStore(rootReducer,applyMiddleware(thunk));
// export default store;

export default initialState => {
    initialState = 
       JSON.parse(window.localStorage.getItem('state')) || initialState;
    const middleware = [thunk];
    
    const store = createStore(
        rootReducer,
        initialState,
        compose(
          applyMiddleware(...middleware)
             /* window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__() */
          ));
    store.subscribe(()=>{
        const state=store.getState();
        const persist={
            task:state.task,
            time:state.time
          }
      window.localStorage.setItem('state', JSON.stringify(persist)); 
    })
    return store;
}