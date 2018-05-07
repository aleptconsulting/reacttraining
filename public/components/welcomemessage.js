var React = require("react");

var WelcomeMessage = React.createClass({
  render() {
    const city = this.props.city;
    const state = this.props.state;
    const name = this.props.name;
    const email = this.props.email;

    return (
      <div>
        <h3>city: {city}</h3>
        {/* <h3>state: {state}</h3>
        <h3>name: {name}</h3>
        <h3>email: {email}</h3> */}
      </div>
    );
  }
});

module.exports = WelcomeMessage;
