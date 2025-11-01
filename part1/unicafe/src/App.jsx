import { useState } from 'react'

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback for unicafe</h1>
      <div>
        <Button text={'good'} onClick={() => setGood(good + 1)} />
        <Button text={'neutral'} onClick={() => setNeutral(neutral + 1)} />
        <Button text={'bad'} onClick={() => setBad(bad + 1)} />
      </div>
      <h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </h2>
    </div>
  )
}

export default App