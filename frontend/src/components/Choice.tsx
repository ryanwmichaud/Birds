
export interface ChoiceProps {
    choiceName: string
    className: string
    handleAnswerClick: (choiceName: string, e: React.MouseEvent<HTMLButtonElement>)=>  boolean
}


export const Choice = ({choiceName, handleAnswerClick, className}: ChoiceProps)=> {


    const imgPath = `http://localhost:8000/images/${encodeURIComponent(choiceName)}.jpg`

    return <button className={className} onClick={(e)=>handleAnswerClick(choiceName, e)}>
            <img src={imgPath} alt={choiceName} className="choice-image"></img>
            <p>{choiceName}</p>
        </button>}