import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
  console.log(props)
  return (
    <Fragment>
      <div className="belt">
        {props.sushi.map((sushi) => {
          return <Sushi
           key  = {sushi.id}
           sushi = {sushi}
           eatSushi = {props.eatSushi}
           gone = {props.eaten.includes(sushi)}
           
           />
        })} 
        <MoreButton displayFourMore = {props.displayFourMore} />
      </div>
    </Fragment>
  )
}

export default SushiContainer