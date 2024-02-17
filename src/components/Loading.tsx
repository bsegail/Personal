import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Loading: React.FC = () => {
  return (
    <TailSpin width={16} height={16} color={'#FFFFFF'} />
  )
}

export default Loading
