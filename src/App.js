
import { Container, Content, ContentButons, DigitsContainer, MathDigitsContainer } from './styles';
import Input from './components/input';
import Button from './components/Button';
import ButtonResult from './components/ButtonResult';

import { useState, useEffect } from 'react';

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0')
  const [memoryNumber, setMemoryNumber] = useState('0');
  const [firstNumber, setFistNumber] = useState('0');
  const [secundNumber, setSecundNumber] = useState('0');


  const [operacao, setOperacao] = useState('');
  


  const handleClear = () => {
    setCurrentNumber('0')
  };


  const handleClearMemory = () => {
    setMemoryNumber('0')
    setCurrentNumber('0')
    setFistNumber('0')
    setOperacao('')
    setSecundNumber('0')
  };


  const handleChangeSignal = () => {
    const negative = prev => prev >= 0 ? (-1*Number(prev)) : -1*Number(prev) 
    setCurrentNumber(negative)
  };

  const handleAddNumber = (number) => {
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
    if(operacao === ''){
      setFistNumber(prev => `${prev === '0' ? '' : prev}${number}`)
      setMemoryNumber(prev => `${prev === '0' ? '' : prev}${number}`)
    }else{
      setSecundNumber(prev => `${prev === '0' ? '' : prev}${number}`)
    }    
  };

  const handleSum = () =>{
    setOperacao('+')
    if(secundNumber === '0'){
      setMemoryNumber(firstNumber);
      handleClear()
    }
    else{
      if(currentNumber === '0'){
        const add = Number(memoryNumber) + Number(secundNumber)
        setMemoryNumber(add)
      }
      else{
        const sum = Number(firstNumber) + Number(secundNumber)
        setMemoryNumber(String(sum))
        handleClear()
      }
      
      //setFistNumber(currentNumber)
    }  
  };

  const handleMinus = () =>{

    setOperacao('-')
    if(secundNumber === '0'){
      setMemoryNumber(firstNumber);
      handleClear()
    }
    else{
      if(currentNumber === '0'){
        const add = Number(memoryNumber) - Number(secundNumber)
        setMemoryNumber(add)
      }
      else{
        const sum = Number(firstNumber) - Number(secundNumber)
        setMemoryNumber(String(sum))
        handleClear()
      }
      
      //setFistNumber(currentNumber)
    } 

  }

  const handlePlus = () =>{

    setOperacao('*')
    if(secundNumber === '0'){
      setMemoryNumber(firstNumber);
      handleClear()
    }
    else{
      if(currentNumber === '0'){
        const add = Number(memoryNumber) * Number(secundNumber)
        setMemoryNumber(add)
      }
      else{
        const sum = Number(firstNumber) * Number(secundNumber)
        setMemoryNumber(String(sum))
        handleClear()
      }
      
      //setFistNumber(currentNumber)
    } 

  }

  const handleDiv = () =>{

    setOperacao('/')
    if(secundNumber === '0'){
      setMemoryNumber(firstNumber);
      handleClear()
    }
    else{
      if(currentNumber === '0'){
        const add = Number(memoryNumber) / Number(secundNumber)
        setMemoryNumber(add)
      }
      else{
        const sum = Number(firstNumber) / Number(secundNumber)
        setMemoryNumber(String(sum))
        handleClear()
      }
      
      //setFistNumber(currentNumber)
    } 

  }

  const handleIquals = () =>{
    if(firstNumber !== '0' && operacao !== '' && secundNumber !== '0'){
      switch(operacao){
        case '+':
          handleSum()
          break;
        case '-':
          handleMinus()
          break;
        case '*':
          handlePlus()
          break;
        case '/':
          handleDiv()
          break;
        default:
          
          break;
      } 
    }
  };


  return (
    <div className="App">
      <Container>
        <Content>
        <Input value={currentNumber=== '0' ? memoryNumber : currentNumber} />
        <ContentButons>
            <DigitsContainer>
              <Button label="1" onClick = {() =>  handleAddNumber('1')}/>
              <Button label="2" onClick = {() =>  handleAddNumber('2')}/>
              <Button label="3" onClick = {() =>  handleAddNumber('3')}/>
              <Button label="-/+" onClick = {handleChangeSignal}/>
              <Button label="4" onClick = {() =>  handleAddNumber('4')}/>
              <Button label="5" onClick = {() =>  handleAddNumber('5')}/>
              <Button label="6" onClick = {() =>  handleAddNumber('6')}/>
              <Button label="," onClick = {() =>  handleAddNumber('.')}/>
              <Button label="7" onClick = {() =>  handleAddNumber('7')}/>
              <Button label="8" onClick = {() =>  handleAddNumber('8')}/>
              <Button label="9" onClick = {() =>  handleAddNumber('9')}/>
              <Button label="0" onClick = {() =>  handleAddNumber('0')}/>
            </DigitsContainer>
            <MathDigitsContainer>
              <Button label="c" btnType={false} onClick={handleClearMemory}/>
              <Button label="/" btnType={false} onClick={handleDiv}/>
              <Button label="ce" btnType={false} onClick={handleClear}/>
              <Button label="x" btnType={false} onClick={handlePlus}/>
              <Button label="-" btnType={false} onClick={handleMinus}/>
              <Button label="+" btnType={false} onClick={handleSum}/>
              <ButtonResult label="=" btnType={false} onClick={handleIquals}/>
            </MathDigitsContainer>
            </ContentButons>
        </Content>
      </Container>
    </div>
  );
}

export default App;
