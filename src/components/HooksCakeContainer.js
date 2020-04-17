import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buy_cake } from '../redux';

function HooksCakeContainer() {
  const numOfCake = useSelector(state => state.cake.noOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of cake from hooksCakeContainer => {numOfCake}</h2>
      <button onClick={() => dispatch(buy_cake())}>BUY CAKE</button>
    </div>
  )
}

export default HooksCakeContainer;
