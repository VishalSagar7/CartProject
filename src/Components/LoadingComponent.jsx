import React from 'react'
import ReactLoading from 'react-loading'

const LoadingComponent = ({type,color}) => {
  return (
    <div>
      <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
    </div>
  )
}

export default LoadingComponent;
