class Form extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (<div>
      Cat Name: <input value={this.props.catName} onChange={this.props.onChange}/>
      <button onClick={this.props.onSend}>Submit Cat</button>
    </div>
    )
  }
}