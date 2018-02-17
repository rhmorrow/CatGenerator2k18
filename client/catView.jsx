class CatView extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (<div className="catView" onClick={this.props.meow}>
      <img src={this.props.catPic} width="30" height="30"/> <a>{this.props.catName} is {this.props.cativity}! </a>
    </div>
    )
  }
}