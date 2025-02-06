import { useEffect } from "react"

export interface SoundProps {
    answer: string
    fileNum: number
    isCorrect: boolean
    handleSoundClick: ()=> void
}

export const Sound = ({answer, fileNum, isCorrect, handleSoundClick}: SoundProps)=>{

    useEffect(()=>{

    }, [answer, fileNum])


    const path = `http://localhost:8000/audio/${encodeURIComponent(answer)}/${fileNum}.mp3`

    

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