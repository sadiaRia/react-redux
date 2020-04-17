import React from 'react'
import { connect } from 'react-redux';

function ItemContainer(props) {
  return (
    <div>
      <h2>Item -> {props.item}</h2>
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
export default connect(mapStateToProps)(ItemContainer);
