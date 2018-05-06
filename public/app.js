var Welcome = React.createClass({
  getDefaultProps: function() {
    return {
      city: "Pune",
      state: "Maharashtra"
    };
  },
  callme: function(e) {
    e.preventDefault();
    const city = this.refs.txtCity.value;
    alert(city);
    alert("I am called");
  },
  render() {
    const mycity = this.props.city;
    const mystate = this.props.state;
    return (
      <div className="container">
        <h1>Welcome Component</h1>
        <p>This is my first component</p>
        <p>My city is: {mycity}</p>
        <p>My state is: {mystate}</p>
        <form onSubmit={this.callme}>
          <input type="text" ref="txtCity" />
          <button className="btn btn-default">call me</button>
        </form>
      </div>
    );
  }
});

ReactDOM.render(<Welcome state="Gujarat" />, document.getElementById("app"));
