import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Form from 'form.jsx'

class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(<div>
      <h1>Welcome to Cat Generator Xtreme 2k18!</h1>
      <h2>To create a new cat, enter its details into the field below.</h2>
      <Form onSend={this.submit.bind(this)}/>
    )
  }


}