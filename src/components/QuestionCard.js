import React from 'react'

const QuestionCard = (props) => {
	const {value1,value2,value3,proposedAnswer} = props;
  
  	return (
    <div className="equation">
        <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
    </div>
    )
}
export default QuestionCard;