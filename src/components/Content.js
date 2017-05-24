import React, {Component} from 'react'

import QuestionAnswerComponent from './QuestionAnswerComponent'
import PlainTextComponent from './PlainTextComponent'
import QuotationComponent from './QuotationComponent'

class Content extends Component {
  render(){

    var questionSection = this.props.questions.map(function (entry) {
      return <QuestionAnswerComponent
        key={entry.question}
        question={entry.question}
        answer={entry.answer} />
    })

    var plainTextSection = this.props.plainText.map(function (entry, index) {
      return <PlainTextComponent key={index} paragraph={entry}/>
    })

    var quotationSection = this.props.quotation.map(function(entry) {
      return <QuotationComponent
        key={entry.quote}
        quote={entry.quote}
        author={entry.author}
        reference={entry.reference} />
    })

    return(<div>
      {questionSection}
      {plainTextSection}
      {quotationSection}
    </div>)
  }
}

export default Content;
