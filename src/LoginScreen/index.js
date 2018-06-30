import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const LoginScreen = ({ onCheckPassword }) => (
  <div className="login-screen">
    <form
      className="login-screen__field-wrapper"
      onSubmit={e => { e.preventDefault(); onCheckPassword(document.forms.password.password.value)}}
      name="password"
    >
      <label className="login-screen__field-label" htmlFor="password">
        Password
        <input className="login-screen__field-input" type="password" name="password" />
      </label>
      <button className="login-screen__submit" type="submit" value="Submit">Submit</button>
    </form>
  </div>
);

LoginScreen.propTypes = {
  onCheckPassword: PropTypes.func.isRequired
};

export default LoginScreen;
