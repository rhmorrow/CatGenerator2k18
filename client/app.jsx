console.log('hello friend!');

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      catName: 'Fluffy'
    }
    this.findCats();
  }

  onChange (e) {
    this.setState({
      catName: e.target.value
    });
  }

  findCats() {
    $.ajax({
      type: 'GET',
      url: '/cats',
      dataType: "text",
      success: function(err, data) {
        console.log(data);
      },
      error: function() {
        console.log('Sorry, the cats chewed up the server cables. . .')
      }
    })
  }

  submit() {
    var cat = this.state.catName
    $.ajax({
      type: 'POST',
      url: '/cats',
      data: {catName: cat},
      dataType: "text",
      success: function() {
        console.log('Your new cat ' + cat + ' is happy to now exist!')
      },
      error: function() {
        console.log('Sorry, the cats chewed up the server cables. . .')
      }
    })
  }

  render() {
    return(<div>
      <h1>Welcome to Cat Generator Xtreme 2k18!</h1>
      <h2>To create a new cat, enter its details into the field below.</h2>
      <Form catName={this.state.catName} catColor={this.state.catColor} onChange={this.onChange.bind(this)} onSend={this.submit.bind(this)}/>
      </div>)
  }
};

ReactDOM.render( <App />, document.getElementById('app'));