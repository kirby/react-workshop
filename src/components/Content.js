import React, {Component} from 'react'

import QuestionAnswerComponent from './QuestionAnswerComponent'

class Content extends Component {
  render(){
    return(<div>
      <QuestionAnswerComponent
        question="Where am I located?"
        answer="Seattle, WA" />
      </div>)
  }
}

export default Content;
