"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          "Cat Name: ",
          React.createElement("input", { value: this.props.catName, onChange: this.props.onChange })
        ),
        React.createElement(
          "p",
          null,
          "Cat Avatar: ",
          React.createElement(
            "select",
            { onChange: this.props.onPicChange },
            React.createElement(
              "option",
              { value: "0" },
              "Tuxedo Prankster"
            ),
            React.createElement(
              "option",
              { value: "1" },
              "Cute Calico"
            ),
            React.createElement(
              "option",
              { value: "2" },
              "Lil' Gray Cat"
            ),
            React.createElement(
              "option",
              { value: "3" },
              "Cheeky Orange Fluff"
            ),
            React.createElement(
              "option",
              { value: "4" },
              "Tan and Blocky"
            ),
            React.createElement(
              "option",
              { value: "5" },
              "Very White and Fluffy"
            ),
            React.createElement(
              "option",
              { value: "6" },
              "A loaf"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "catPreview" },
          React.createElement(
            "a",
            null,
            "Cat Preview:"
          ),
          React.createElement("img", { src: this.props.catPic, width: "60", height: "60" })
        ),
        React.createElement(
          "div",
          { className: "buttonDiv" },
          React.createElement(
            "button",
            { className: "button", onClick: this.props.onSend },
            "Submit Cat"
          )
        )
      );
    }
  }]);

  return Form;
}(React.Component);
