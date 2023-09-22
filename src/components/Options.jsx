import React from 'react'

export default function Options({ question, dispatch, answer }) {
  const isAnswered = answer !== null;

  return (
<div className='options'>
    {question.options.map((option, index) =>
        <div className={`btn btn-option 
          ${index === answer? "answer" : ""} 
          ${isAnswered?
          index === question.correctOption?
          "correct" 
          :"wrong"
          : ""
          }`}
          key={option} 
          disabled={isAnswered}
          onClick={() => dispatch({type: "newAnswer", payload: index})}
        >
            {option}
        </div>)
    }
</div>
  )
}
