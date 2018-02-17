class CatView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cativities: ['purring', 'sleeping', 'staring at you', 'climbing up the curtains', 'knocking things off the wall', 'nuzzling you', 'getting into trouble', 'hunting toy mice', 'staring at you as you poop', 'meowing for no reason'],
      cativity: this.props.cativity
    }
    this.change.bind(this);
  }

  change() {
    var cat = this;
    this.setState({
      cativity: cat.state.cativities[Math.floor(Math.random()*10)]
    })
  }

  render() {
    return (<div className="catView" onClick={this.props.meow}>
      <img onClick={this.change.bind(this)} src={this.props.catPic} width="30" height="30"/> <a>{this.props.catName} is {this.state.cativity}! </a>
    </div>
    )
  }
}