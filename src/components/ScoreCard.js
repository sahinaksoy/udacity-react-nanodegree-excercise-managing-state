import React from 'react';

const ScoreCard = (props) => 
{
	const {numCorrect, numQuestions} = props;
  	return (
    	<div>
      		<p className="text">
            Your Score: {numCorrect}/{numQuestions}
          </p>
      	</div>
    );
}
export default ScoreCard;