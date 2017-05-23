import React, {Component} from 'react'

class QuestionAnswerComponent extends Component {
  render(){
    return(<div>
        <center>
        <b><i>{this.props.question}</i></b>
        <p>{this.props.answer}</p>
        </center>
      </div>)
  }
}

export default QuestionAnswerComponent;
