import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class LoginScreen extends React.Component {
  state = {
    isPasswordRevealed: false,
  };

  handleSubmit = e => {
    const { onCheckPassword } = this.props;

    e.preventDefault();
    onCheckPassword(document.forms.password.password.value);
  }

  handlePasswordToggle = e => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        isPasswordRevealed: !prevState.isPasswordRevealed
      }
    });
  }

  render() {
    const { error } = this.props;
    const { isPasswordRevealed } = this.state;

    return (
      <div className="login-screen">
        <form
          className="login-screen__field-wrapper"
          onSubmit={this.handleSubmit}
          name="password"
        >
          <label className="login-screen__field-label" htmlFor="password">Password</label>
          <div className="login-screen__field">
            <input
              className={`login-screen__field-input ${error && 'login-screen__field-input--error'}`}
              type={isPasswordRevealed ? 'text' : 'password'}
              name="password"
              spellCheck="false"
            />
            <button className="login-screen__field-toggle" onClick={this.handlePasswordToggle}>{isPasswordRevealed ? 'hide' : 'show'}</button>
          </div>
          <button className="login-screen__submit" type="submit" value="Submit">Submit</button>
          {error && (
            <div style={{ marginTop: '15px' }}>
              <p className="login-screen__error">Please enter the password printed on your RSVP card.</p>
              <p className="login-screen__error">If you have any issues accessing the website, please <a href="mailto:christopher.kam.hui@gmail.com" style={{ color: '#232b2b' }}>contact us</a>.</p>
            </div>
          )}
        </form>
      </div>
    );
  }
}

LoginScreen.propTypes = {
  onCheckPassword: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired
};

export default LoginScreen;
