import React from 'react'
function Banner({ firstName, lastName }) {
  return (
    <div>
        <h5>{ firstName } { lastName }</h5>
    </div>
  )
}

export default Banner