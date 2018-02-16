import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      catName: 'Fluffy'
    }
  }

  onChange (e) {
    this.setState({
      cat: e.target.value
    });
  }


  render() {
    return (<div>
      Cat Name: <input value={this.state.cat} onChange={this.onChange}/>
    </div>
  }
}