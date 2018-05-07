var React = require("react");

var WelcomeMessage = require("./welcomemessage.js");
var WelcomeForm = require("./welcomeform.js");

var WelcomeMain = React.createClass({
  getDefaultProps() {
    return {
      city: "Ahmedabad"
      // state: "GUJ",
      // name: "Vishal",
      // email: "vishal.avalani@gmail.com"
    };
  },
  getInitialState() {
    return {
      city: this.props.city
      // state: this.props.state,
      // name: this.props.name,
      // email: this.props.email
    };
  },
  // updateState(updates) {
  //   this.setState(updates);
  // },
  updateState(city) {
    this.setState({
      city: city
    });
  },
  render() {
    const city = this.state.city;
    // const state = this.state.state;
    // const name = this.state.name;
    // const email = this.state.email;

    return (
      <div className="container">
        <WelcomeMessage
          city={city}
          // state={state} name={name} email={email}
        />
        <WelcomeForm collectData={this.updateState} />
      </div>
    );
  }
});

module.exports = WelcomeMain;
