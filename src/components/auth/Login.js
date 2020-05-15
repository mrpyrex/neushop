import React, { Component } from "react";
import { connect } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/actions/user.action";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { googleSignInStart } = this.props;
    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            value={this.state.email}
            required
            type="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <input
            name="password"
            value={this.state.password}
            required
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
          <button type="button" onClick={googleSignInStart}>
            Google Signin
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(Login);
