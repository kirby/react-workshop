import React, {Component} from 'react'

class PlainTextComponent extends Component {
  render(){
    return(<div style={{"textAlign": "justify",
    "textJustify": "inter-word"}}>
        {this.props.paragraph}
      </div>)
  }
}

export default PlainTextComponent;
