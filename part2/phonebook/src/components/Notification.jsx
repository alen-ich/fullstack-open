const Notification = ({ message, errMessage }) => {
  if (message === null && errMessage === null) {
    return null
  }
  else if (errMessage){
    return (
        <div className='error'>{errMessage}</div>
    )
  }
  return (
    <div className='message'>{message}</div>
  )
}

export default Notification