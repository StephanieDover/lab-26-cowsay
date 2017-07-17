import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="navbar">
        <h1> Generate Cowsay Lorem </h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'initial'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const content = faker.fake('{{lorem.sentence}}');
    this.setState({ content });
  }

  render() {
    return (
      <div>
        <Navbar />
        <pre>
          {cowsay.say({ text: this.state.content, e: 'oO', T: 'U' })}{' '}
        </pre>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));

//npm install cowsay browser for todays lab, use faker.lorem.words(number) to render words
