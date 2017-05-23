import React, {Component} from 'react'

class QuotationComponent extends Component {
  render(){
    return(<div>
        {this.props.quote} -{this.props.author}, <i>{this.props.reference}</i>
      </div>)
  }
}

export default QuotationComponent;
