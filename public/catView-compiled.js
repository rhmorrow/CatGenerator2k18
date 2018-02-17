'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CatView = function (_React$Component) {
  _inherits(CatView, _React$Component);

  function CatView(props) {
    _classCallCheck(this, CatView);

    var _this = _possibleConstructorReturn(this, (CatView.__proto__ || Object.getPrototypeOf(CatView)).call(this, props));

    _this.state = {
      cativities: ['purring', 'sleeping', 'staring at you', 'climbing up the curtains', 'knocking things off the wall', 'nuzzling you', 'getting into trouble', 'hunting toy mice', 'staring at you as you poop', 'meowing for no reason'],
      cativity: _this.props.cativity
    };
    _this.change.bind(_this);
    return _this;
  }

  _createClass(CatView, [{
    key: 'change',
    value: function change() {
      var cat = this;
      this.setState({
        cativity: cat.state.cativities[Math.floor(Math.random() * 10)]
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'catView', onClick: this.props.meow },
        React.createElement('img', { onClick: this.change.bind(this), src: this.props.catPic, width: '30', height: '30' }),
        ' ',
        React.createElement(
          'a',
          null,
          this.props.catName,
          ' is ',
          this.state.cativity,
          '! '
        )
      );
    }
  }]);

  return CatView;
}(React.Component);
