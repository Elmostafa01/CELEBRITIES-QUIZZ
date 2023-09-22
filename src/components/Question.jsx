import React from 'react'
import Options from "./Options"

const Question = ({question, dispatch, answer}) => {
  return (
    <div>
      <h4 className='questions'>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  )
}

export default Question
