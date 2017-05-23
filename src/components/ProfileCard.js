import React, {Component} from 'react'

class ProfileCard extends Component {
  render(){
    return(<div class="projectCard">
      <img class={this.props.className} src={this.props.src} />
      <h4>{this.props.name}</h4>
      <p><i>{this.props.oneLiner}</i></p>
      </div>)
  }
}

export default ProfileCard;
