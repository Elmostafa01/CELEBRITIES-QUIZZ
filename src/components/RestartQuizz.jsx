import React from 'react'

const RestartQuizz = ({dispatch}) => {
  return (
    <>
      <button className='restart-quizz'
        onClick={() => dispatch({type: "restart",})}
      >
        Wanna restart the Quizz ?
    </button>
    </>
  )
}

export default RestartQuizz
