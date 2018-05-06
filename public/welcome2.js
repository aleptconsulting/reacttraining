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
        <h3>state: {state}</h3>
        <h3>name: {name}</h3>
        <h3>email: {email}</h3>
      </div>
    );
  }
});
var WelcomeForm = React.createClass({
  submitcalled(e) {
    e.preventDefault();
    let updates = {};

    updates.name = this.refs.name.value;
    updates.email = this.refs.email.value;
    updates.city = this.refs.city.value;
    updates.state = this.refs.state.value;

    this.props.collectData(updates);
  },
  render() {
    return (
      <form onSubmit={this.submitcalled}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" ref="name" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="text" className="form-control" ref="email" />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input type="text" className="form-control" ref="city" />
        </div>
        <div className="form-group">
          <label>State:</label>
          <input type="text" className="form-control" ref="state" />
        </div>
        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>
    );
  }
});

var WelcomeMain = React.createClass({
  getDefaultProps() {
    return {
      city: "Ahmedabad",
      state: "GUJ",
      name: "Vishal",
      email: "vishal.avalani@gmail.com"
    };
  },
  getInitialState() {
    return {
      city: this.props.city,
      state: this.props.state,
      name: this.props.name,
      email: this.props.email
    };
  },
  updateState(updates) {
    this.setState(updates);
  },
  render() {
    const city = this.state.city;
    const state = this.state.state;
    const name = this.state.name;
    const email = this.state.email;

    return (
      <div className="container">
        <WelcomeMessage city={city} state={state} name={name} email={email} />
        <WelcomeForm collectData={this.updateState} />
      </div>
    );
  }
});

ReactDOM.render(
  <WelcomeMain city="Ahmedabad" />,
  document.getElementById("app")
);
