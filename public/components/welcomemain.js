var React = require("react");
var WelcomeMessage = require("./welcomemessage.js");
var WelcomeForm = require("./welcomeform.js");
var openWeatherMap = require("./api/openweathermap.js");

var WelcomeMain = React.createClass({
  // getDefaultProps() {
  //   return {
  //     city: "Ahmedabad"
  //     // state: "GUJ",
  //     // name: "Vishal",
  //     // email: "vishal.avalani@gmail.com"
  //   };
  // },
  getInitialState() {
    return {
      // city: this.props.city,
      city: "Ahmedabad",
      temp: 44
      // state: this.props.state,
      // name: this.props.name,
      // email: this.props.email
    };
  },
  // updateState(updates) {
  //   this.setState(updates);
  // },
  updateState(city) {
    var that = this;

    openWeatherMap.getTemp(city).then(
      function(temp) {
        that.setState({
          city: city,
          temp: temp
        });
      },
      function(errorMessage) {
        alert(errorMessage);
      }
    );

    // this.setState({
    //   city: city
    // });
  },
  render() {
    // const city = this.state.city;
    // const temp = this.state.temp;

    const { city, temp } = this.state;

    // const state = this.state.state;
    // const name = this.state.name;
    // const email = this.state.email;

    return (
      <div className="container">
        <WelcomeMessage
          city={city}
          temp={temp}
          // state={state} name={name} email={email}
        />
        <WelcomeForm collectData={this.updateState} />
      </div>
    );
  }
});

module.exports = WelcomeMain;
