import React from 'react';
import { buy_cake } from '../redux';
import { connect } from 'react-redux';

function CakeContainer(props) {
  console.log(props)
  return (
    <div>
      <h2>No of cakes = {props.noOfCake}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

//step-1
//selectors file
// this function return the value which component requires
// it can take 2 parameter (state,ownProps)
//It is called every time the store state changes.
//it receieves redux state as papmeter & retrieve state properties
const mapStateToProps = state => {
  return {
    noOfCake: state.noOfCake
  }
}

//step-2 difining mapDispathToProps
//dispathing action => get dismatch method as parmeter & allows us action creator to props
//this allows us to call props.buyCake
const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buy_cake())
  }
}

//step-3 connect 2 function with react component


export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
