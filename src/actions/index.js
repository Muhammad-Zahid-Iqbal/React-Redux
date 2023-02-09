import React from 'react'

export const IncNumber = (num) => {
  return {
    type: "INCREMENT",
    payload:num
  }
}

export const DecNumber = ()=>{
    return{
      type: "DECREMENT"
    }
}
