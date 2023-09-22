import React from 'react'

export default function FinishedScreen({ points, maxUserPoints}) {
    const percent = (points / maxUserPoints) * 100;

  return (
    <p className='result'>
      Your Score is <strong>{points}</strong> of {maxUserPoints} ({Math.ceil(percent)}%)
    </p>
  )
}
