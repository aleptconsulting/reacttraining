var React = require("react");

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

module.exports = WelcomeForm;
