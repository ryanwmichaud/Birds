import { useEffect } from "react"

export interface SoundProps {
    answer: string
    isCorrect: boolean
    setIsCorrect: React.Dispatch<React.SetStateAction<boolean>>
    setAnswer: React.Dispatch<React.SetStateAction<string>>
    setFileNum: React.Dispatch<React.SetStateAction<number>>
    birds: string[]
    fileNum: number
}

export const Sound = ({answer, setAnswer, isCorrect, setIsCorrect, birds, fileNum, setFileNum}: SoundProps)=>{

    useEffect(()=>{

    }, [answer])
    const handleClick = ()=>{
        if(isCorrect){
            setIsCorrect(false)
            setAnswer(birds[Math.floor(Math.random()*birds.length)])
            setFileNum( Math.floor(Math.random() * 6))
            const buttons = document.querySelectorAll('.choice')
            buttons.forEach((button)=>{
              button.classList.remove('correct', 'incorrect')
            })
        }else{
            
        }
    }

    const path = `http://localhost:8000/audio/${encodeURIComponent(answer)}/${fileNum}.mp3`

    

    return(
        <button className={`sound ${isCorrect ? 'correct' : ''}`} onClick={handleClick} >
                {isCorrect ? 
                <>
                    <p>{`Correct - ${answer}`}</p>
                    <p>{"Click for Next"}</p>
                </>
                    : <p>Click to Play</p>
                }
          
               
                <audio controls className="audio" src={path}></audio>
        </button>

    ) 
}