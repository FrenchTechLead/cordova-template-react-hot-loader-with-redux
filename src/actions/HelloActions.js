export function volumeUp(){
  return {
    type:"VOLUME_UP",
    payload:{
      message:"Volume UP Event has been fired !",
      value:1
    }
  }
}

export function volumeDown(){
  return {
    type:"VOLUME_DOWN",
    payload:{
      message:"Volume Down Event has been fired !",
      value:1
    }
  }
}

export function resetEvents(){
  return {
    type:"RESET_EVENTS"
  }
}
