
interface ChoiceProps {
    name: string
    handleAnswerClick: (e: React.MouseEvent<HTMLButtonElement>, name: string)=>  boolean
}

export const Choice = ({name, handleAnswerClick}: ChoiceProps)=> {

    return <button className="choice" onClick={()=>handleAnswerClick(name)}>
            <p>{name}</p>
        </button>}