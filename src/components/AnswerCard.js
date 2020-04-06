import React from 'react'

const AnswerCard = (props) => {
  const {onAnswerClick} = props;
  const handleAsnwer = (e) => {
    onAnswerClick(e.target.name)
  }
	return (
      <div>
        <button name="true" onClick={handleAsnwer}>True</button>
        <button name="false" onClick={handleAsnwer}>False</button>
	  </div>
    )
}
export default AnswerCard;