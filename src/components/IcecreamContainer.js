import React from 'react'
import { buy_icecream } from '../redux'
import { connect } from 'react-redux';

function IcecreamContainer(props) {
  console.log(props);
  return (
    <div>
      <h2>Number of Icecream = {props.noOfIcecream}</h2>
      <button onClick={props.buyIcecream}>Buy Icecream</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    noOfIcecream: state.icecream.noOfIcecream
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyIcecream: () => dispatch(buy_icecream())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);
