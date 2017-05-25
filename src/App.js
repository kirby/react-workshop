import React, { Component } from 'react';
// import logo from './logo.svg';
import profilePic from './kirby.png';
import './App.css';
import Navbar from './containers/Navbar'
import ProfileCard from './components/ProfileCard'

import Content from './components/Content'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

// const questions = [
//   {
//     question: "Where am I located?",
//     answer: "Bellevue, WA"
//   },
//   {
//     question: "What do I work in?",
//     answer: "Virtual Reality"
//   },
//   {
//     question: "What is my favourite restaurant?",
//     answer: "La Belle Patate (Victoria, BC)"
//   }
// ]
//
// const plainText = [
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// ]
//
// const quotation = [
//   {
//     quote: "Technology is great...when it works.",
//     author: "Kirby Shabaga",
//     reference: "The Internets"
//   }
// ]

class App extends Component {

  constructor() {
    super();
    this.state = {
      content: <Home />
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const id = event.target.id;
    if (id === "home") {
      this.setState({content: <Home />});
    } else if (id === "about") {
      this.setState({content: <About />});
    } else if (id === "contact") {
      this.setState({content: <Contact />});
    }
  }

  render() {
    return (
      <div className="App">

        <Navbar onClick={(event) => this.handleClick(event)}/>

      <div className='page'>
        <div className='container-fluid top-padding'>
          <div className='col-md-2'>
            <ProfileCard
              className="projectIcon"
              src={profilePic}
              name="Kirby Shabaga"
              oneLiner="Virtual Reality/Futurist" />
          </div>
          <div className='col-md-8'>
            <Content content={this.state.content} />
            {/* <Content
              questions={questions}
              plainText={plainText}
              quotation={quotation} /> */}
          </div>
        </div>
      </div>

      </div>
    );
  }
}

export default App;
