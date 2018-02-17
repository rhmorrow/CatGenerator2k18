class CatView extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (<div>
      <img src={this.props.catPic} width="20" height="20"/> {this.props.catName} is {this.props.cativity}!
    </div>
    )
  }
}