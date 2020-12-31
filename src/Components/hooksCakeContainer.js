import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cakes';

function HooksCakeContainer() {
  const noOfCakes = useSelector(state => state.noOfCakes);
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of Cakes from Hooks -- {noOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>But Cake</button>
    </div>
  )
}

export default HooksCakeContainer
