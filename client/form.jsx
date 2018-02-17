class Form extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (<div>
      <p>Cat Name: <input value={this.props.catName} onChange={this.props.onChange}/></p>
      <p>Cat Avatar: <select onChange={this.props.onPicChange}>
        <option value="0">Tuxedo Prankster</option>
        <option value="1">Cute Calico</option>
        <option value="2">Lil' Gray Cat</option>
        <option value="3">Cheeky Orange Fluff</option>
        <option value="4">Tan and Blocky</option>
        <option value="5">Very White and Fluffy</option>
        <option value="6">A loaf</option>
        </select>
        </p>
        <div className="catPreview">
        <a>Cat Preview:</a>
        <img src={this.props.catPic} width="60" height="60" />
        </div>
      <div className="buttonDiv"><button className="button" onClick={this.props.onSend}>Submit Cat</button></div>
    </div>
    )
  }
}