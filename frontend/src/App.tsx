import { useState } from 'react'
import './App.css'
import {Choice} from './components/Choice'
import {Sound} from './components/Sound'

function App() {


  
  const birds = ["American Robin", "Northern Cardinal", "House Sparrow", "House Finch", "Mourning Dove"] 
  const [answer, setAnswer] = useState<string>(birds[Math.floor(Math.random()*birds.length)])    
  const [fileNum, setFileNum] = useState<number>(Math.floor(Math.random() * 6))
  const [isCorrect, setIsCorrect] = useState<boolean>(false)

  const handleAnswerClick = (choiceName: string, e: React.MouseEvent<HTMLButtonElement>)=>{
    const button = e.currentTarget as HTMLButtonElement;

    if(choiceName === answer){
      setIsCorrect(true)
      button.classList.add("correct")
      return true
    }else{
  
      button.classList.add("incorrect")
      return false

    }

  }

  

  return (
    <>


    
     <Sound answer={answer} fileNum={fileNum} isCorrect={isCorrect} setIsCorrect={setIsCorrect} 
     setAnswer={setAnswer} setFileNum={setFileNum} birds={birds}>
      </Sound> 
      <div className='choices'>
        {birds.map((choiceName, index)=>{
                      return <Choice choiceName={choiceName} handleAnswerClick={handleAnswerClick} key={index}></Choice>
                    }
          )}
      </div>

    </>
  )

}

export default App
