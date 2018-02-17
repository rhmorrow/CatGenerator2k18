import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Form from 'form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Welcome to Cat Generator Xtreme 2k18!'
      ),
      React.createElement(
        'h2',
        null,
        'To create a new cat, enter its details into the field below.'
      ),
      React.createElement(Form, { onSend: this.submit.bind(this) })
    );
  }
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
