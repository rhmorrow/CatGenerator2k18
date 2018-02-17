console.log('hello friend!');

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      catName: '',
      cats: [],
      cativities: ['purring', 'sleeping', 'staring at you', 'climbing up the curtains', 'knocking things off the wall', 'nuzzling you', 'getting into trouble'],
      catPics: ["images/black.gif", "images/calico.gif", "images/gray.gif", "images/orange.gif", "images/squarebrown.gif", "images/white.gif", "images/loaf.gif"],
      catPic: "images/black.gif",
      meowing: []
    }
    this.findCats();
  }

  onChange (e) {
    this.setState({
      catName: e.target.value
    });
  }

  onPicChange (e) {
    this.setState({
      catPic: this.state.catPics[e.target.value]
    });
  }

  findCats() {
    var app = this;
    $.ajax({
      type: 'GET',
      url: '/cats',
      dataType: "text",
      success: function(data) {
        app.setState({
          cats: JSON.parse(data)
        })
      },
      error: function() {
        console.log('Sorry, the cats chewed up the server cables. . .')
      }
    })
  }

  submit() {
    var cat = this.state.catName
    var pic = this.state.catPic
    var app = this;
    $.ajax({
      type: 'POST',
      url: '/cats',
      data: {catName: cat, catPic: pic},
      dataType: "text",
      success: function() {
        console.log('Your new cat ' + cat + ' is happy to now exist!')
        app.findCats();
      },
      error: function() {
        console.log('Sorry, the cats chewed up the server cables. . .')
      }
    })
  }

  meow(e){
    this.setState({
      meowing: [e.target.props.catName]
    })
  }

  render() {
    return(<div>
      <h1>Welcome to Cat Generator Xtreme 2k18!</h1>
      <h2>To create a new cat, enter its details into the field below.</h2>
      <Form catName={this.state.catName} catPic={this.state.catPic} onPicChange={this.onPicChange.bind(this)} onChange={this.onChange.bind(this)} onSend={this.submit.bind(this)}/>
      <Catterbox cats={this.state.cats} meowing={this.state.meowing}/>
      <div className="catzone">CAT COLLECTION
      {this.state.cats.map(function(cat) {
        return <CatView className="cat" key={cat._id} meow={this.meow.bind(this)} catName={cat.name} catPic={cat.image} cativity={['purring', 'sleeping', 'staring at you', 'climbing up the curtains', 'knocking things off the wall', 'nuzzling you', 'getting into trouble', 'hunting toy mice', 'staring at you as you poop', 'meowing for no reason'][Math.floor(Math.random()*10)]}/>
      })}
      </div>
      </div>)
  }
};

ReactDOM.render( <App />, document.getElementById('app'));