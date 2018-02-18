'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('hello friend!');

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      catName: '',
      cats: [],
      cativities: ['purring', 'sleeping', 'staring at you', 'climbing up the curtains', 'knocking things off the wall', 'nuzzling you', 'getting into trouble', 'hunting toy mice', 'staring at you as you poop', 'meowing for no reason'],
      catPics: ["images/black.gif", "images/calico.gif", "images/gray.gif", "images/orange.gif", "images/squarebrown.gif", "images/white.gif", "images/loaf.gif"],
      catPic: "images/black.gif"
    };
    _this.findCats();
    return _this;
  }

  _createClass(App, [{
    key: 'onChange',
    value: function onChange(e) {
      this.setState({
        catName: e.target.value
      });
    }
  }, {
    key: 'onPicChange',
    value: function onPicChange(e) {
      this.setState({
        catPic: this.state.catPics[e.target.value]
      });
    }
  }, {
    key: 'findCats',
    value: function findCats() {
      var app = this;
      $.ajax({
        type: 'GET',
        url: '/cats',
        dataType: "text",
        success: function success(data) {
          data = JSON.parse(data);
          data.forEach(function (cat) {
            cat.cativity = app.state.cativities[Math.floor(Math.random() * 10)];
          });
          app.setState({
            cats: data
          });
        },
        error: function error() {
          console.log('Sorry, the cats chewed up the server cables. . .');
        }
      });
    }
  }, {
    key: 'removeCat',
    value: function removeCat(catName) {
      $.ajax({
        type: 'DELETE',
        url: '/cats',
        data: { catName: catName },
        dataType: "text",
        success: function success() {
          console.log(catName + ' has been set loose!');
        },
        error: function error() {
          console.log('Sorry, the cats chewed up the server cables. . .');
        }
      });
    }
  }, {
    key: 'submit',
    value: function submit() {
      var cat = this.state.catName;
      var pic = this.state.catPic;
      var app = this;
      if (cat === "Moxie") {
        console.log('Mox man?!');
        var pic = 'images/moxie.jpg';
      }
      $.ajax({
        type: 'POST',
        url: '/cats',
        data: { catName: cat, catPic: pic },
        dataType: "text",
        success: function success() {
          console.log('Your new cat ' + cat + ' is happy to now exist!');
          setTimeout(function () {
            app.findCats();
          }, 100);
        },
        error: function error() {
          console.log('Sorry, the cats chewed up the server cables. . .');
        }
      });
    }
  }, {
    key: 'meow',
    value: function meow(e) {
      this.setState({
        meowing: [e.target.props.catName]
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Welcome to Cat Generator Xtreme 2k18!'
        ),
        React.createElement(
          'h2',
          null,
          'To create a new cat, enter its details into the field below.'
        ),
        React.createElement(Form, { catName: this.state.catName, catPic: this.state.catPic, onPicChange: this.onPicChange.bind(this), onChange: this.onChange.bind(this), onSend: this.submit.bind(this) }),
        React.createElement(Catterbox, { cats: this.state.cats }),
        React.createElement(
          'div',
          { className: 'catzone' },
          React.createElement(
            'h2',
            null,
            'CAT COLLECTION'
          ),
          this.state.cats.map(function (cat) {
            return React.createElement(CatView, { className: 'cat', key: cat._id, catName: cat.name, catPic: cat.image, cativity: cat.cativity });
          })
        )
      );
    }
  }]);

  return App;
}(React.Component);

;

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
