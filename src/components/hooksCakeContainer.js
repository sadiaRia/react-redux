import React from 'react';
import { useSelector } from 'react-redux';

function HooksCakeContainer() {
  const numOfCake = useSelector(state => state.noOfCake);
  return (
    <div>
      <h2>Num of cake from hooksCakeContainer => {numOfCake}</h2>
      <button>BUY CAKE</button>
    </div>
  )
}

export default HooksCakeContainer
