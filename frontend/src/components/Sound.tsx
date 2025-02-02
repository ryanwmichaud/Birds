import { useEffect } from "react"

export interface SoundProps {
    answer: string
    isCorrect: boolean
    setIsCorrect: React.Dispatch<React.SetStateAction<boolean>>
    setAnswer: React.Dispatch<React.SetStateAction<string>>
    birds: string[]
}

export const Sound = ({answer, isCorrect, setIsCorrect, setAnswer, birds}: SoundProps)=>{

    useEffect(()=>{

    }, [answer])
    const handleClick = ()=>{
        if(isCorrect){
            setIsCorrect(false)
            setAnswer(birds[Math.floor(Math.random()*birds.length)])
        }
    }

    return(
        <button className={`sound ${isCorrect ? 'correct' : ''}`} onClick={handleClick} >
                {isCorrect ? 
                    <p>{`Correct! Click for Next`}</p>
                    : <p>Click to Play</p>}
                
                <p>{`(Answer is ${answer})`}</p>
        </button>

    ) 
}