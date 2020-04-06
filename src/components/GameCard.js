import React,{Component} from 'react'
import QuestionCard from './QuestionCard'
import AnswerCard from './AnswerCard'
import ScoreCard from './ScoreCard'
import logo from '../logo.svg';
class GameCard extends Component
{
 constructor (props)
 {
   super(props);
   const question = this.generateQuestion();
   this.state = {
  	value1:question[0],
    value2:question[1],
    value3:question[2],
    proposedAnswer:question[3],
    numQuestions:0,
    numCorrect:0
  }
   this.handleAnswerClick = this.handleAnswerClick.bind(this);
 }
 
  generateQuestion (){
 	const values = [];
	for(let i=0;i<3;i++)
	{
      values.push(Math.floor(Math.random() * 100))
    }
	values.push(Math.floor(Math.random() * 3) + values[0] + values[1] + values[2]);
    return values;
	 
 }
  
  handleAnswerClick (e){
    const {value1,value2,value3,proposedAnswer}=this.state;
    console.log(e)
    
    let isCorrect = false;
    if(e=="true" && (value1+value2+value3)==proposedAnswer)
    {
      isCorrect = true;
    }else if(e=="false" && (value1+value2+value3)!=proposedAnswer)
    {
          isCorrect = true;
    }
     const question = this.generateQuestion();
    this.setState((currentState)=>({
      value1:question[0],
      value2:question[1],
      value3:question[2],
      proposedAnswer:question[3],
      numQuestions:currentState.numQuestions+1,
      numCorrect:currentState.numCorrect+isCorrect
    }))
  }
 
 render (){
 const {value1,value2,value3,proposedAnswer,numCorrect, numQuestions} = this.state;
 return (
  		<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <QuestionCard  value1={value1} value2={value2} value3={value3} proposedAnswer={proposedAnswer}/>
          <AnswerCard onAnswerClick={this.handleAnswerClick}/>
          <ScoreCard numCorrect={numCorrect} numQuestions={numQuestions} />
        </div>
      </div>
  )
 }
}
export default GameCard;