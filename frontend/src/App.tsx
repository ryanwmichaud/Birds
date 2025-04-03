import { useEffect, useState } from 'react'
import './App.css'
import {Choice} from './components/Choice'
import {Sound} from './components/Sound'

function App() {
  
  const birds = ["American Robin", "Northern Cardinal", "House Sparrow", "House Finch", "Mourning Dove"] 
  const [isCorrect, setIsCorrect] = useState<boolean>(false)
  const [choiceClasses, setChoiceClasses] = useState<{[key: string]: string}>({})
  const [activeBirds, setActiveBirds] = useState<Set<string>>(new Set(["House Finch","House Sparrow"]))
  const [answer, setAnswer] = useState<string>(Array.from(activeBirds)[Math.floor(Math.random()*activeBirds.size)])    
  const [fileNum, setFileNum] = useState<number>(Math.floor(Math.random() * 6))
  console.log(activeBirds.size)
  console.log(answer, fileNum)

  const handleAnswerClick = (choiceName: string, e: React.MouseEvent<HTMLButtonElement>)=>{

    setChoiceClasses((prev)=>({
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

  const newQuestion = ()=>{
    setIsCorrect(false)
    setAnswer(Array.from(activeBirds)[Math.floor(Math.random()*activeBirds.size)])
    setFileNum( Math.floor(Math.random() * 6))
    setChoiceClasses({})
  }

  const handleSoundClick = ()=>{
    if(isCorrect){
      newQuestion()
    }else{
        
    }
  }

  useEffect(()=>{
    newQuestion()
  }, [activeBirds])

  

  

  return (
    <div className='main'>
      <div className='options'>
        {birds.map((birdName, index)=>{
          return (<button className={`option ${activeBirds.has(birdName) ? 'active' : 'inactive'}`}
            key={index}
            onClick={()=>{
             setActiveBirds((prevSet)=>{
                  const newSet = new Set(prevSet)
                  if (newSet.has(birdName)){
                    newSet.delete(birdName)
                  }else{
                    newSet.add(birdName)
                  }
                  return newSet
                })
            }}>
            {birdName}
          </button>)
        })} 
      </div>
      <div>
        <Sound 
          answer={answer} fileNum={fileNum} 
          isCorrect={isCorrect} handleSoundClick={handleSoundClick} >
        </Sound> 
        <div className='choices'>
          {Array.from(activeBirds).map((choiceName, index)=>{
                        return <Choice choiceName={choiceName} 
                        className={`choice ${choiceClasses[choiceName] || ''}`}
                        handleAnswerClick={handleAnswerClick} 
                        key={index} ></Choice>
                      }
          )}
        </div>
      </div>
    </div>
  )

}

export default App
