class Catterbox extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (<div className="catterbox">
      <h3>CatterBox</h3>
      <div>
      <div>Currently {this.props.cats.length} cats in chat.</div>
      {this.props.meowing.map(function(cat) {
        return(<div>{cat}: Meow!</div>)
      })}
      </div>
    </div>
    )
  }
}