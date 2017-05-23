import React, {Component} from 'react'

class PlainTextComponent extends Component {
  render(){
    return(<div>
        {this.props.text}
      </div>)
  }
}

export default PlainTextComponent;
