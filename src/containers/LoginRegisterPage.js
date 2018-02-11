import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/userActions';
import * as CONSTANTS from '../constants/actionTypes';
import fireInteractiveComponent from '../hoc/firebase';

class LoginRegisterPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      email: "",
      password: "",
      lemail: "",
      lpassword: ""
    };
    this.save = this.save.bind(this);
    this.login = this.login.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }


  componentDidMount() {
    $(".email-signup").hide();
    $("#signup-box-link").click(function () {
      $(".email-login").fadeOut(100);
      $(".email-signup").delay(100).fadeIn(100);
      $("#login-box-link").removeClass("active");
      $("#signup-box-link").addClass("active");
    });
    $("#login-box-link").click(function () {
      $(".email-login").delay(100).fadeIn(100);;
      $(".email-signup").fadeOut(100);
      $("#login-box-link").addClass("active");
      $("#signup-box-link").removeClass("active");
    });
  }


  updateInputValue(evt) {
    switch (evt.target.name) {
      case 'email':
        this.setState({ email: evt.target.value });
        break;
      case 'password':
        this.setState({ password: evt.target.value });
        break;
      case 'lemail':
        this.setState({ lemail: evt.target.value });
        break;
      case 'lpassword':
        this.setState({ lpassword: evt.target.value });
        break;
      default:
    }
  }



  save() {
    let result = this.props.firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
    result.then(() => {
      this.props.actions.register(CONSTANTS.REGISTER_SUCCESS);
    }, () => {
      this.props.actions.register(CONSTANTS.REGISTER_FAILURE);
    });
  }


  login() {
    let result = this.props.firebase.auth().signInWithEmailAndPassword(this.state.lemail, this.state.lpassword).catch((error) => {
      
      this.props.actions.handleLogin(CONSTANTS.LOGIN_FAILURE,error);
    });
    result.then((loginData) =>{
      if(loginData !== undefined){
        this.props.actions.handleLogin(CONSTANTS.LOGIN_SUCCESS,loginData);
      }
    });
  }

  render() {
    return (
      <div className="loginContainer">
        <div className="login-box">
          <div className="lb-header">
            <a href="#" className="active" id="login-box-link">Login</a>
            <a href="#" id="signup-box-link">Sign Up</a>
          </div>
          <div className="social-login">
            <div className="col-xs-12 login-option-container">
                <div className="col-xs-6 login-option fb-login">
                    <a href="#">
                      <i className="fa fa-facebook fa-lg"></i>
                      Login in with facebook
                    </a>
                </div>
                <div className="col-xs-5 login-option google-login">
                    <a href="#">
                      <i className="fa fa-google-plus fa-lg"></i>
                      log in with Google
                    </a>
                </div>
            </div>
          </div>
          <section className="email-login" >
            <div className="u-form-group">
              <input type="email" name="lemail" placeholder="Email" value={this.state.lemail} onChange={this.updateInputValue}/>
            </div>
            <div className="u-form-group">
              <input type="password" name="lpassword" value={this.state.lpassword} onChange={this.updateInputValue} placeholder="Password" />
            </div>
            <div className="u-form-group">
              <button onClick={this.login}> Log in</button>
            </div>
            <div className="u-form-group">
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
          </section>
          <form className="email-signup" action="javascript:void();" >
            <div className="u-form-group">
              <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.updateInputValue} />
            </div>
            <div className="u-form-group">
              <input type="password" placeholder="Password" name="password" />
            </div>
            <div className="u-form-group">
              <input type="password" placeholder="Confirm Password" name="password" onChange={this.updateInputValue} value={this.state.password} />
            </div>
            <div className="u-form-group">
              <button onClick={this.save}>Sign Up</button>
            </div>
          </form>
        </div>
      </div>


    );

  }

}

LoginRegisterPage.save = function () {
  alert("123");
};

LoginRegisterPage.propTypes = {
  actions: PropTypes.object.isRequired,
  userdetails: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    userdetails: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default fireInteractiveComponent(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginRegisterPage));


