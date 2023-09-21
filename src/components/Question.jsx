import React from 'react'
import Options from "./Options"

const Question = ({question, dispatch, answer}) => {
    console.log(question)
  return (
    <div>
      <h4>{question.questions}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  )
}

export default Question
