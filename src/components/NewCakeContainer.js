import React, { useState, useEffect } from 'react';
import { buy_cake } from '../redux';
import { connect } from 'react-redux';

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  const setFieldOnChange = (e) => {
    setNumber(e.target.value);
  }

  return (
    <div>
      <h2>No of cakes in New Cake Container = {props.noOfCake}</h2>
      <input type='Number' name='number' onChange={setFieldOnChange} value={number} />
      <button onClick={() => props.buyCake(number)}>Buy {number} of cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    noOfCake: state.cake.noOfCake
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: number => dispatch(buy_cake(number))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
