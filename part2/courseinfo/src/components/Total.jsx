const Total = ({parts}) => {
    const getTotal = () => parts.reduce((acc, val) => acc + val.exercises, 0)
    
    return (
        <p>Total number of exercises {getTotal()}</p>
    )
}

export default Total