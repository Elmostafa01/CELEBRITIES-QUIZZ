import  '../src/index.css';
import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import NextButton from './components/NextButton';
import Progress from './components/Progress';
import FinishedScreen from './components/FinishedScreen';

const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
}

function reducer(state, action) {
  switch(action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: "ready"
      };
    case 'dataFailed':
      return {
        ...state, 
        status: 'error',
      };
    case 'start':
      return {
        ...state,
        status: 'active',
      };
    case 'newAnswer':
      const currentQuestion = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points: action.payload === currentQuestion.correctOption ?
        state.points + currentQuestion.points : 
        state.points,
      };
    case 'nextQuestion':
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case 'finish':
      return {
        ...state,
        status: "finished"
      };
    case 'restart':
      return {
        ...state,
        status: "active"
      }

      default:
        throw new Error("Action unknown")
  }
}

export default function App () {
  const[{questions, status, index, answer, points}, dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxUserPoints = questions.reduce((prev, cur) => prev + cur.points, 0)

  useEffect(() => {
    fetch('http://localhost:8000/questions')
    .then(res => res.json())
    .then(data => dispatch({type: 'dataReceived', payload: data}))
    .catch((error) => dispatch({type: 'dataFailed'}))
  },[])

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
        {status === 'active' && (
          <>
          <Progress 
            index={index} 
            numQuestions={numQuestions} 
            points={points} 
            maxUserPoints={maxUserPoints} 
            answer={answer}
          />
          <Question 
            question={questions.at(index)} 
            dispatch={dispatch} 
            answer={answer} 
          />
          <NextButton 
          dispatch={dispatch} 
          answer={answer} 
          numQuestions={numQuestions} 
          index={index} 
          />
          </>
        )}
          {status === 'finished' && (
            <>
          <FinishedScreen 
          points={points} 
          maxUserPoints={maxUserPoints} 
          dispatch={dispatch}
          />
          </>
        )}
      </Main>
    </div>
  )
}