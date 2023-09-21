import '../src/index.css'
import Header from './Header'
import Main from './main'

export default function App () {
  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/17</p>
        <p>Question?</p>
      </Main>
    </div>
  )
}