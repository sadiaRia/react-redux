import React from 'react'
import { connect } from 'react-redux';
import { buy_icecream, buy_cake } from '../redux'

function ItemContainer(props) {
  return (
    <div>
      <h2>Item -> {props.item}</h2>
      <button onClick={props.itemDispatch}>Buy Item</button>
    </div>
  )
}

// own Prop usecase -> 'master detaied pattern'
// from a list of items when click on a particular item you would pass in the item ID
// as a prop & fetch the data only for that ID from redux


const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake ? state.cake.noOfCake : state.icecream.noOfIcecream
  return {
    item: itemState
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake ? () => dispatch(buy_cake()) : () => dispatch(buy_icecream());
  return {
    itemDispatch: dispatchFunction
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
