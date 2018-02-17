console.log('hello friend!');

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      catName: 'Fluffy',
      cats: [],
      cativities: ['purring', 'sleeping', 'staring at you', 'climbing up the curtains', 'knocking things off the wall', 'nuzzling you', 'getting into trouble'],
      catPics: ["http://33.media.tumblr.com/f02aed641beb7a5059d57484c7f80f8c/tumblr_nlmmguXypN1tv87ujo1_400.gif", "https://s-media-cache-ak0.pinimg.com/originals/56/01/f8/5601f86fe8928676688bd32f17f99651.gif", "https://orig00.deviantart.net/5ff5/f/2013/267/e/4/tumblr_mq43pqiiel1s8mgkyo1_500_by_mydreammagic-d6nqi77.gif", "https://vignette.wikia.nocookie.net/clubpenguinpookie/images/1/10/Cat2.gif/revision/latest?cb=20150313190619"],
      catPic: "http://33.media.tumblr.com/f02aed641beb7a5059d57484c7f80f8c/tumblr_nlmmguXypN1tv87ujo1_400.gif"
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

  render() {
    return(<div>
      <h1>Welcome to Cat Generator Xtreme 2k18!</h1>
      <h2>To create a new cat, enter its details into the field below.</h2>
      <Form catName={this.state.catName} catPic={this.state.catPic} onPicChange={this.onPicChange.bind(this)} onChange={this.onChange.bind(this)} onSend={this.submit.bind(this)}/>
      {this.state.cats.map(function(cat) {
        return <CatView key={cat._id} catName={cat.name} catPic={cat.image} cativity={['purring', 'sleeping', 'staring at you', 'climbing up the curtains', 'knocking things off the wall', 'nuzzling you', 'getting into trouble', 'hunting toy mice', 'staring at you as you poop', 'meowing for no reason'][Math.floor(Math.random()*10)]}/>
      })}
      </div>)
  }
};

ReactDOM.render( <App />, document.getElementById('app'));