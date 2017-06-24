 var defaultState = { //this is the default state
   "volumeUpEvents":0,
   "volumeDownEvents":0
};

export default function reducer(state=defaultState, action){

  switch (action.type){
    case "VOLUME_UP":{
      return {...state, // this makes sure to merge the previous state with the new values from the action.payload
        volumeUpEvents:state.volumeUpEvents + action.payload.value,
        message:action.payload.message};
    }
    case "VOLUME_DOWN":{
      return {...state, 
        volumeDownEvents:state.volumeDownEvents + action.payload.value, 
        message:action.payload.message};
    }
    case "RESET_EVENTS":{
      return defaultState
    }
    default: return state;
  }
};
