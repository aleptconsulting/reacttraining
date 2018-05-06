var Welcome = React.createClass({
  render() {
    return (
      <div>
        <h1>Welcome Component</h1>
        <p>This is my first component</p>
      </div>
    );
  }
});

ReactDOM.render(<Welcome />, document.getElementById("app"));
