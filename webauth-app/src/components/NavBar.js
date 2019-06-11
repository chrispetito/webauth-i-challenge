import React from "react";
import { login } from "../actions";
import { connect } from "react-redux";

class NavBar extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  render() {
    return (
      <div>
        <h1>navbar test</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggingIn: state.isLoggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(NavBar);
