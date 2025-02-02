import { useState } from 'react'
import './App.css'
import {Choice} from './components/Choice'
import {Sound} from './components/Sound'

function App() {
  
  const birds = ["American Robin", "Northern Cardinal", "House Sparrow", "House Finch", "Mourning Dove"] 
  const [answer, setAnswer] = useState<string>(birds[Math.floor(Math.random()*birds.length)])        
  const [isCorrect, setIsCorrect] = useState<boolean>(false)

  const handleAnswerClick = (name: string)=>{
    console.log(name===answer)
    if(name === answer){
      setIsCorrect(true)
      return true
    }else{
      console.log(answer)
      return false

    }

  }

  return (
    <>
     <Sound answer={answer} isCorrect={isCorrect} setIsCorrect={setIsCorrect} 
     setAnswer={setAnswer} birds={birds}>
      </Sound> 
      <div className='choices'>
        {birds.map((name, index)=>{
                      return <Choice name={name} handleAnswerClick={handleAnswerClick} key={index}></Choice>
                    }
          )}
      </div>

    </>
  )

}

export default App
