import React from 'react'
import { useSelector } from 'react-redux'
import { setAnyState } from './Redux/ForState/AnyState'
import { dispatch } from './Redux/store'

function Com() {

    dispatch(setAnyState("Hello AD"))
    const data = useSelector((state) => state.AnyState.AnyState)
    console.log(data);

  return ( 
    <div>
        component
    </div>
  )
}

export default Com;