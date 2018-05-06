var React = require("react");
var ReactDOM = require("react-dom");

var WelcomeMain = require("./components/welcomemain");
// var Welcome = React.createClass({
//   // first called
//   getDefaultProps: function() {
//     return {
//       city: "Pune",
//       state: "Maharashtra"
//     };
//   },
//   // second call
//   getInitialState: function() {
//     return {
//       name: "Narendra"
//     };
//   },
//   callme: function(e) {
//     e.preventDefault();
//     const city = this.refs.txtCity.value;
//     const name = this.refs.txtName.value;
//     this.setState({
//       name: name
//     });
//     //alert(city);
//     alert("I am called");
//   },
//   render() {
//     const mycity = this.props.city;
//     const mystate = this.props.state;
//     const myname = this.state.name;
//     return (
//       <div className="container">
//         <h1>Welcome Component</h1>
//         <p>This is my first component</p>
//         <p>My city is: {mycity}</p>
//         <p>My state is: {mystate}</p>
//         <p>My name is: {myname}</p>
//         <form onSubmit={this.callme}>
//           <input type="text" ref="txtCity" />
//           <br />
//           Enter your name <br />
//           <input type="text" ref="txtName" />
//           <button className="btn btn-default">call me</button>
//         </form>
//       </div>
//     );
//   }
// });

ReactDOM.render(
  <WelcomeMain state="Gujarat" />,
  document.getElementById("app")
);
