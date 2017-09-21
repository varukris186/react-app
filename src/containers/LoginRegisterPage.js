import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/userActions';

class LoginRegisterPage extends React.Component{

    constructor(props, context) {
        super(props, context);
    
        this.save = this.save.bind(this);
       
    }

    save() {
        console.log(this);

         this.props.actions.register();
    }   

  render(){  
  return (
    <div>
        <div className="login-box">
    <div className="lb-header">
      <a href="#" className="active" id="login-box-link">Login</a>
      <a href="#" id="signup-box-link">Sign Up</a>
    </div>
    <div className="social-login">
      <a href="#">
        <i className="fa fa-facebook fa-lg"></i>
        Login in with facebook
      </a>
      <a href="#">
        <i className="fa fa-google-plus fa-lg"></i>
        log in with Google
      </a>
    </div>
    <section className="email-login"  onClick={this.save}>
      <div className="u-form-group">
        <input type="email" placeholder="Email"/>
      </div>
      <div className="u-form-group">
        <input type="password" placeholder="Password"/>
      </div>
      <div className="u-form-group">
        <button>Log in</button>
      </div>
      <div className="u-form-group">
        <a href="#" className="forgot-password">Forgot password?</a>
      </div>
    </section>
    <form className="email-signup">
      <div className="u-form-group">
        <input type="email" placeholder="Email"/>
      </div>
      <div className="u-form-group">
        <input type="password" placeholder="Password"/>
      </div>
      <div className="u-form-group">
        <input type="password" placeholder="Confirm Password"/>
      </div>
      <div className="u-form-group">
        <button>Sign Up</button>
      </div>
    </form>
  </div>
    </div>    

    
  );

} 

}

LoginRegisterPage.save = function(){
    alert("123");
};

LoginRegisterPage.propTypes = {
  actions: PropTypes.object.isRequired,
  userdetails: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    userdetails : state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginRegisterPage);


