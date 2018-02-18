class Catterbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meows: []
    }
    this.startMeowing = this.startMeowing.bind(this);
    this.meow = this.meow.bind(this);
    this.startMeowing();
  }

  startMeowing() {
    this.props.cats.forEach(function(cat) {
        this.meow(cat.catName)
    })
  }

  meow(catName) {
    this.state.meows.push(catName + ": Meow!")
  }

  render() {
    return (<div className="catterbox">
      <h3>CatterBox</h3>
      <div>
      <div>Currently {this.props.cats.length} cats in chat.</div>
      {this.state.meows.map(function(meow) {
        return (<div>meow</div>)
        })
      }
      </div>
    </div>
    )
  }
}