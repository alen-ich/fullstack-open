import { useState } from 'react'

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const Stats = ({text, val}) => {
  if(text == 'positive'){
    return (
      <p>{text}: {val} %</p>
    )
  }
  return (
    <p>{text}: {val}</p>
  )
}

const Statistics = ({good, neutral, bad, total}) => {
  const calcAvg = () => {
    if(total > 0){
      return (good*1 + neutral*0 + bad*(-1)) / total
    }
    return 0
  }

  const calcPosPercent = () => {
    if(total > 0){
      return (good / total) * 100
    }
    return 0
  }

  return (
    <>
      <h2>Statistics</h2>
      <Stats text={'good'} val={good} />
      <Stats text={'neutral'} val={neutral} />
      <Stats text={'bad'} val={bad} />
      <Stats text={'total'} val={total} />
      <Stats text={'average'} val={calcAvg()} />
      <Stats text={'positive'} val={calcPosPercent()} />
    </>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    const updGood = good + 1
    setGood(updGood)
    setTotal(updGood + neutral + bad)
  }

  const handleNeutralClick = () => {
    const updNeutral = neutral + 1
    setNeutral(updNeutral)
    setTotal(updNeutral + good + bad)
  }


  const handleBadClick = () => {
    const updBad = bad + 1
    setBad(updBad)
    setTotal(updBad + neutral + good)
  }



  return (
    <div>
      <h1>Give feedback for unicafe</h1>
      <div>
        <Button text={'good'} onClick={handleGoodClick} />
        <Button text={'neutral'} onClick={handleNeutralClick} />
        <Button text={'bad'} onClick={handleBadClick} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App