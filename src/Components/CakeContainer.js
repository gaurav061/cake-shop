import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cakes/index'

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes - {props.noOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    noOfCakes: state.noOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
