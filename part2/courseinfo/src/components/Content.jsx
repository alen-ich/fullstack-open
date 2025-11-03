import Part from "./Part";

const Content = ({parts, course}) => {
    return (
        <>
            {parts.map(part => <Part key={'part' + part.id + course} part={part} />)}
        </>
    )
}

export default Content