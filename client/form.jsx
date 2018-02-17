class Form extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (<div>
      <a>Cat Name: <input value={this.props.catName} onChange={this.props.onChange}/></a>
      Cat Avatar: <select onChange={this.props.onPicChange}>
        <option value="0">Tuxedo Prankster</option>
        <option value="1">Cute Calico</option>
        <option value="2">Lil' Gray Cat</option>
        <option value="3">Cheeky Orange Fluff</option>
        </select>
        <img src={this.props.catPic} width="50" height="50"/>
      <button className="button" onClick={this.props.onSend}>Submit Cat</button>
    </div>
    )
  }
}