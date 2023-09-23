import React from 'react'
import RestartQuizz from './RestartQuizz';

export default function FinishedScreen({ points, maxUserPoints, dispatch}) {
    const percent = (points / maxUserPoints) * 100;

  return (
    <>
      <p className='result'>
        Your Score is <strong>{points}</strong> of {maxUserPoints} ({Math.ceil(percent)}%)
      </p>
      <RestartQuizz dispatch={dispatch} />
    </>
  )
}
