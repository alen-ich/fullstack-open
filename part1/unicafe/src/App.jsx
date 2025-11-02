import { useState } from 'react'

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, val}) => {
  if(text == 'positive'){
    return (
      <tr>
        <td>{text}:</td>
        <td>{val} %</td>  
      </tr>
    )
  }
  return (
    <tr>
      <td>{text}:</td>
      <td>{val}</td>  
    </tr>
  )
}

const Statistics = ({good, neutral, bad, total}) => {
  const calcAvg = () => (good*1 + neutral*0 + bad*(-1)) / total

  const calcPosPercent = () => (good / total) * 100

  if(total > 0) {
    return (
      <>
        <h2>Statistics</h2>
        <table>
          <StatisticLine text={'good'} val={good} />
          <StatisticLine text={'neutral'} val={neutral} />
          <StatisticLine text={'bad'} val={bad} />
          <StatisticLine text={'total'} val={total} />
          <StatisticLine text={'average'} val={calcAvg()} />
          <StatisticLine text={'positive'} val={calcPosPercent()} />
        </table>
      </>
    )
  }
  return (
    <>
      <h2>Statistics</h2>
      <p>No feedback given</p>
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