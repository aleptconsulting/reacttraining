var Welcome = React.createClass({
  getDefaultProps: function() {
    return {
      city: "Pune",
      state: "Maharashtra"
    };
  },
  render() {
    const mycity = this.props.city;
    const mystate = this.props.state;
    return (
      <div>
        <h1>Welcome Component</h1>
        <p>This is my first component</p>
        <p>My city is: {mycity}</p>
        <p>My state is: {mystate}</p>
      </div>
    );
  }
});

ReactDOM.render(<Welcome state="Gujarat" />, document.getElementById("app"));
