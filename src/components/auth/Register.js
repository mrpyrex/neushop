import React, { Component } from "react";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/actions/user.action";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div>
        <h3>Register</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            name="displayName"
            value={displayName}
            type="text"
            placeholder="Displayname"
            onChange={this.handleChange}
          />

          <input
            name="email"
            value={email}
            type="email"
            placeholder="Email"
            onChange={this.handleChange}
          />

          <input
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />

          <input
            name="confirmPassword"
            value={confirmPassword}
            type="password"
            placeholder="Confirm Password"
            onChange={this.handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(Register);
