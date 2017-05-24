import React, {Component} from 'react'

class ProfileCard extends Component {
  render(){
    return(<div className="projectCard">
      <img
        src={this.props.src}
        style={{'borderRadius': '8px', 'width': '100px'}}
        alt={this.props.name}
      />
      <h4>{this.props.name}</h4>
      <p><i>{this.props.oneLiner}</i></p>
      </div>)
  }
}

export default ProfileCard;
