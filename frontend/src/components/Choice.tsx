
export interface ChoiceProps {
    choiceName: string
    className: string
    handleAnswerClick: (choiceName: string, e: React.MouseEvent<HTMLButtonElement>)=>  boolean
}


const urlBase = import.meta.env.VITE_URL_BASE 

export const Choice = ({choiceName, handleAnswerClick, className}: ChoiceProps)=> {


    const imgPath = `${urlBase}/images/${encodeURIComponent(choiceName)}.jpg`

    return <button className={className} onClick={(e)=>handleAnswerClick(choiceName, e)}>
            <img src={imgPath} alt={choiceName} className="choice-image"></img>
            <p>{choiceName}</p>
        </button>}