import { useEffect } from "react"

export interface SoundProps {
    answer: string
    fileNum: number
    isCorrect: boolean
    handleSoundClick: ()=> void
}

const urlBase = import.meta.env.VITE_URL_BASE
export const Sound = ({answer, fileNum, isCorrect, handleSoundClick}: SoundProps)=>{

    useEffect(()=>{

    }, [answer, fileNum])


    const path = `${urlBase}/audio/${encodeURIComponent(answer)}/${fileNum}.mp3`

    

    return(
        <button className={`sound ${isCorrect ? 'correct' : ''}`} onClick={handleSoundClick} >
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