var ReactDOM = require('react-dom');
var React = require('react');
var PropTypes = React.PropTypes;

var Button = React.createClass({
  getInitialState: function() {
    return {
      style : {
        color: "green"
      }
    };
  },
  render: function() {
    var buttonColor = this.state.style;
    return (
      <div>
        <button style={buttonColor}>一个React按钮</button>
      </div>
    );
  }

});

ReactDOM.render(<Button/>, document.getElementById('app'));
