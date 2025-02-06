import { useState } from 'react'
import './App.css'
import {Choice} from './components/Choice'
import {Sound} from './components/Sound'

function App() {


  
  const birds = ["American Robin", "Northern Cardinal", "House Sparrow", "House Finch", "Mourning Dove"] 
  const [answer, setAnswer] = useState<string>(birds[Math.floor(Math.random()*birds.length)])    
  const [fileNum, setFileNum] = useState<number>(Math.floor(Math.random() * 6))
  const [isCorrect, setIsCorrect] = useState<boolean>(false)
  const [answerStates, setAnswerStates] = useState<{[key: string]: string}>({})

  const handleAnswerClick = (choiceName: string, e: React.MouseEvent<HTMLButtonElement>)=>{

    setAnswerStates((prev)=>({
      ...prev, 
      [choiceName]: (choiceName === answer ? 'correct' : 'incorrect')
    }))
    if(choiceName === answer){
      setIsCorrect(true)
      return true
    }else{
        return false

    }

  }

  const handleSoundClick = ()=>{
    if(isCorrect){
        setIsCorrect(false)
        setAnswer(birds[Math.floor(Math.random()*birds.length)])
        setFileNum( Math.floor(Math.random() * 6))
        setAnswerStates({})
    }else{
        
    }
}

  

  

  return (
    <>


    
    <Sound answer={answer} fileNum={fileNum} isCorrect={isCorrect} handleSoundClick={handleSoundClick} >
    </Sound> 
      <div className='choices'>
        {birds.map((choiceName, index)=>{
                      return <Choice choiceName={choiceName} 
                      className={`choice ${answerStates[choiceName] || ''}`}
                      handleAnswerClick={handleAnswerClick} 
                      key={index} ></Choice>
                    }
        )}
      </div>

    </>
  )

}

export default App
