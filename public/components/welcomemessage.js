var React = require("react");

var WelcomeMessage = React.createClass({
  render() {
    const { city, temp } = this.props;
    // const city = this.props.city;
    // const temp = this.props.temp;
    // const state = this.props.state;
    // const name = this.props.name;
    // const email = this.props.email;

    return (
      <div>
        <div className="panel panel-default panel-primary">
          <div className="panel-heading">OpenWeather Temperature</div>
          <div className="panel-body">
            <h3>
              <strong>City:</strong> {city}
            </h3>
            <h3>
              <strong>Temperataure:</strong> {temp} C
            </h3>
          </div>
        </div>
        {/* <h3>state: {state}</h3>
        <h3>name: {name}</h3>
        <h3>email: {email}</h3> */}
      </div>
    );
  }
});

module.exports = WelcomeMessage;
